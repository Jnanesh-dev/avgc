"use client";

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import {
    LayoutGrid, Calendar, FileText, Users, MessageSquare,
    Video, CheckCircle2, Circle, Play, Plane,
    Search, Bell, User, ChevronRight, HelpCircle
} from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

// Admin Components
import AdminDashboard from '@/components/dashboard/AdminDashboard';

// Recovery Components
import RecoveryTimeline from '@/components/recovery/RecoveryTimeline';
import VitalSignsCards from '@/components/recovery/VitalSignsCards';
import RecoveryTrendsChart from '@/components/recovery/RecoveryTrendsChart';
import MedicationChecklist from '@/components/recovery/MedicationChecklist';
import SymptomLoggingForm from '@/components/recovery/SymptomLoggingForm';
import EmergencyIndicators from '@/components/recovery/EmergencyIndicators';

// Types
interface JourneyStage {
    name: string;
    status: string;
    date?: string;
    description?: string;
}

interface MedicalJourney {
    patientId: string;
    procedure: string;
    destination: string;
    stages: JourneyStage[];
}

interface DocumentItem {
    id: string;
    name: string;
    size: string;
    type: string;
}

interface CareTeamMember {
    id: string;
    name: string;
    role: string;
    online: boolean;
}

interface UpcomingConsultation {
    id: string;
    doctorName: string;
    doctorTitle: string;
    procedure: string;
    scheduledFor: string;
    meetingLink?: string;
}

interface PatientProfile {
    id: string;
    name: string;
    journeyProgress: number;
    upcomingConsultation?: UpcomingConsultation;
    flightNotification?: {
        message: string;
        destination: string;
    };
}

interface DashboardData {
    profile: PatientProfile;
    journey: MedicalJourney;
    documents: DocumentItem[];
    careTeam: CareTeamMember[];
}

