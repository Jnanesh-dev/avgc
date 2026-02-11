import Link from 'next/link';
import { ArrowRight, Bone, Heart, Baby, Activity, Brain, User } from 'lucide-react';

export default function PopularTreatments() {
    const treatments = [
        {
            id: "orthopedics",
            name: "Knee Replacement",
            description: "Full and partial joint restoration using minimally invasive techniques and robotic assistance.",
            price: 4500,
            usPrice: 35000,
            icon: <Bone className="w-8 h-8 text-emerald-600" />,
            bg: "bg-emerald-50"
        },
        {
            id: "cardiology",
            name: "Heart Surgery",
            description: "Bypass surgery, valve replacement, and angioplasty performed by internationally certified cardiologists.",
            price: 12000,
            usPrice: 100000,
            icon: <Heart className="w-8 h-8 text-rose-500" />,
            bg: "bg-rose-50"
        },
        {
            id: "fertility",
            name: "IVF & Fertility",
            description: "Advanced reproductive technologies including PGD/PGS testing with high success rates and privacy.",
            price: 3200,
            usPrice: 15000,
            icon: <Baby className="w-8 h-8 text-blue-500" />,
            bg: "bg-blue-50"
        },
        {
            id: "hair-transplant",
            name: "Hair Transplant",
            description: "FUE and DHI adoption for natural looking results with lifetime warranty certificates.",
            price: 1800,
            usPrice: 12000,
            icon: <User className="w-8 h-8 text-amber-600" />,
            bg: "bg-amber-50"
        },
        {
            id: "dental",
            name: "Dental Implants",
            description: "Titanium and Zirconia implants with immediate loading options and 3D smile design.",
            price: 850,
            usPrice: 4000,
            icon: <Activity className="w-8 h-8 text-cyan-600" />,
            bg: "bg-cyan-50"
        },
        {
            id: "neurosurgery",
            name: "Neurosurgery",
            description: "Complex spinal and brain surgeries led by top neurosurgeons in state-of-the-art facilities.",
            price: 9000,
            usPrice: 55000,
            icon: <Brain className="w-8 h-8 text-purple-600" />,
            bg: "bg-purple-50"
        }

    ];

    return (
        <section className="py-24 bg-gray-50/50">
            <div className="container-custom">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Popular Treatments</h2>
                        <p className="text-gray-600 text-lg">Specialized procedures with the highest satisfaction rates.</p>
                    </div>
                    <Link href="/treatments" className="text-emerald-600 font-bold flex items-center gap-2 hover:text-emerald-700 transition-colors">
                        Explore All <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {treatments.map((treatment, i) => (
                        <Link href={`/search?treatment=${treatment.id}`} key={i} className="block group">
                            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100/50 h-full">
                                <div className={`w-16 h-16 rounded-2xl ${treatment.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {treatment.icon}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">{treatment.name}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8 h-12 line-clamp-2">
                                    {treatment.description}
                                </p>

                                <div className="flex items-end justify-between border-t border-gray-50 pt-6">
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Starting From</p>
                                        <p className="text-3xl font-bold text-emerald-600">${treatment.price.toLocaleString()}</p>
                                    </div>
                                    <div className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-lg group-hover:bg-emerald-100 transition-colors">
                                        US Price: ${treatment.usPrice >= 10000 ? (treatment.usPrice / 1000) + "k+" : treatment.usPrice.toLocaleString() + "+"}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
