"use client";

import Image from 'next/image';
import Link from 'next/link';
import {
    Clock, DollarSign, CheckCircle, AlertCircle,
    ChevronRight, MapPin, Star, ShieldCheck,
    Calendar, Activity, HelpCircle, ArrowRight
} from 'lucide-react';

export default function TreatmentDetails() {
    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">

            {/* Hero Section */}
            <div className="bg-white border-b border-gray-100 pb-12">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                                <Link href="/" className="hover:text-emerald-600">Home</Link>
                                <ChevronRight className="w-3 h-3" />
                                <Link href="/treatments" className="hover:text-emerald-600">Treatments</Link>
                                <ChevronRight className="w-3 h-3" />
                                <span className="text-gray-900 font-medium">Total Knee Replacement</span>
                            </div>

                            <span className="bg-emerald-50 text-emerald-600 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                                Orthopedics
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Total Knee Replacement</h1>
                            <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
                                Restore your mobility with minimally invasive knee replacement surgery. Top-rated surgeons in Thailand and Turkey offer world-class care at 70% less cost.
                            </p>

                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium uppercase">Procedure Time</p>
                                        <p className="font-bold text-gray-900">1 - 2 Hours</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                                        <Activity className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium uppercase">Hospital Stay</p>
                                        <p className="font-bold text-gray-900">3 - 5 Days</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium uppercase">Recovery</p>
                                        <p className="font-bold text-gray-900">4 - 6 Weeks</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cost Card */}
                        <div className="w-full md:w-80 bg-white p-6 rounded-3xl shadow-xl shadow-emerald-900/5 border border-gray-100">
                            <p className="text-sm text-gray-500 mb-1 font-medium">Average Cost in US</p>
                            <p className="text-lg font-bold text-gray-400 line-through mb-4">$45,000</p>

                            <div className="bg-emerald-50 rounded-2xl p-4 mb-6 border border-emerald-100">
                                <p className="text-sm text-emerald-800 mb-1 font-bold">Our Partner Price</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-emerald-600">$7,500</span>
                                    <span className="text-xs text-emerald-600 font-medium">starts from</span>
                                </div>
                                <div className="mt-2 inline-flex items-center gap-1 bg-white px-2 py-1 rounded text-[10px] font-bold text-emerald-600 shadow-sm">
                                    <CheckCircle className="w-3 h-3" /> Save 83%
                                </div>
                            </div>

                            <button className="w-full bg-emerald-500 text-white font-bold py-3.5 rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-200 mb-3">
                                Get Free Quote
                            </button>
                            <p className="text-xs text-center text-gray-400">Includes surgery, hospital stay & transfers</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Main Content */}
                    <div className="flex-1">

                        {/* Overview */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Total Knee Replacement (TKR), or total knee arthroplasty, is a surgical procedure to replace the weight-bearing surfaces of the knee joint to relieve pain and disability. It is most commonly performed for osteoarthritis, and also for other knee diseases such as rheumatoid arthritis and psoriatic arthritis.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our partner hospitals use advanced minimally invasive techniques and computer-navigated surgery to ensure precision, reduce pain, and speed up your recovery time.
                            </p>
                        </div>

                        {/* Cost Comparison Table */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Comparison</h2>
                            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 border-b border-gray-100">
                                        <tr>
                                            <th className="p-4 pl-6 text-sm font-bold text-gray-900">Country</th>
                                            <th className="p-4 text-sm font-bold text-gray-900">Average Cost</th>
                                            <th className="p-4 text-sm font-bold text-gray-900">Savings</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        <tr className="bg-emerald-50/50">
                                            <td className="p-4 pl-6 font-medium text-emerald-900 flex items-center gap-2">
                                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Thailand
                                            </td>
                                            <td className="p-4 font-bold text-gray-900">$7,500</td>
                                            <td className="p-4 text-emerald-600 font-bold">83%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 pl-6 font-medium text-gray-900">Turkey</td>
                                            <td className="p-4 text-gray-600">$6,000</td>
                                            <td className="p-4 text-emerald-600 font-bold">87%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 pl-6 font-medium text-gray-900">Mexico</td>
                                            <td className="p-4 text-gray-600">$8,500</td>
                                            <td className="p-4 text-emerald-600 font-bold">81%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 pl-6 font-medium text-gray-400">United States</td>
                                            <td className="p-4 text-gray-400">$45,000</td>
                                            <td className="p-4 text-gray-300">-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Recovery Timeline */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Recovery Timeline</h2>
                            <div className="relative border-l-2 border-emerald-100 ml-3 space-y-8 pl-8 pb-4">
                                <div className="relative">
                                    <div className="absolute -left-[41px] bg-emerald-100 w-6 h-6 rounded-full border-4 border-white flex items-center justify-center">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Day 1-3: Hospital Stay</h3>
                                    <p className="text-sm text-gray-600">Initial recovery in the hospital. Physical therapy begins within 24 hours to encourage blood flow.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[41px] bg-emerald-100 w-6 h-6 rounded-full border-4 border-white flex items-center justify-center">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Week 1-2: Initial Healing</h3>
                                    <p className="text-sm text-gray-600">Discharged to hotel. Focus on walking with assistance and range-of-motion exercises.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[41px] bg-emerald-100 w-6 h-6 rounded-full border-4 border-white flex items-center justify-center">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Week 3-6: Returning to Normal</h3>
                                    <p className="text-sm text-gray-600">Walking without aid. Return to light daily activities. Safe to fly back home.</p>
                                </div>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                                    <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-3">
                                        <HelpCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        Is it safe to travel after surgery?
                                    </h3>
                                    <p className="text-sm text-gray-600 pl-8">
                                        Doctors typically recommend waiting 10-14 days before flying long-haul. We provide comprehensive "Fit to Fly" certification and coordinate specialized assistance at the airport.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                                    <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-3">
                                        <HelpCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        What implant brands are used?
                                    </h3>
                                    <p className="text-sm text-gray-600 pl-8">
                                        Our partner hospitals use only FDA-approved implants from top global manufacturers like Zimmer Biomet, Stryker, and Johnson & Johnson.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-96 shrink-0 space-y-8">

                        {/* Top Hospitals Widget */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm sticky top-24">
                            <h3 className="font-bold text-gray-900 mb-6">Top Hospitals for Knee Replacement</h3>

                            <div className="space-y-4 mb-6">
                                {/* Hospital 1 */}
                                <Link href="/hospitals/1" className="flex gap-4 group">
                                    <div className="w-16 h-16 rounded-xl bg-gray-100 relative overflow-hidden shrink-0">
                                        <Image src="https://images.unsplash.com/photo-1587351021759-3e566b9af9ef?auto=format&fit=crop&q=80&w=200" alt="Hosp" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-emerald-600 transition-colors">St. Emerald International</h4>
                                        <p className="text-xs text-gray-500 mb-1">Bangkok, Thailand</p>
                                        <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-1.5 py-0.5 rounded">JCI Accredited</span>
                                    </div>
                                </Link>

                                {/* Hospital 2 */}
                                <Link href="/hospitals/2" className="flex gap-4 group">
                                    <div className="w-16 h-16 rounded-xl bg-gray-100 relative overflow-hidden shrink-0">
                                        <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=200" alt="Hosp" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-emerald-600 transition-colors">Bangkok Orthopedic Center</h4>
                                        <p className="text-xs text-gray-500 mb-1">Bangkok, Thailand</p>
                                        <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded">ISO Certified</span>
                                    </div>
                                </Link>

                                {/* Hospital 3 */}
                                <Link href="/hospitals/3" className="flex gap-4 group">
                                    <div className="w-16 h-16 rounded-xl bg-gray-100 relative overflow-hidden shrink-0">
                                        <Image src="https://images.unsplash.com/photo-1538108149393-fbbd8189718c?auto=format&fit=crop&q=80&w=200" alt="Hosp" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-emerald-600 transition-colors">Anadolu Medical Center</h4>
                                        <p className="text-xs text-gray-500 mb-1">Istanbul, Turkey</p>
                                        <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-1.5 py-0.5 rounded">JCI Accredited</span>
                                    </div>
                                </Link>
                            </div>

                            <button className="w-full border border-gray-200 text-gray-600 font-bold py-3 rounded-xl hover:border-emerald-500 hover:text-emerald-600 transition-colors text-sm">
                                View All Hospitals
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
