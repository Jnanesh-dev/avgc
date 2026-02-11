
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 max-w-lg w-full">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl font-bold text-emerald-600">404</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={() => window.history.back()}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Go Back
                    </button>
                    <Link
                        href="/"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-200"
                    >
                        <Home className="w-4 h-4" /> Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
