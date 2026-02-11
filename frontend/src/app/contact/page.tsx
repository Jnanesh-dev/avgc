
"use client";

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, verify captcha and send data to backend
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-20 pb-20">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <div>
                        <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-2 block">Get in Touch</span>
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">We're Here to Help</h1>
                        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                            Whether you have questions about a specific procedure, need help with travel arrangements, or just want to learn more about our process, our team is ready to assist you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                                    <p className="text-gray-500 mb-1">Mon-Fri from 8am to 6pm EST</p>
                                    <a href="tel:+15551234567" className="text-lg font-semibold text-emerald-600 hover:text-emerald-700">
                                        +1 (555) 123-4567
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                                    <p className="text-gray-500 mb-1">Our team typically responds within 2 hours</p>
                                    <a href="mailto:support@astraveda.com" className="text-lg font-semibold text-emerald-600 hover:text-emerald-700">
                                        support@astraveda.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Global Headquarters</h3>
                                    <p className="text-gray-600 leading-relaxed max-w-xs">
                                        100 Medical Plaza, Suite 400<br />
                                        New York, NY 10001, USA
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <Send className="w-10 h-10 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                <p className="text-gray-600 max-w-xs mx-auto">
                                    Thank you for reaching out. One of our care care coordinators will be in touch with you shortly.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 text-emerald-600 font-bold hover:text-emerald-700"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Topic</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50">
                                        <option>General Inquiry</option>
                                        <option>Treatment & Procedures</option>
                                        <option>Partnership Opportunities</option>
                                        <option>Support</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50 resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all"
                                >
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
