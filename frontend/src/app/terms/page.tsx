
"use client";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white py-20">
            <div className="container-custom max-w-4xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
                <div className="prose prose-lg prose-emerald text-gray-600">
                    <p className="mb-4">Last Updated: February 2026</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p className="mb-4">
                        By accessing or using the Astraveda Global Care website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Role of Astraveda</h2>
                    <p className="mb-4">
                        Astraveda acts solely as a facilitator/intermediary between patients and medical providers. We do <strong>not</strong> provide medical advice, diagnosis, or treatment. The relationship between Astraveda and the patient does not constitute a doctor-patient relationship.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Medical Disclaimers</h2>
                    <p className="mb-4">
                        All medical decisions, including the choice of procedure and doctor, are solely the responsibility of the patient. We strongly recommend consulting with your local primary care physician before making any decisions regarding medical tourism.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Payments & Refunds</h2>
                    <p className="mb-4">
                        Deposits paid to secure appointments are generally non-refundable unless the cancellation is due to a medical emergency verified by a doctor. Refund policies for the actual medical procedures are governed by the individual hospital's policies, not Astraveda.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
                    <p className="mb-4">
                        Astraveda shall not be liable for any medical malpractice, negligence, or complications arising from treatments received at partner hospitals. Any legal recourse must be taken directly against the medical provider in their respective jurisdiction.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Governing Law</h2>
                    <p className="mb-4">
                        These Terms shall be governed and construed in accordance with the laws of Delaware, United States, without regard to its conflict of law provisions.
                    </p>

                    <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100 text-sm md:text-base">
                        <p className="font-semibold text-gray-900 mb-2">Note for Demo Purposes:</p>
                        <p>This is a fictional service for demonstration purposes only.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
