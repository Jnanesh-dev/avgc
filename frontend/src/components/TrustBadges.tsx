import { ShieldCheck, Award, Lock, CheckCircle } from 'lucide-react';

export default function TrustBadges() {
    return (
        <section className="py-12 bg-gray-50 border-t border-gray-100">
            <div className="container-custom">
                <div className="text-center">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">Recognized & Accredited By</p>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6 text-gray-600" />
                            <span className="font-bold text-gray-600 text-lg">JCI ACCREDITED</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Award className="w-6 h-6 text-gray-600" />
                            <span className="font-bold text-gray-600 text-lg">ISO 9001</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-6 h-6 text-gray-600" />
                            <span className="font-bold text-gray-600 text-lg">MTQUA GOLD</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Lock className="w-6 h-6 text-gray-600" />
                            <span className="font-bold text-gray-600 text-lg">HIPAA COMPLIANT</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
