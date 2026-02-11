
"use client";

import Link from 'next/link';
import { Search, FileText, Calendar, Plane, Activity, CheckCircle } from 'lucide-react';

export default function HowItWorksPage() {
    const steps = [
        {
            icon: <Search className="w-8 h-8 text-white" />,
            title: "1. Search & Compare",
            description: "Browse accredited hospitals and specialists for your specific procedure. Compare prices, reviews, and quality metrics transparently."
        },
        {
            icon: <FileText className="w-8 h-8 text-white" />,
            title: "2. Get a Free Quote",
            description: "Submit your medical records securely. Our team coordinates with the hospital to provide you with a comprehensive treatment plan and cost estimate."
        },
        {
            icon: <Calendar className="w-8 h-8 text-white" />,
            title: "3. Book Consultation",
            description: "Schedule a video consultation with your chosen doctor to discuss the procedure, risks, and expected outcomes before you travel."
        },
        {
            icon: <Plane className="w-8 h-8 text-white" />,
            title: "4. Travel & Treatment",
            description: "We handle logistics including flights, accommodation, and airport transfers. A dedicated care manager welcomes you upon arrival."
        },
        {
            icon: <Activity className="w-8 h-8 text-white" />,
            title: "5. Recovery & Aftercare",
            description: "Recover in comfort with 24/7 support. We ensure seamless coordination for your follow-up care once you return home."
        }
    ];

    return (
        <div className="bg-white">
            <section className="py-24 bg-gray-50">
                <div className="container-custom text-center max-w-4xl mx-auto">
                    <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-4 block">The Process</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                        Your Journey to Better Health, <br /> simplified.
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed mb-12">
                        We've streamlined medical travel into 5 simple steps, removing the complexity and uncertainty so you can focus on healing.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container-custom">
                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-emerald-100 -translate-x-1/2 z-0"></div>

                        <div className="space-y-24 relative z-10">
                            {steps.map((step, index) => (
                                <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                    <div className="flex-1 text-center lg:text-left">
                                        <div className={`hidden lg:flex items-center gap-4 mb-4 ${index % 2 === 1 ? 'justify-end' : ''}`}>
                                            <span className="text-emerald-500 font-bold text-6xl opacity-20">0{index + 1}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>

                                    <div className="relative flex-none">
                                        <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-200 rotate-3 hover:rotate-6 transition-transform">
                                            {step.icon}
                                        </div>
                                    </div>

                                    <div className="flex-1 hidden lg:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-emerald-900">
                <div className="container-custom text-center text-white">
                    <h2 className="text-3xl font-bold mb-8">Included in Every Journey</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                        <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700">
                            <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                            <h4 className="font-bold mb-2">Dedicated Care Manager</h4>
                            <p className="text-emerald-100 text-sm">A personal point of contact available 24/7 throughout your trip.</p>
                        </div>
                        <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700">
                            <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                            <h4 className="font-bold mb-2">Airport Tranfers</h4>
                            <p className="text-emerald-100 text-sm">VIP pickup and drop-off service for all your appointments.</p>
                        </div>
                        <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700">
                            <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                            <h4 className="font-bold mb-2">Post-Op Warranty</h4>
                            <p className="text-emerald-100 text-sm">Comprehensive coverage for revisions or complications.</p>
                        </div>
                    </div>
                    <Link href="/auth/register" className="bg-white text-emerald-900 font-bold py-4 px-10 rounded-full hover:bg-emerald-50 transition-colors shadow-lg">
                        Get Your Free Treatment Plan
                    </Link>
                </div>
            </section>
        </div>
    );
}
