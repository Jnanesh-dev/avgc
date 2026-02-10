import { ShieldCheck, CheckCircle, UserCheck, FileText } from 'lucide-react';
import Image from 'next/image';

export default function Features() {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Side: Content */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">How We Ensure Your Safety</h2>
                        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                            We don't just list clinics; we vet them. Our rigorous 5-step verification process is designed to ensure that every facility meets international standards for medical excellence.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                                    <FileText className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Legal & License Check</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">Verification of active medical licenses and local government certifications.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Quality Accreditation</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">Ensuring JCI, ISO, or equivalent international quality benchmarks.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                                    <UserCheck className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Doctor Credentialing</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">Background checks on surgical experience and board certifications.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Advisory Board Card */}
                    <div className="lg:w-1/2 w-full">
                        <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-100">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="font-bold text-gray-900">Medical Advisory Board</h3>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Scientific Oversight</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-xl flex items-center gap-3 shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center text-white text-xs font-bold">SV</div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Dr. Sarah Vance</p>
                                        <p className="text-[10px] text-gray-500 uppercase font-bold">Chief Medical Officer</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-xl flex items-center gap-3 shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center text-white text-xs font-bold">MT</div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Dr. Marcus Thorne</p>
                                        <p className="text-[10px] text-gray-500 uppercase font-bold">Surgical Audit Head</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-xl flex items-center gap-3 shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs font-bold">AG</div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Dr. Anika Gupta</p>
                                        <p className="text-[10px] text-gray-500 uppercase font-bold">Patient Safety Expert</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-xl flex items-center gap-3 shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center text-white text-xs font-bold">LO</div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Dr. Liam O'Neill</p>
                                        <p className="text-[10px] text-gray-500 uppercase font-bold">Policy Director</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center gap-2 mt-8">
                                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
