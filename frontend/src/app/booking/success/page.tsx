
"use client";

import Link from 'next/link';
import { CheckCircle, Calendar, MessageSquare, ArrowRight, Home } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function BookingSuccessContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-2xl w-full text-center">
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                    <CheckCircle className="w-12 h-12 text-emerald-600" />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
                <p className="text-gray-600 text-lg mb-8">
                    Your consultation request has been successfully submitted. We've sent a confirmation email with all the details.
                </p>

                {id && (
                    <div className="bg-gray-50 rounded-xl p-4 mb-8 inline-block">
                        <p className="text-sm text-gray-500 uppercase tracking-wide font-bold mb-1">Confirmation ID</p>
                        <p className="text-xl font-mono font-bold text-gray-900">{id}</p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="p-4 border border-gray-100 rounded-xl text-left hover:border-emerald-200 transition-colors">
                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                            <Calendar className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1">Add to Calendar</h3>
                        <p className="text-sm text-gray-500">Don't miss your appointment.</p>
                    </div>
                    <div className="p-4 border border-gray-100 rounded-xl text-left hover:border-emerald-200 transition-colors">
                        <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center mb-3">
                            <MessageSquare className="w-5 h-5 text-purple-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1">Prepare Questions</h3>
                        <p className="text-sm text-gray-500">Get ready for your consultation.</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Link
                        href="/dashboard"
                        className="flex-1 bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-200"
                    >
                        Go to Dashboard
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                        href="/"
                        className="flex-1 bg-white border-2 border-gray-100 text-gray-700 font-bold py-4 rounded-xl hover:bg-gray-50 hover:border-gray-200 transition-all flex items-center justify-center gap-2"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function BookingSuccessPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BookingSuccessContent />
        </Suspense>
    );
}
