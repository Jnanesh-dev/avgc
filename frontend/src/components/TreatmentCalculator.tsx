"use client";
import { useState } from 'react';
import { ArrowRight, CheckCircle, ShieldCheck, Clock, UserCheck } from 'lucide-react';

export default function TreatmentCalculator() {
    const [treatment, setTreatment] = useState('Dental Implants (Full Mouth)');
    const [destination, setDestination] = useState('Thailand (Bangkok)');
    const [tier, setTier] = useState('Premium (High Specialized)');

    // Mock data matching the screenshot/logic
    const costs: Record<string, Record<string, number>> = {
        'Dental Implants (Full Mouth)': { 'USA': 45000, 'Thailand (Bangkok)': 12500, 'Turkey (Istanbul)': 10000, 'Mexico (Tijuana)': 11000 },
        'Knee Replacement': { 'USA': 35000, 'Thailand (Bangkok)': 10000, 'Turkey (Istanbul)': 7500, 'Mexico (Tijuana)': 9000 },
        'Heart Bypass': { 'USA': 120000, 'Thailand (Bangkok)': 18000, 'Turkey (Istanbul)': 15000, 'Mexico (Tijuana)': 22000 },
    };

    const selectedCost = costs[treatment as keyof typeof costs]?.[destination] || 12500;
    const usCost = costs[treatment as keyof typeof costs]?.['USA'] || 45000;
    const savings = usCost - selectedCost;
    const savingsPercent = Math.round((savings / usCost) * 100);

    // Circular Progress CSS
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (savingsPercent / 100) * circumference;

    return (
        <section className="py-24 bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        Calculate Your <span className="text-emerald-500">Healthcare Savings</span>
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Compare medical procedure costs across the world's top accredited hospitals and discover high-quality affordable care options.
                    </p>
                </div>

                {/* Calculator Card */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 max-w-5xl mx-auto">

                    {/* Filter Bar */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 border-b border-gray-100 bg-gray-50/30">
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Select Treatment</label>
                            <select
                                className="w-full p-3 rounded-xl border border-gray-200 bg-white font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                value={treatment}
                                onChange={(e) => setTreatment(e.target.value)}
                            >
                                <option>Dental Implants (Full Mouth)</option>
                                <option>Knee Replacement</option>
                                <option>Heart Bypass</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Target Destination</label>
                            <select
                                className="w-full p-3 rounded-xl border border-gray-200 bg-white font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                            >
                                <option>Thailand (Bangkok)</option>
                                <option>Turkey (Istanbul)</option>
                                <option>Mexico (Tijuana)</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Hospital Tier</label>
                            <select
                                className="w-full p-3 rounded-xl border border-gray-200 bg-white font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                value={tier}
                                onChange={(e) => setTier(e.target.value)}
                            >
                                <option>Premium (High Specialized)</option>
                                <option>Standard (JCI Accredited)</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left Column: Cost Breakdown */}
                        <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-xl text-gray-900">Cost Breakdown</h3>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">USD Estimates</span>
                            </div>

                            {/* Progress Bars */}
                            <div className="space-y-6 mb-10">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-600 font-medium">Typical Cost in USA/UK</span>
                                        <span className="font-bold text-gray-900">${usCost.toLocaleString()}</span>
                                    </div>
                                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-slate-400 w-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-emerald-600 font-bold">Your Cost in {destination.split(' ')[0]}</span>
                                        <span className="font-bold text-emerald-600">${selectedCost.toLocaleString()}</span>
                                    </div>
                                    <div className="h-4 bg-emerald-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-500" style={{ width: `${100 - savingsPercent}%` }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Package Inclusions */}
                            <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100">
                                <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-4">Package Inclusions</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-2">
                                        <div className="mt-0.5 bg-emerald-500 rounded-full p-0.5"><CheckCircle className="w-3 h-3 text-white" /></div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">Surgical Procedure</p>
                                            <p className="text-xs text-gray-500">Full specialist team & facilities</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="mt-0.5 bg-emerald-500 rounded-full p-0.5"><CheckCircle className="w-3 h-3 text-white" /></div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">4-Star Accommodation</p>
                                            <p className="text-xs text-gray-500">7 nights recovery stay</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="mt-0.5 bg-emerald-500 rounded-full p-0.5"><CheckCircle className="w-3 h-3 text-white" /></div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">Airport Transfers</p>
                                            <p className="text-xs text-gray-500">Private chauffeur service</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="mt-0.5 bg-emerald-500 rounded-full p-0.5"><CheckCircle className="w-3 h-3 text-white" /></div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">Aftercare Kit</p>
                                            <p className="text-xs text-gray-500">Medications & support materials</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Savings & CTA */}
                        <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center bg-white relative">
                            {/* Circular Progress */}
                            <div className="relative w-40 h-40 mb-6">
                                <svg className="transform -rotate-90 w-full h-full">
                                    <circle
                                        cx="80" cy="80" r="50"
                                        stroke="currentColor" strokeWidth="8"
                                        fill="transparent" className="text-gray-100"
                                    />
                                    <circle
                                        cx="80" cy="80" r="50"
                                        stroke="currentColor" strokeWidth="8"
                                        fill="transparent"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={strokeDashoffset}
                                        className="text-emerald-500 transition-all duration-1000 ease-out"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-4xl font-bold text-gray-900">{savingsPercent}%</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Saved</span>
                                </div>
                            </div>

                            <p className="text-lg font-bold text-gray-900 mb-1">Total Savings</p>
                            <p className="text-5xl font-bold text-emerald-500 mb-4">${savings.toLocaleString()}</p>
                            <p className="text-gray-500 text-sm max-w-xs mx-auto mb-8">
                                Save more than enough to cover a full vacation and recovery for two.
                            </p>

                            <button className="bg-emerald-500 text-white font-bold py-4 px-8 rounded-full w-full max-w-xs hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2">
                                Get My Personalized Plan <ArrowRight className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-4 mt-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-emerald-500" /> JCI Accredited</span>
                                <span>•</span>
                                <span className="flex items-center gap-1"><span className="text-orange-400">★</span> 4.9/5 Trusted</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Footer */}
                <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm">Safe & Secure</h4>
                            <p className="text-xs text-gray-500 mt-1">HIPAA compliant data protection for all users.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm">24/7 Concierge</h4>
                            <p className="text-xs text-gray-500 mt-1">Dedicated support throughout your journey.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                            <UserCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm">Verified Providers</h4>
                            <p className="text-xs text-gray-500 mt-1">Only hospitals with verified success rates.</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Banner */}
                <div className="max-w-5xl mx-auto mt-12 relative rounded-3xl overflow-hidden h-64 md:h-80 group">
                    <img
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000"
                        alt="Recovery Center"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent flex flex-col justify-center p-8 md:p-12">
                        <div className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded w-fit mb-4 uppercase tracking-wider">Case Study: Bangkok</div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-lg">World-Class Recovery Centers</h3>
                        <p className="text-gray-300 text-sm max-w-md mb-6 leading-relaxed">
                            Learn how patients from the USA saved over $40,000 on complex dental procedures while enjoying a 5-star recovery in Thailand.
                        </p>
                        <button className="text-emerald-400 font-bold text-sm flex items-center gap-2 hover:text-white transition-colors">
                            Read Success Stories <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
