import { ArrowRight, CheckCircle, MessageSquare } from 'lucide-react';

export default function FinalCTA() {
    return (
        <section className="py-20">
            <div className="container-custom">
                <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-[2.5rem] p-12 md:p-24 overflow-hidden text-center shadow-2xl shadow-emerald-200">

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Your Global Health Journey Starts Here
                        </h2>
                        <p className="text-emerald-50 text-lg mb-12 leading-relaxed max-w-2xl mx-auto opacity-90">
                            Don't navigate the world of medical tourism alone. Speak with our dedicated care experts today and get a personalized treatment plan for free.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <button className="bg-white text-emerald-700 font-bold py-4 px-8 rounded-full hover:bg-emerald-50 transition-all shadow-lg flex items-center justify-center gap-2 group">
                                <MessageSquare className="w-5 h-5" /> Talk to a Care Expert
                            </button>
                            <button className="bg-emerald-800/30 border border-emerald-400/50 text-white font-bold py-4 px-8 rounded-full hover:bg-emerald-800/50 transition-all flex items-center justify-center gap-2">
                                Browse Clinics <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 text-white/90 text-xs font-bold uppercase tracking-wider">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-white" /> Free Initial Consultation
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-white" /> No Hidden Fees
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-white" /> End-to-End Support
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
