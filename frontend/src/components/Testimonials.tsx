import { Star, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials() {
    const testimonials = [
        {
            name: "David Miller",
            location: "Mexico • Dental Care",
            text: "The dental implant procedure in Mexico surpassed all my expectations. The clinic was more modern than my local dentist, and I saved nearly 60% on the total cost.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
            verified: true
        },
        {
            name: "Elena Rodriguez",
            location: "Spain • Orthopedics",
            text: "From the initial consultation to the recovery in Madrid, everything was seamless. The orthopedic surgeons were absolute experts and the facility was top-notch.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
            verified: true
        },
        {
            name: "James Chen",
            location: "Thailand • Cardiology",
            text: "Finding a reliable cardiac clinic abroad felt daunting until I found this platform. They walked me through every step and verified every credential for me.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
            verified: true
        }
    ];

    return (
        <section className="py-24 bg-gray-50/50">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-emerald-500 font-bold text-xs uppercase tracking-wider mb-2 block">Real Experiences</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Voices of Our Global Patients</h2>
                    <p className="text-gray-600 text-lg">Discover how thousands of patients have accessed world-class healthcare while saving on costs and enjoying professional care.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} className="w-4 h-4 text-emerald-500 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-600 italic leading-relaxed mb-8 flex-grow">
                                "{item.text}"
                            </p>

                            <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                                        <p className="text-[10px] text-gray-500 font-medium">{item.location}</p>
                                    </div>
                                </div>
                                {item.verified && (
                                    <div className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                                        <CheckCircle className="w-3 h-3" /> VERIFIED
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
