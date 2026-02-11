
"use client";

import { useEffect } from "react";
import { RotateCcw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 max-w-lg w-full">
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">⚠️</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong!</h2>
                <p className="text-gray-500 mb-8 text-sm">
                    {error.message || "An unexpected error occurred. Please try again."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={reset}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-200"
                    >
                        <RotateCcw className="w-4 h-4" /> Try Again
                    </button>
                    <Link
                        href="/"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-colors"
                    >
                        <Home className="w-4 h-4" /> Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
