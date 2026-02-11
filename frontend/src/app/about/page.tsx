
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Shield, Users, Globe, Heart, CheckCircle } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000"
                        alt="Medical Team"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container-custom relative z-10 text-white text-center py-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Democratizing Global Healthcare</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We are building a world where geography doesn't dictate the quality of your healthcare. Access world-class treatments, safely and affordably.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Mission</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Connecting Patients to World-Class Care</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Astraveda Global Care was founded with a simple yet powerful belief: everyone deserves access to the best medical care, regardless of where they live.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                rising healthcare costs and long wait times have made essential treatments inaccessible for many. We bridge this gap by connecting patients with accredited international hospitals that offer superior care at a fraction of the cost.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="border border-gray-100 p-6 rounded-2xl bg-gray-50">
                                    <h3 className="text-3xl font-bold text-emerald-600 mb-1">50k+</h3>
                                    <p className="text-sm font-medium text-gray-600">Patients Helped</p>
                                </div>
                                <div className="border border-gray-100 p-6 rounded-2xl bg-gray-50">
                                    <h3 className="text-3xl font-bold text-emerald-600 mb-1">15+</h3>
                                    <p className="text-sm font-medium text-gray-600">Countries</p>
                                </div>
                                <div className="border border-gray-100 p-6 rounded-2xl bg-gray-50">
                                    <h3 className="text-3xl font-bold text-emerald-600 mb-1">500+</h3>
                                    <p className="text-sm font-medium text-gray-600">Partner Hospitals</p>
                                </div>
                                <div className="border border-gray-100 p-6 rounded-2xl bg-gray-50">
                                    <h3 className="text-3xl font-bold text-emerald-600 mb-1">98%</h3>
                                    <p className="text-sm font-medium text-gray-600">Satisfaction Rate</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1000"
                                    alt="Doctor Patient Interaction"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="bg-emerald-100 p-2 rounded-full">
                                        <Shield className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <h4 className="font-bold text-gray-900">JCI Accredited</h4>
                                </div>
                                <p className="text-sm text-gray-500">
                                    We exclusively partner with Joint Commission International (JCI) accredited facilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Core Values</h2>
                        <p className="text-gray-600 text-lg">
                            Our commitment to transparency, safety, and patient-centric care drives everything we do.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                                <Shield className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Safety First</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We never compromise on safety. Our vetting process is rigorous, and we continuously monitor the quality metrics of our partner hospitals.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                                <Globe className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Transparency</h3>
                            <p className="text-gray-600 leading-relaxed">
                                No hidden fees, no surprises. We provide comprehensive quotes that include treatment, travel, and accommodation costs upfront.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mb-6">
                                <Heart className="w-6 h-6 text-rose-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Patient-Centric</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We are not just a booking platform. We are your dedicated care partners, supporting you from the first consultation to full recovery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to start your journey?</h2>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                        Speak with our medical care coordinators today for a free, no-obligation consultation about your treatment options.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact" className="bg-emerald-600 text-white font-bold py-3 px-8 rounded-full hover:bg-emerald-700 transition-colors">
                            Contact Us
                        </Link>
                        <Link href="/treatments" className="bg-white text-gray-900 border border-gray-200 font-bold py-3 px-8 rounded-full hover:bg-gray-50 transition-colors">
                            View Treatments
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
