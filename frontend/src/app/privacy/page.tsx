
"use client";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white py-20">
            <div className="container-custom max-w-4xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                <div className="prose prose-lg prose-emerald text-gray-600">
                    <p className="mb-4">Last Updated: February 2026</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
                    <p className="mb-4">
                        Astraveda Global Care ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our medical travel facilitation services.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
                    <p className="mb-4">
                        We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device.
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Personal Identifiers:</strong> Name, email address, phone number, passport details.</li>
                        <li><strong>Medical Information:</strong> Medical history, diagnosis, treatment plans, imaging files (MRI, X-Rays).</li>
                        <li><strong>Payment Information:</strong> Credit card details, billing address (processed via secure third-party gateways).</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. HIPAA & GDPR Compliance</h2>
                    <p className="mb-4">
                        We adhere to the Health Insurance Portability and Accountability Act (HIPAA) standards for US patients and the General Data Protection Regulation (GDPR) for European patients. All medical data is encrypted at rest and in transit.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. How We Use Your Information</h2>
                    <p className="mb-4">
                        We use your personal and medical information solely to:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Connect you with suitable hospitals and doctors.</li>
                        <li>Facilitate medical consultations and treatment bookings.</li>
                        <li>Coordinate travel logistics (visas, flights, accommodation).</li>
                        <li>Provide customer support and post-operative care coordination.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
                    <p className="mb-4">
                        If you have questions or comments about this policy, you may email us at <a href="mailto:privacy@astraveda.com" className="text-emerald-600 hover:underline">privacy@astraveda.com</a>.
                    </p>

                    <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100 text-sm md:text-base">
                        <p className="font-semibold text-gray-900 mb-2">Note for Demo Purposes:</p>
                        <p>This application is a demonstration prototype. No real medical data is processed, and no real appointments are booked. All data shown is dummy data.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
