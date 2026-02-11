"use client";

import { use, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
    ChevronLeft,
    ChevronRight,
    Video,
    Clock,
    CheckCircle2,
    ArrowRight,
} from 'lucide-react';

interface Doctor {
    id: string;
    name: string;
    specialization: string;
    hospitalId: string;
    experience: number;
    qualifications: string[];
    languages: string[];
    rating: number;
    reviewCount: number;
    imageUrl?: string;
    consultationFee: number;
    currency: string;
    availableDays: string[];
}

interface Hospital {
    id: string;
    name: string;
    country: string;
    city: string;
}

interface TimeSlot {
    time: string;
    available: boolean;
}

interface AvailabilityData {
    morning: TimeSlot[];
    afternoon: TimeSlot[];
}

const CONSULTATION_TYPES = [
    {
        id: 'initial_assessment',
        name: 'Initial Assessment',
        description: 'First time discussing your case and medical records.',
    },
    {
        id: 'follow_up',
        name: 'Follow-up Call',
        description: 'Reviewing progress or post-procedure status.',
    },
    {
        id: 'second_opinion',
        name: 'Second Opinion',
        description: 'Consulting for a comparative diagnosis.',
    },
];

export default function ConsultationBookingPage({ params }: { params: Promise<{ doctorId: string }> }) {
    const router = useRouter();

    // Unwrap params Promise for Next.js 15+
    const { doctorId } = use(params);

    const [doctor, setDoctor] = useState<Doctor | null>(null);
    const [hospital, setHospital] = useState<Hospital | null>(null);
    const [loading, setLoading] = useState(true);

    // Booking state
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [selectedType, setSelectedType] = useState<string>('initial_assessment');
    const [availability, setAvailability] = useState<AvailabilityData | null>(null);

    // Calendar state
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // Form data
    const [patientName, setPatientName] = useState('');
    const [patientEmail, setPatientEmail] = useState('');
    const [patientPhone, setPatientPhone] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');

    // Fetch doctor data
    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const res = await fetch(`http://localhost:3000/doctors/${doctorId}`);
                const doctorData = await res.json();
                setDoctor(doctorData);

                // Fetch hospital data
                if (doctorData.hospitalId) {
                    const hospitalRes = await fetch(`http://localhost:3000/hospitals/${doctorData.hospitalId}`);
                    const hospitalData = await hospitalRes.json();
                    setHospital(hospitalData);
                }
            } catch (error) {
                console.error('Error fetching doctor:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDoctor();
    }, [doctorId]);

    // Fetch availability when date changes
    useEffect(() => {
        if (selectedDate && doctor) {
            const fetchAvailability = async () => {
                try {
                    const dateStr = selectedDate.toISOString().split('T')[0];
                    const res = await fetch(`http://localhost:3000/availability/${doctor.id}?date=${dateStr}&grouped=true`);
                    const data = await res.json();
                    setAvailability(data);
                } catch (error) {
                    console.error('Error fetching availability:', error);
                }
            };

            fetchAvailability();
        }
    }, [selectedDate, doctor]);

    // Calendar functions
    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const days: (number | null)[] = [];

        // Add empty slots for days before month starts
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null);
        }

        // Add all days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }

        return days;
    };

    const isPastDate = (day: number) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const dateToCheck = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        return dateToCheck < today;
    };

    const isSelectedDate = (day: number) => {
        if (!selectedDate) return false;
        return (
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentMonth.getMonth() &&
            selectedDate.getFullYear() === currentMonth.getFullYear()
        );
    };

    const handleDateClick = (day: number) => {
        if (isPastDate(day)) return;
        const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        setSelectedDate(newDate);
        setSelectedTime(''); // Reset selected time
    };

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const handleBooking = async () => {
        if (!doctor || !selectedDate || !selectedTime || !patientName || !patientEmail) {
            alert('Please fill in all required fields');
            return;
        }

        const bookingData = {
            doctorId: doctor.id,
            patientName,
            patientEmail,
            patientPhone,
            date: selectedDate.toISOString().split('T')[0],
            time: selectedTime,
            timezone: 'GMT-5 New York, Eastern Time',
            consultationType: selectedType,
            duration: 30,
            fee: doctor.consultationFee,
            currency: doctor.currency,
            medicalHistory,
        };

        try {
            const res = await fetch('http://localhost:3000/consultations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookingData),
            });

            if (res.ok) {
                const consultation = await res.json();
                // alert(`Booking confirmed! Consultation ID: ${consultation.id}`);
                router.push(`/booking/success?id=${consultation.id}`);
            } else {
                alert('Booking failed. Please try again.');
            }
        } catch (error) {
            console.error('Error creating booking:', error);
            alert('An error occurred. Please try again.');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }

    if (!doctor) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">Doctor not found</div>
            </div>
        );
    }

    const days = getDaysInMonth(currentMonth);
    const monthName = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container-custom">
                {/* Breadcrumb */}
                <div className="mb-6 text-sm text-gray-600">
                    <Link href="/" className="hover:text-primary">Search Results</Link>
                    {' / '}
                    <Link href="#" className="hover:text-primary">{doctor.name}</Link>
                    {' / '}
                    <span className="text-gray-900 font-medium">Booking</span>
                </div>

                {/* Header */}
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Schedule Virtual Consultation</h1>
                <p className="text-gray-600 mb-8">
                    Book a high-definition video call with your selected specialist from anywhere in the world.
                </p>

                {/* Main Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left: Doctor Profile & Booking Form */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Doctor Card */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 flex items-start gap-6">
                            <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                                {doctor.imageUrl && (
                                    <Image
                                        src={doctor.imageUrl}
                                        alt={doctor.name}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                                <div className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            <div className="flex-1">
                                <h2 className="text-xl font-bold text-gray-900">{doctor.name}</h2>
                                <p className="text-primary font-medium">{doctor.specialization}</p>
                                {hospital && (
                                    <p className="text-sm text-gray-600 mt-1">
                                        {hospital.name}, {hospital.city}
                                    </p>
                                )}
                                <div className="mt-3 flex flex-wrap gap-4 text-sm">
                                    <div>
                                        <span className="font-medium">Consultation Fee:</span>{' '}
                                        <span className="text-primary font-bold">${doctor.consultationFee}.00</span>
                                    </div>
                                    <div>
                                        <span className="font-medium">Duration:</span> 30 Minutes
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Video className="w-4 h-4 text-primary" />
                                        <span>Secure HD Video</span>
                                    </div>
                                </div>
                                <p className="mt-3 text-sm text-gray-600 italic">
                                    "A virtual consultation is the first step towards personalized care, allowing us to review your history and plan your journey before you even travel."
                                </p>
                            </div>
                        </div>

                        {/* Step Indicator */}
                        <div className="flex items-center gap-4">
                            <div className={`flex items-center gap-2 ${currentStep >= 1 ? 'text-emerald-600' : 'text-gray-400'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${currentStep >= 1 ? 'bg-emerald-600 text-white' : 'bg-gray-200'}`}>
                                    1
                                </div>
                                <span className="font-medium">Select Date & Time</span>
                            </div>
                            <div className="flex-1 h-0.5 bg-gray-200"></div>
                            <div className={`flex items-center gap-2 ${currentStep >= 2 ? 'text-emerald-600' : 'text-gray-400'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${currentStep >= 2 ? 'bg-emerald-600 text-white' : 'bg-gray-200'}`}>
                                    2
                                </div>
                                <span className="font-medium">Medical Details</span>
                            </div>
                            <div className="flex-1 h-0.5 bg-gray-200"></div>
                            <div className={`flex items-center gap-2 ${currentStep >= 3 ? 'text-emerald-600' : 'text-gray-400'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${currentStep >= 3 ? 'bg-emerald-600 text-white' : 'bg-gray-200'}`}>
                                    3
                                </div>
                                <span className="font-medium">Payment</span>
                            </div>
                        </div>

                        {/* Step 1: Date & Time Selection */}
                        {currentStep === 1 && (
                            <div className="bg-white rounded-2xl shadow-sm p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Select Date</h3>

                                {/* Calendar */}
                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold text-gray-900">{monthName}</h4>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={handlePrevMonth}
                                                className="p-2 hover:bg-gray-100 rounded-lg transition"
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={handleNextMonth}
                                                className="p-2 hover:bg-gray-100 rounded-lg transition"
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-7 gap-2">
                                        {['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'].map((day) => (
                                            <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                                                {day}
                                            </div>
                                        ))}
                                        {days.map((day, index) => (
                                            <button
                                                key={index}
                                                onClick={() => day && handleDateClick(day)}
                                                disabled={!day || isPastDate(day)}
                                                className={`
                          aspect-square rounded-lg text-sm font-medium transition-all
                          ${!day ? 'invisible' : ''}
                          ${day && isPastDate(day) ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-emerald-50'}
                          ${day && isSelectedDate(day) ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'text-gray-900'}
                        `}
                                            >
                                                {day}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Time Slots */}
                                {selectedDate && availability && (
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-bold text-gray-900">Available Slots</h3>
                                            <div className="flex gap-4 text-sm">
                                                <button className="px-4 py-2 rounded-lg bg-gray-100 font-medium">MY TIME</button>
                                                <button className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 font-medium">CLINIC</button>
                                            </div>
                                        </div>

                                        {/* Morning */}
                                        <div className="mb-6">
                                            <p className="text-sm font-medium text-gray-500 mb-3">MORNING</p>
                                            <div className="grid grid-cols-4 gap-3">
                                                {availability.morning.map((slot) => (
                                                    <button
                                                        key={slot.time}
                                                        onClick={() => slot.available && setSelectedTime(slot.time)}
                                                        disabled={!slot.available}
                                                        className={`
                              py-2 px-4 rounded-xl font-medium transition-all
                              ${!slot.available ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : ''}
                              ${selectedTime === slot.time ? 'bg-emerald-600 text-white' : 'bg-white border-2 border-gray-200 hover:border-emerald-600'}
                            `}
                                                    >
                                                        {slot.time}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Afternoon */}
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 mb-3">AFTERNOON</p>
                                            <div className="grid grid-cols-4 gap-3">
                                                {availability.afternoon.map((slot) => (
                                                    <button
                                                        key={slot.time}
                                                        onClick={() => slot.available && setSelectedTime(slot.time)}
                                                        disabled={!slot.available}
                                                        className={`
                              py-2 px-4 rounded-xl font-medium transition-all
                              ${!slot.available ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : ''}
                              ${selectedTime === slot.time ? 'bg-emerald-600 text-white' : 'bg-white border-2 border-gray-200 hover:border-emerald-600'}
                            `}
                                                    >
                                                        {slot.time}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Type of Consultation */}
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Type of Consultation</h3>
                                    <div className="grid grid-cols-3 gap-4">
                                        {CONSULTATION_TYPES.map((type) => (
                                            <button
                                                key={type.id}
                                                onClick={() => setSelectedType(type.id)}
                                                className={`
                          p-4 rounded-xl border-2 text-left transition-all
                          ${selectedType === type.id ? 'border-emerald-600 bg-emerald-50' : 'border-gray-200 hover:border-emerald-600'}
                        `}
                                            >
                                                <div className="flex items-start gap-3">
                                                    {selectedType === type.id && (
                                                        <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                            <CheckCircle2 className="w-3 h-3 text-white" />
                                                        </div>
                                                    )}
                                                    <div className="flex-1">
                                                        <h4 className="font-semibold text-gray-900 text-sm mb-1">{type.name}</h4>
                                                        <p className="text-xs text-gray-600">{type.description}</p>
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => setCurrentStep(2)}
                                    disabled={!selectedDate || !selectedTime}
                                    className="mt-8 w-full bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                                >
                                    Continue to Medical Details
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        )}

                        {/* Step 2: Medical Details */}
                        {currentStep === 2 && (
                            <div className="bg-white rounded-2xl shadow-sm p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Your Information</h3>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                        <input
                                            type="text"
                                            value={patientName}
                                            onChange={(e) => setPatientName(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                        <input
                                            type="email"
                                            value={patientEmail}
                                            onChange={(e) => setPatientEmail(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            value={patientPhone}
                                            onChange={(e) => setPatientPhone(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Medical History (Optional)</label>
                                        <textarea
                                            value={medicalHistory}
                                            onChange={(e) => setMedicalHistory(e.target.value)}
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all resize-none"
                                            placeholder="Please share any relevant medical history, current medications, or specific concerns you'd like to discuss..."
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-8">
                                    <button
                                        onClick={() => setCurrentStep(1)}
                                        className="flex-1 bg-gray-100 text-gray-700 font-bold py-4 rounded-xl hover:bg-gray-200 transition-all"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={() => setCurrentStep(3)}
                                        disabled={!patientName || !patientEmail}
                                        className="flex-1 bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                                    >
                                        Continue to Payment
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Payment */}
                        {currentStep === 3 && (
                            <div className="bg-white rounded-2xl shadow-sm p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Information</h3>

                                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                                    <p className="text-sm text-blue-800">
                                        <strong>Note:</strong> This is a demo. No actual payment will be processed.
                                    </p>
                                </div>

                                <p className="text-sm text-gray-600 mb-6">
                                    🔒 Secure SSL Encrypted Payment Process. Your health data is protected by HIPAA/GDPR standards.
                                </p>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setCurrentStep(2)}
                                        className="flex-1 bg-gray-100 text-gray-700 font-bold py-4 rounded-xl hover:bg-gray-200 transition-all"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={handleBooking}
                                        className="flex-1 bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
                                    >
                                        Confirm & Book Consultation
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right: Booking Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-900 rounded-2xl shadow-xl p-6 text-white sticky top-6">
                            <h3 className="text-sm font-medium text-gray-400 uppercase mb-4">Your Selection</h3>

                            <div className="space-y-4">
                                {selectedDate && selectedTime && (
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Date & Time</p>
                                        <p className="font-bold text-lg">
                                            {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} at {selectedTime}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">(GMT-5 New York, Eastern Time)</p>
                                    </div>
                                )}

                                {selectedType && (
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Consultation Type</p>
                                        <p className="font-semibold">
                                            {CONSULTATION_TYPES.find(t => t.id === selectedType)?.name}
                                        </p>
                                    </div>
                                )}

                                <div className="border-t border-gray-700 pt-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-400">TOTAL FEE</span>
                                        <span className="text-3xl font-bold text-emerald-400">${doctor.consultationFee}.00</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    if (currentStep === 1 && selectedDate && selectedTime) setCurrentStep(2);
                                    else if (currentStep === 2 && patientName && patientEmail) setCurrentStep(3);
                                    else if (currentStep === 3) handleBooking();
                                }}
                                disabled={
                                    (currentStep === 1 && (!selectedDate || !selectedTime)) ||
                                    (currentStep === 2 && (!patientName || !patientEmail))
                                }
                                className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 disabled:bg-gray-700 disabled:cursor-not-allowed transition-all mt-6 flex items-center justify-center gap-2"
                            >
                                {currentStep === 3 ? 'Confirm & Continue' : 'Continue'}
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
