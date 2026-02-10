"use client";

import Image from 'next/image';
import {
    User, Calendar, Phone, FileText, Upload,
    CreditCard, CheckCircle, Shield, AlertCircle,
    ChevronRight, Lock
} from 'lucide-react';
import { useState } from 'react';

export default function ConsultationPage() {
    const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="container-custom max-w-5xl">

                {/* Header & Stepper */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Virtual Consultation Setup</h1>
                    <p className="text-gray-500 mb-8">Please provide accurate medical information to ensure the specialist can offer the best clinical advice.</p>

                    <div className="flex items-center justify-between max-w-2xl text-sm font-medium text-gray-500 mb-12">
                        <div className="flex items-center gap-2 text-emerald-600">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold border border-emerald-200">1</div>
                            <span>Provider Selection</span>
                        </div>
                        <div className="h-0.5 flex-1 bg-emerald-100 mx-4"></div>
                        <div className="flex items-center gap-2 text-emerald-600">
                            <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-200">2</div>
                            <span className="text-gray-900 font-bold">Consultation Details</span>
                        </div>
                        <div className="h-0.5 flex-1 bg-gray-200 mx-4"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold border border-gray-200">3</div>
                            <span>Confirmation</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Main Form Area */}
                    <div className="flex-1 space-y-6">

                        {/* Patient Information */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <User className="w-5 h-5 text-emerald-500" /> Patient Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Full Name</label>
                                    <input type="text" placeholder="Johnathan Doe" className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Date of Birth</label>
                                    <div className="relative">
                                        <Calendar className="absolute right-3 top-3 text-gray-400 w-5 h-5 pointer-events-none" />
                                        <input type="text" placeholder="mm/dd/yyyy" className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Gender</label>
                                    <select className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white">
                                        <option>Select gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Contact Number</label>
                                    <input type="text" placeholder="+1 (555) 000-0000" className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
                                </div>
                            </div>
                        </div>

                        {/* Symptoms */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-emerald-500" /> Medical Concern & Symptoms
                            </h2>
                            <p className="text-sm text-gray-500 mb-6">Briefly describe your current symptoms or diagnosis</p>
                            <textarea
                                rows={4}
                                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-none"
                                placeholder="Describe symptoms, duration, and any previous treatments..."
                            ></textarea>
                        </div>

                        {/* File Upload */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                    <Upload className="w-5 h-5 text-emerald-500" /> Secure File Upload
                                </h2>
                                <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-1 rounded">Max 50MB per file</span>
                            </div>

                            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center bg-gray-50 hover:bg-emerald-50 hover:border-emerald-200 transition-colors cursor-pointer group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                    <Upload className="w-6 h-6 text-emerald-500" />
                                </div>
                                <p className="text-sm font-bold text-gray-900 mb-1">Drag and drop medical reports, MRIs, or X-rays</p>
                                <p className="text-xs text-gray-500 mb-4">Accepted formats: PDF, JPEG, DICOM, PNG</p>
                                <button className="bg-emerald-100 text-emerald-700 text-xs font-bold px-4 py-2 rounded-full hover:bg-emerald-200 transition-colors">
                                    Browse Files
                                </button>
                            </div>

                            {/* Uploaded File Item */}
                            <div className="mt-4 bg-gray-50 rounded-xl p-3 flex items-center justify-between border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                                        <FileText className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-900">blood_test_results_may.pdf</p>
                                        <p className="text-[10px] text-gray-400">2.4 MB • Complete</p>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-red-500 p-1">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex items-center justify-center gap-6 mt-6">
                                <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wide">
                                    <Shield className="w-3 h-3 text-emerald-500" /> HIPAA Compliant
                                </div>
                                <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wide">
                                    <Lock className="w-3 h-3 text-emerald-500" /> SSL Encrypted
                                </div>
                                <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wide">
                                    <Shield className="w-3 h-3 text-emerald-500" /> GDPR Ready
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar / Summary */}
                    <div className="w-full lg:w-96 shrink-0 space-y-6">

                        {/* Doctor Summary */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-100">
                                    <Image src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200" alt="Doctor" fill className="object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Dr. Marcus Thorne</h3>
                                    <p className="text-xs text-emerald-600 font-bold uppercase">Orthopedic Specialist</p>
                                </div>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Date & Time</span>
                                    <span className="font-bold text-gray-900 text-right">Oct 24, 2023 • 14:30 GMT</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Service</span>
                                    <span className="font-bold text-gray-900 text-right">Video Consultation</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-4 space-y-2 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Consultation Fee</span>
                                    <span className="font-bold text-gray-900">$120.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Service Fee</span>
                                    <span className="font-bold text-gray-900">$15.00</span>
                                </div>
                                <div className="flex justify-between text-base pt-2 border-t border-gray-50 mt-2">
                                    <span className="font-bold text-gray-900">Total amount</span>
                                    <span className="font-bold text-emerald-600">$135.00</span>
                                </div>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4">Payment Method</h3>

                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <button
                                    className={`flex items-center justify-center gap-2 p-3 rounded-xl border font-bold text-sm transition-all ${paymentMethod === 'card' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                                    onClick={() => setPaymentMethod('card')}
                                >
                                    <CreditCard className="w-4 h-4" /> Card
                                </button>
                                <button
                                    className={`flex items-center justify-center gap-2 p-3 rounded-xl border font-bold text-sm transition-all ${paymentMethod === 'paypal' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                                    onClick={() => setPaymentMethod('paypal')}
                                >
                                    PayPal
                                </button>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Cardholder Name</label>
                                    <input type="text" placeholder="Johnathan Doe" className="w-full p-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Card Number</label>
                                    <div className="relative">
                                        <input type="text" placeholder="**** **** **** 4421" className="w-full p-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm" />
                                        <div className="absolute right-3 top-2.5 flex gap-1">
                                            <div className="w-8 h-5 bg-gray-200 rounded"></div>
                                            <div className="w-8 h-5 bg-gray-200 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Expiry Date</label>
                                        <input type="text" placeholder="MM/YY" className="w-full p-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">CVV</label>
                                        <input type="text" placeholder="***" className="w-full p-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm" />
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-emerald-500 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 mb-4">
                                Confirm & Pay $135.00 <ChevronRight className="w-4 h-4" />
                            </button>

                            <p className="text-[10px] text-center text-gray-400 leading-relaxed max-w-xs mx-auto">
                                By clicking confirm, you agree to our Terms of Service and Cancellation Policy.
                            </p>
                        </div>

                        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-emerald-900 text-xs mb-1">100% Satisfaction Guarantee</h4>
                                <p className="text-[10px] text-emerald-700/80 leading-relaxed">If the specialist is unable to attend or you face technical issues, a full refund is guaranteed.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
