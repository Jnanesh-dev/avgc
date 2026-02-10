import { Check, X, Building2 } from 'lucide-react';

export default function ComparisonTable() {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Clinic Side-by-Side Comparison</h2>
                    <p className="text-gray-600 text-lg">Compare top-rated clinics globally to find the perfect balance between cost, expertise, and convenience.</p>
                </div>

                <div className="overflow-x-auto pb-4">
                    <div className="min-w-[800px] bg-gray-50/30 rounded-3xl p-8 border border-gray-100">

                        {/* Header Row */}
                        <div className="grid grid-cols-4 gap-8 mb-8 border-b border-gray-100 pb-8">
                            <div className="col-span-1 pt-4">
                                <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-1">Features</p>
                            </div>

                            <div className="col-span-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                                        <Building2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Heidelberg Medical</h4>
                                        <p className="text-xs text-gray-500">Berlin, Germany</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1 relative">
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Top Value</div>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                                        <Building2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Istanbul Elite Care</h4>
                                        <p className="text-xs text-gray-500">Istanbul, Turkey</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
                                        <Building2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Mayo International</h4>
                                        <p className="text-xs text-gray-500">Rochester, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 1: Cost */}
                        <div className="grid grid-cols-4 gap-8 mb-8 items-center">
                            <div className="col-span-1">
                                <p className="text-sm font-bold text-gray-700">Procedure Cost (Est.)</p>
                            </div>
                            <div className="col-span-1">
                                <p className="text-xl font-bold text-gray-900">$12,400</p>
                            </div>
                            <div className="col-span-1">
                                <p className="text-xl font-bold text-emerald-500">$4,800</p>
                            </div>
                            <div className="col-span-1">
                                <p className="text-xl font-bold text-gray-900">$24,500</p>
                            </div>
                        </div>

                        {/* Row 2: Success Rate */}
                        <div className="grid grid-cols-4 gap-8 mb-8 items-center">
                            <div className="col-span-1">
                                <p className="text-sm font-bold text-gray-700">Success Rate (%)</p>
                            </div>
                            <div className="col-span-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-bold text-gray-900">98.2%</span>
                                </div>
                                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 w-[98.2%]"></div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-bold text-gray-900">96.5%</span>
                                </div>
                                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 w-[96.5%]"></div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-bold text-gray-900">99.1%</span>
                                </div>
                                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 w-[99.1%]"></div>
                                </div>
                            </div>
                        </div>

                        {/* Row 3: Recovery Time */}
                        <div className="grid grid-cols-4 gap-8 mb-8 items-center">
                            <div className="col-span-1">
                                <p className="text-sm font-bold text-gray-700">Recovery Time</p>
                            </div>
                            <div className="col-span-1">
                                <p className="text-sm text-gray-500 flex items-center gap-2"><div className="w-2 h-2 rounded-full border border-emerald-500"></div> 2-3 Weeks</p>
                            </div>
                            <div className="col-span-1">
                                <p className="text-sm text-gray-500 flex items-center gap-2"><div className="w-2 h-2 rounded-full border border-emerald-500"></div> 3-4 Weeks</p>
                            </div>
                            <div className="col-span-1">
                                <p className="text-sm text-gray-500 flex items-center gap-2"><div className="w-2 h-2 rounded-full border border-emerald-500"></div> 2-3 Weeks</p>
                            </div>
                        </div>

                        {/* Row 4: Accreditation */}
                        <div className="grid grid-cols-4 gap-8 mb-12 items-center">
                            <div className="col-span-1">
                                <p className="text-sm font-bold text-gray-700">Accreditation</p>
                            </div>
                            <div className="col-span-1">
                                <span className="bg-gray-100 text-[10px] font-bold px-2 py-1 rounded text-gray-600">JCI ACCREDITED</span>
                            </div>
                            <div className="col-span-1 flex gap-2">
                                <span className="bg-gray-100 text-[10px] font-bold px-2 py-1 rounded text-gray-600">ISO 9001</span>
                                <span className="bg-gray-100 text-[10px] font-bold px-2 py-1 rounded text-gray-600">TEMOS</span>
                            </div>
                            <div className="col-span-1">
                                <span className="bg-gray-100 text-[10px] font-bold px-2 py-1 rounded text-gray-600">JCI + GOLD SEAL</span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="grid grid-cols-4 gap-8">
                            <div className="col-span-1"></div>
                            <div className="col-span-1">
                                <button className="w-full bg-emerald-50 text-emerald-700 font-bold py-3 rounded-xl hover:bg-emerald-100 transition-colors text-sm">
                                    Book Consultation
                                </button>
                            </div>
                            <div className="col-span-1">
                                <button className="w-full bg-emerald-500 text-white font-bold py-3 rounded-xl hover:bg-emerald-600 transition-colors text-sm shadow-lg shadow-emerald-200">
                                    Select Clinic
                                </button>
                            </div>
                            <div className="col-span-1">
                                <button className="w-full bg-emerald-50 text-emerald-700 font-bold py-3 rounded-xl hover:bg-emerald-100 transition-colors text-sm">
                                    Book Consultation
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
