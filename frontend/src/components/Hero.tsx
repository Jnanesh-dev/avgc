"use client";

import { Search, MapPin, Building2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
    const router = useRouter();
    const [treatment, setTreatment] = useState('');
    const [destination, setDestination] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/search?treatment=${treatment}&destination=${destination}`);
    };

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-100/30 rounded-bl-[100px] -z-10 translate-x-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100/40 rounded-tr-full -z-10 translate-y-20 blur-2xl"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6 border border-emerald-100">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-sm font-medium text-emerald-800">Trusted by 50,000+ patients worldwide</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Compare Hospitals, Treatments & Costs <br />
                            <span className="text-primary italic">Worldwide</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Trusted medical care with transparent pricing & end-to-end support. Access world-class treatments at a fraction of the cost.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 text-sm font-medium text-gray-500">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                Verified Hospitals
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                15+ Countries
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                End-to-End Support
                            </div>
                        </div>
                    </div>

                    {/* Search Box / Interactive Element */}
                    <div className="flex-1 w-full max-w-lg">
                        <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-emerald-50">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Find Your Treatment</h3>

                            <form className="space-y-4" onSubmit={handleSearch}>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Treatment</label>
                                    <div className="relative">
                                        <Search className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            placeholder="e.g. Knee Replacement, IVF"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                            value={treatment}
                                            onChange={(e) => setTreatment(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                                            <input
                                                type="text"
                                                placeholder="Anywhere"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                                value={destination}
                                                onChange={(e) => setDestination(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Hospital</label>
                                        <div className="relative">
                                            <Building2 className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                                            <input
                                                type="text"
                                                placeholder="Optional"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover hover:shadow-xl transition-all duration-300 mt-2">
                                    Compare & Get Quote
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