export default function DashboardPage() {
    const { user } = useAuth();
    const [data, setData] = useState<DashboardData | null>(null);
    const [recoveryData, setRecoveryData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [activeNav, setActiveNav] = useState('overview');
    const [mounted, setMounted] = useState(false);

    //  Switch between patient-1 (pre-treatment) and patient-2 (recovery) for testing
    //  In real app, we use user.id from context, but for demo we might need logic
    const patientId = 'patient-2'; // Change to 'patient-1' to see pre-treatment dashboard

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        // Fetch dashboard data
        const fetchData = async () => {
            try {
                const dashRes = await fetch(`http://localhost:3000/dashboard/${patientId}`);
                const dashboardData = await dashRes.json();
                setData(dashboardData);

                // Check if patient is in recovery
                const recoveryStage = dashboardData.journey?.stages?.find(
                    (s: JourneyStage) => s.name === 'RECOVERY' && s.status === 'in_progress'
                );

                if (recoveryStage) {
                    // Fetch recovery-specific data
                    const [status, vitals, meds, trends, indicators] = await Promise.all([
                        fetch(`http://localhost:3000/recovery/${patientId}/status`).then(r => r.json()),
                        fetch(`http://localhost:3000/recovery/${patientId}/vitals`).then(r => r.json()),
                        fetch(`http://localhost:3000/recovery/${patientId}/medications`).then(r => r.json()),
                        fetch(`http://localhost:3000/recovery/${patientId}/trends`).then(r => r.json()),
                        fetch(`http://localhost:3000/recovery/${patientId}/emergency-indicators`).then(r => r.json()),
                    ]);

                    setRecoveryData({ status, vitals, medications: meds, trends, indicators });
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching dashboard:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [patientId]);

    const handleMedicationToggle = async (medicationId: string) => {
        try {
            await fetch(`http://localhost:3000/recovery/${patientId}/medications/${medicationId}`, {
                method: 'PATCH',
            });
            // Refresh medications
            const meds = await fetch(`http://localhost:3000/recovery/${patientId}/medications`).then(r => r.json());
            setRecoveryData({ ...recoveryData, medications: meds });
        } catch (error) {
            console.error('Error toggling medication:', error);
        }
    };

    const handleSymptomSubmit = async (symptomData: any) => {
        try {
            await fetch(`http://localhost:3000/recovery/${patientId}/symptoms`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...symptomData, date: new Date().toISOString().split('T')[0] }),
            });
            alert('Symptom log submitted successfully!');
        } catch (error) {
            console.error('Error submitting symptom:', error);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-gray-600">Loading dashboard...</div>
            </div>
        );
    }

    // Role-based Layouts
    if (user?.role === 'ADMIN' || user?.role === 'admin') {
        return <AdminDashboard />;
    }

    if (!data || !mounted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-gray-600">Loading...</div>
            </div>
        );
    }

    const navItems = [
        { id: 'overview', label: 'Overview', icon: LayoutGrid },
        { id: 'appointments', label: 'Appointments', icon: Calendar },
        { id: 'records', label: 'Medical Records', icon: FileText },
        { id: 'team', label: 'Care Team', icon: Users },
        { id: 'messages', label: 'Messages', icon: MessageSquare, badge: 3 },
    ];

    const isInRecovery = !!recoveryData;

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Left Sidebar Navigation */}
            <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
                {/* Logo */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">M</span>
                        </div>
                        <span className="text-xl font-bold text-gray-900">MediPath</span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveNav(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition ${activeNav === item.id
                                ? 'bg-teal-50 text-teal-700'
                                : 'text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="flex-1 text-left font-medium">{item.label}</span>
                            {item.badge && (
                                <span className="bg-teal-600 text-white text-xs px-2 py-0.5 rounded-full">
                                    {item.badge}
                                </span>
                            )}
                        </button>
                    ))}
                </nav>

                {/* Help Section */}
                <div className="p-4 border-t border-gray-200">
                    <div className="bg-teal-50 rounded-lg p-4">
                        <div className="flex items-start gap-2 mb-2">
                            <HelpCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-semibold text-teal-900 mb-1">NEED HELP?</h4>
                                <p className="text-xs text-teal-700 mb-3">
                                    Contact your personal care coordinator anytime.
                                </p>
                                <button className="w-full py-2 bg-white text-teal-700 text-sm font-medium rounded-md hover:bg-teal-100 transition">
                                    Support Center
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
                <div className="max-w-6xl mx-auto p-8">
                    {/* Header */}
                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                {isInRecovery ? `Good Morning, ${data.profile.name}` : `Welcome back, ${data.profile.name}`}
                            </h1>
                            <p className="text-gray-600">
                                {isInRecovery
                                    ? 'How are you feeling today? Keep up the great recovery!'
                                    : `Your health journey is ${data.profile.journeyProgress}% complete.`}
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition relative">
                                <Search className="w-5 h-5 text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition relative">
                                <Bell className="w-5 h-5 text-gray-600" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                                <User className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>
                    </div>

                    {/* CONDITIONAL RENDERING: Recovery vs Pre-Treatment */}
                    {isInRecovery ? (
                        <>
                            {/* Recovery Dashboard */}
                            <RecoveryTimeline
                                currentDay={recoveryData.status.currentDay}
                                totalDays={recoveryData.status.totalDays}
                                procedure={recoveryData.status.procedure}
                            />

                            <VitalSignsCards
                                painLevel={recoveryData.vitals.painLevel}
                                bodyTemperature={recoveryData.vitals.bodyTemperature}
                                targetTempMin={recoveryData.vitals.targetTempMin}
                                targetTempMax={recoveryData.vitals.targetTempMax}
                            />

                            <RecoveryTrendsChart dataPoints={recoveryData.trends.dataPoints} />

                            <div className="grid grid-cols-2 gap-6">
                                <MedicationChecklist
                                    medications={recoveryData.medications}
                                    onToggle={handleMedicationToggle}
                                />

                                <SymptomLoggingForm onSubmit={handleSymptomSubmit} />
                            </div>

                            <EmergencyIndicators indicators={recoveryData.indicators} />
                        </>
                    ) : (
                        <>
                            {/* Pre-Treatment Dashboard */}
                            {data.profile.upcomingConsultation && (
                                <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-6 mb-6 text-white">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold mb-3">
                                                UPCOMING NEXT
                                            </span>
                                            <h2 className="text-2xl font-bold mb-2">Virtual Consultation</h2>
                                            <p className="text-emerald-50 mb-4">
                                                {data.profile.upcomingConsultation.doctorName} is ready to discuss your upcoming procedure in{' '}
                                                {data.journey.destination}. Please prepare your latest MRI scans.
                                            </p>
                                            <div className="flex gap-3">
                                                <Link
                                                    href={data.profile.upcomingConsultation.meetingLink || '#'}
                                                    className="px-6 py-3 bg-white text-emerald-700 rounded-lg font-medium hover:bg-emerald-50 transition flex items-center gap-2"
                                                >
                                                    <Video className="w-4 h-4" />
                                                    Join Meeting
                                                </Link>
                                                <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-white/20 transition">
                                                    Reschedule
                                                </button>
                                            </div>
                                        </div>
                                        <div className="ml-6 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                            <div className="text-sm text-emerald-100 mb-1">SCHEDULED FOR</div>
                                            <div className="text-2xl font-bold mb-1">
                                                {format(new Date(data.profile.upcomingConsultation.scheduledFor), 'p')}
                                            </div>
                                            <div className="text-sm text-emerald-100 mb-4">
                                                {format(new Date(data.profile.upcomingConsultation.scheduledFor), 'EEEE, MMM d')}
                                            </div>
                                            <div className="flex items-center gap-2 pt-4 border-t border-white/20">
                                                <div className="w-10 h-10 bg-white/20 rounded-full" />
                                                <div>
                                                    <div className="font-semibold">{data.profile.upcomingConsultation.doctorName}</div>
                                                    <div className="text-sm text-emerald-100">
                                                        {data.profile.upcomingConsultation.doctorTitle}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Medical Journey Itinerary */}
                            <div className="bg-white rounded-xl p-6 mb-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">Medical Journey Itinerary</h3>
                                        <p className="text-gray-600 text-sm">
                                            Path to Treatment: {data.journey.procedure} • {data.journey.destination}
                                        </p>
                                    </div>
                                    <button className="text-teal-600 font-medium text-sm hover:text-teal-700 flex items-center gap-1">
                                        View Full Details
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Timeline */}
                                <div className="relative">
                                    <div className="flex justify-between">
                                        {data.journey.stages.map((stage, index) => {
                                            const isCompleted = stage.status === 'completed';
                                            const isInProgress = stage.status === 'in_progress';

                                            return (
                                                <div key={index} className="flex-1 relative">
                                                    <div className="flex flex-col items-center">
                                                        <div
                                                            className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${isCompleted
                                                                ? 'bg-teal-100 text-teal-600'
                                                                : isInProgress
                                                                    ? 'bg-teal-50 text-teal-600 border-2 border-teal-600'
                                                                    : 'bg-gray-100 text-gray-400'
                                                                }`}
                                                        >
                                                            {isCompleted ? (
                                                                <CheckCircle2 className="w-6 h-6" />
                                                            ) : isInProgress ? (
                                                                <Play className="w-6 h-6" />
                                                            ) : (
                                                                <Circle className="w-6 h-6" />
                                                            )}
                                                        </div>

                                                        <div className="text-center">
                                                            <div
                                                                className={`text-sm font-semibold mb-1 ${isCompleted || isInProgress ? 'text-gray-900' : 'text-gray-400'
                                                                    }`}
                                                            >
                                                                {stage.name}
                                                            </div>
                                                            <div className="text-xs text-gray-500">{stage.date || stage.description}</div>
                                                        </div>
                                                    </div>

                                                    {index < data.journey.stages.length - 1 && (
                                                        <div
                                                            className={`absolute top-6 left-1/2 w-full h-0.5 ${isCompleted ? 'bg-teal-400' : 'bg-gray-200'
                                                                }`}
                                                            style={{ transform: 'translateY(-50%)' }}
                                                        />
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Documents and Flight Status */}
                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div className="bg-white rounded-xl p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg font-bold text-gray-900">Quick Access Documents</h3>
                                        <button className="text-teal-600 font-medium text-sm hover:text-teal-700">View Folder</button>
                                    </div>
                                    <div className="space-y-3">
                                        {data.documents.slice(0, 3).map((doc) => (
                                            <div
                                                key={doc.id}
                                                className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer transition"
                                            >
                                                <div
                                                    className={`w-12 h-12 rounded flex items-center justify-center ${doc.type === 'pdf'
                                                        ? 'bg-red-50 text-red-600'
                                                        : doc.type === 'docx'
                                                            ? 'bg-blue-50 text-blue-600'
                                                            : 'bg-teal-50 text-teal-600'
                                                        }`}
                                                >
                                                    <FileText className="w-6 h-6" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="font-medium text-gray-900 truncate">{doc.name}</div>
                                                    <div className="text-sm text-gray-500">{doc.size}</div>
                                                </div>
                                                <button className="p-1 hover:bg-gray-100 rounded">
                                                    <ChevronRight className="w-5 h-5 text-gray-400" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {data.profile.flightNotification && (
                                    <div className="bg-white rounded-xl p-6 flex items-center gap-4">
                                        <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Plane className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900 mb-1">{data.profile.flightNotification.message}</h3>
                                            <p className="text-sm text-gray-600 mb-3">
                                                We will notify you once your concierge confirms the {data.profile.flightNotification.destination}{' '}
                                                travel package.
                                            </p>
                                            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition">
                                                Check Status
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Right Sidebar - Care Team */}
            <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
                <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Your Care Team</h3>
                    <div className="space-y-3 mb-6">
                        {data.careTeam.map((member) => (
                            <div key={member.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition">
                                <div className="relative">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full" />
                                    {member.online && (
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="font-medium text-gray-900 truncate">{member.name}</div>
                                    <div className="text-sm text-gray-600 truncate">{member.role}</div>
                                </div>
                                {member.online && <div className="w-2 h-2 bg-green-500 rounded-full" />}
                            </div>
                        ))}
                    </div>

                    <Link
                        href="/messenger"
                        className="w-full py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition flex items-center justify-center gap-2"
                    >
                        <MessageSquare className="w-4 h-4" />
                        Message Team
                    </Link>
                </div>
            </div>
        </div>
    );
}
