"use client";

import Image from 'next/image';
import Link from 'next/link';
import {
    Star, MapPin, Share2, Heart, ShieldCheck,
    Award, Bed, Clock, Globe, Wifi, Car, Utensils,
    Calendar, Lock, MessageSquare, ChevronRight,
    Stethoscope, Languages, Armchair, Coffee, BriefcaseMedical,
    Plane, FileText, CheckCircle
} from 'lucide-react';

export default function HospitalDetails() {
    return (
        <div className="bg-gray-50 min-h-screen pb-24">
            {/* Header / Breadcrumbs */}
            <div className="bg-white border-b border-gray-100">
                <div className="container-custom py-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                        <Link href="/" className="hover:text-emerald-600">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/hospitals" className="hover:text-emerald-600">Hospitals</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-gray-900 font-medium">St. Emerald International Hospital</span>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-2">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-emerald-100">
                                    <ShieldCheck className="w-3 h-3" /> Verified Provider
                                </span>
                                <div className="flex items-center gap-1 text-xs font-bold text-orange-400">
                                    <Star className="w-3 h-3 fill-current" />
                                    <span className="text-gray-900">4.8</span>
                                    <span className="text-gray-400 font-normal">(1.2k reviews)</span>
                                </div>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">St. Emerald International Hospital</h1>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-gray-400" /> Sukhumvit, Bangkok, Thailand</span>
                                <span className="flex items-center gap-1"><Globe className="w-4 h-4 text-gray-400" /> English, Thai, Arabic, Mandarin</span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button className="p-2.5 rounded-full border border-gray-200 text-gray-400 hover:text-emerald-600 hover:border-emerald-200 transition-colors bg-white">
                                <Share2 className="w-5 h-5" />
                            </button>
                            <button className="p-2.5 rounded-full border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200 transition-colors bg-white">
                                <Heart className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-8">

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12">
                    <div className="relative h-full bg-gray-200">
                        <Image src="https://images.unsplash.com/photo-1587351021759-3e566b9af9ef?auto=format&fit=crop&q=80&w=1200" alt="Main" fill className="object-cover" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <div className="relative bg-gray-200">
                            <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" alt="Room" fill className="object-cover" />
                        </div>
                        <div className="relative bg-gray-200">
                            <Image src="https://images.unsplash.com/photo-1516549655169-df83a25a8396?auto=format&fit=crop&q=80&w=600" alt="Lobby" fill className="object-cover" />
                        </div>
                        <div className="relative bg-gray-200">
                            <Image src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=600" alt="Surgery" fill className="object-cover" />
                        </div>
                        <div className="relative bg-gray-200 group cursor-pointer">
                            <Image src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600" alt="Equipment" fill className="object-cover group-hover:opacity-90 transition-opacity" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                                <span className="text-white font-bold text-lg flex items-col items-center gap-1">
                                    <div className="grid grid-cols-2 gap-1 mb-1">
                                        <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                                        <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                                        <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                                        <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                                    </div>
                                    +24 Photos
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Main Content */}
                    <div className="flex-1">

                        {/* Stats Bar */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                            <div className="bg-white p-4 rounded-2xl border border-gray-100 text-center shadow-sm">
                                <Award className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                                <div className="text-lg font-bold text-gray-900">JCI</div>
                                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Certified</div>
                            </div>
                            <div className="bg-white p-4 rounded-2xl border border-gray-100 text-center shadow-sm">
                                <ShieldCheck className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                                <div className="text-lg font-bold text-gray-900">15+</div>
                                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Specialties</div>
                            </div>
                            <div className="bg-white p-4 rounded-2xl border border-gray-100 text-center shadow-sm">
                                <Bed className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                                <div className="text-lg font-bold text-gray-900">450</div>
                                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Patient Beds</div>
                            </div>
                            <div className="bg-white p-4 rounded-2xl border border-gray-100 text-center shadow-sm">
                                <Clock className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                                <div className="text-lg font-bold text-gray-900">25</div>
                                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Years Exp.</div>
                            </div>
                        </div>

                        {/* About Section */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Hospital</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                St. Emerald International Hospital is a premier medical destination in Southeast Asia, renowned for its commitment to clinical excellence and patient-centered care. Founded in 1998, we have evolved into a global hub for medical tourism, welcoming over 50,000 international patients annually.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Equipped with state-of-the-art robotic surgery systems and the latest diagnostic imaging technology, our multidisciplinary teams of board-certified specialists provide world-class treatment in Cardiology, Orthopedics, Oncology, and more.
                            </p>
                        </div>

                        <hr className="border-gray-100 mb-12" />

                        {/* Specialists Section */}
                        <div className="mb-12">
                            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                                <div>
                                    <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded inline-block mb-2 uppercase tracking-wide">Expertise & Experience</span>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">World-Class Specialists</h2>
                                    <p className="text-gray-500 text-sm max-w-xl">Meet the board-certified surgeons and medical experts dedicated to international patient care, bringing decades of global experience to your treatment.</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-md shadow-emerald-200">All Specialties</button>
                                    <button className="bg-white border border-gray-200 text-gray-600 text-xs font-bold px-4 py-2 rounded-full hover:border-emerald-500 hover:text-emerald-500 transition-colors">Orthopedics</button>
                                    <button className="bg-white border border-gray-200 text-gray-600 text-xs font-bold px-4 py-2 rounded-full hover:border-emerald-500 hover:text-emerald-500 transition-colors">Cosmetic</button>
                                    <button className="bg-white border border-gray-200 text-gray-600 text-xs font-bold px-4 py-2 rounded-full hover:border-emerald-500 hover:text-emerald-500 transition-colors">Cardiology</button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Doctor Card 1 */}
                                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                                    <div className="relative mb-4">
                                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 relative">
                                            <Image src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400" alt="Doctor" fill className="object-cover" />
                                        </div>
                                        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                                            <ShieldCheck className="w-3 h-3" /> ASPS MEMBER
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">Dr. Elena Rodriguez</h3>
                                    <p className="text-emerald-500 text-xs font-bold mb-4 uppercase">Chief of Plastic Surgery</p>

                                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-6">
                                        <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded"><Languages className="w-3 h-3" /> EN, ES, PT</span>
                                        <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded"><Clock className="w-3 h-3" /> 18+ Yrs Exp</span>
                                    </div>

                                    <button className="w-full bg-emerald-50 text-emerald-700 font-bold py-3 rounded-xl hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2 group text-sm">
                                        View Full Profile <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                                {/* Doctor Card 2 */}
                                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                                    <div className="relative mb-4">
                                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 relative">
                                            <Image src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400" alt="Doctor" fill className="object-cover" />
                                        </div>
                                        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                                            <Award className="w-3 h-3" /> BOARD CERTIFIED
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">Dr. Hans Mueller</h3>
                                    <p className="text-emerald-500 text-xs font-bold mb-4 uppercase">Orthopedic Specialist</p>

                                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-6">
                                        <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded"><Languages className="w-3 h-3" /> DE, EN, FR</span>
                                        <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded"><Clock className="w-3 h-3" /> 22+ Yrs Exp</span>
                                    </div>

                                    <button className="w-full bg-emerald-50 text-emerald-700 font-bold py-3 rounded-xl hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2 group text-sm">
                                        View Full Profile <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* CTA Banner */}
                        <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between shadow-lg shadow-emerald-200 text-center md:text-left gap-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Unsure which specialist is right for you?</h3>
                                <p className="text-emerald-50 font-medium">Get a free assessment from our international patient concierge team.</p>
                            </div>
                            <button className="bg-gray-900 text-white font-bold py-3 px-6 rounded-full hover:bg-black transition-colors shadow-lg whitespace-nowrap">
                                Request Free Consultation
                            </button>
                        </div>

                        {/* Amenities */}
                        <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Patient Care & Amenities</h2>
                            <p className="text-gray-600 mb-8 max-w-2xl">We go beyond medical treatment. Our facility is designed to provide a comfortable, stress-free recovery environment for international guests and their families.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                        <Bed className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-1">Luxury Recovery Suites</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed">Private premium rooms with smart controls and city views.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                        <Armchair className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-1">VIP Guest Lounge</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed">Quiet spaces for family members with refreshments.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                        <Languages className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-1">Translation Services</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed">Professional medical translators available in 15+ languages.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                        <Utensils className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-1">Gourmet Catering</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed">Nutritionist-approved menus with international cuisine options.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                        <Car className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-1">Chauffeur Service</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed">Complimentary airport pick-up and hospital transfers.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                        <BriefcaseMedical className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-1">On-site Pharmacy</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed">24/7 access to prescription medications and medical supplies.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                        <FileText className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-1">International Insurance</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed">Dedicated desk for direct billing with major global providers.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                        <Coffee className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-1">Multifaith Rooms</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed">Quiet, dedicated spaces for prayer and meditation for all faiths.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>
                            <div className="bg-gray-200 rounded-3xl h-64 w-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/100.5018,13.7563,12,0/800x400?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2xsIn0.ExAmPlE')] bg-cover bg-center opacity-50"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">St. Emerald International</p>
                                            <p className="text-xs text-gray-500">45 Sukhumvit Rd, Bangkok</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Badges */}
                        <div className="bg-gray-50 py-8 border-t border-gray-200/50 flex flex-wrap justify-center gap-6 md:gap-12 opacity-60">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-gray-400" />
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">JCI Accredited</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="w-5 h-5 text-gray-400" />
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">ISO 9001:2015</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-gray-400" />
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Global Healthcare Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-gray-400" />
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">5-Star Patient Rating</span>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-[380px] shrink-0 space-y-6">

                        {/* Booking Card */}
                        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-emerald-900/5 border border-gray-100 sticky top-24">
                            <div className="mb-6">
                                <p className="text-xs font-medium text-gray-500 mb-1">Pricing starts from</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-gray-900">$2,500</span>
                                    <span className="text-sm text-gray-400">/ procedure</span>
                                </div>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between items-center text-sm py-2 border-b border-gray-50">
                                    <span className="text-gray-500">Health Checkup</span>
                                    <span className="font-bold text-gray-900">$450 - $1,200</span>
                                </div>
                                <div className="flex justify-between items-center text-sm py-2 border-b border-gray-50">
                                    <span className="text-gray-500">Knee Replacement</span>
                                    <span className="font-bold text-gray-900">$8k - $12k</span>
                                </div>
                                <div className="flex justify-between items-center text-sm py-2 border-b border-gray-50">
                                    <span className="text-gray-500">IVF Treatment</span>
                                    <span className="font-bold text-gray-900">$6k - $9k</span>
                                </div>
                            </div>

                            <div className="bg-emerald-50 rounded-xl p-4 mb-6 flex items-start gap-3">
                                <Calendar className="w-5 h-5 text-emerald-600 mt-0.5" />
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Next Available Slot</p>
                                    <p className="text-xs text-emerald-600 font-medium">Tomorrow, Oct 24 at 10:00 AM</p>
                                </div>
                            </div>

                            <button className="w-full bg-emerald-500 text-white font-bold py-3.5 rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-200 mb-3">
                                Book Consultation
                            </button>
                            <button className="w-full bg-white text-emerald-600 font-bold py-3.5 rounded-xl border border-emerald-500 hover:bg-emerald-50 transition-colors">
                                Request Price Quote
                            </button>

                            <div className="flex items-center justify-center gap-2 mt-4 text-[10px] text-gray-400">
                                <Lock className="w-3 h-3" /> Secure 128-bit Encrypted Booking
                            </div>
                        </div>

                        {/* Assistance Card */}
                        <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 opacity-20 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>

                            <div className="relative z-10">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-4">
                                    <MessageSquare className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">Need Assistance?</h3>
                                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                                    Our medical advisors are available 24/7 to help you choose the right treatment path.
                                </p>
                                <button className="text-sm font-bold underline hover:text-emerald-400 transition-colors">
                                    Chat with an Advisor
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
