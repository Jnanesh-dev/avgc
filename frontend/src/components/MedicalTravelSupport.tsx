import { Plane, Hotel, MessageSquareText, FileText, UserCheck, ArrowRight } from 'lucide-react';

export default function MedicalTravelSupport() {
    const services = [
        {
            icon: <FileText className="w-8 h-8 text-emerald-600" />,
            title: "Visa Assistance",
            description: "Expert guidance for medical visa applications and documentation.",
            bg: "bg-emerald-50"
        },
        {
            icon: <Plane className="w-8 h-8 text-emerald-600" />,
            title: "Airport Transfer",
            description: "Private, comfortable transport from arrival to your accommodation.",
            bg: "bg-emerald-50"
        },
        {
            icon: <MessageSquareText className="w-8 h-8 text-emerald-600" />,
            title: "Translation",
            description: "Certified medical translators to assist you during consultations.",
            bg: "bg-emerald-50"
        },
        {
            icon: <Hotel className="w-8 h-8 text-emerald-600" />,
            title: "Recovery Stay",
            description: "Vetted 4 and 5-star hotels specialized in post-op recovery.",
            bg: "bg-emerald-50"
        },
        {
            icon: <UserCheck className="w-8 h-8 text-emerald-600" />,
            title: "24/7 Concierge",
            description: "Dedicated personal manager available around the clock.",
            bg: "bg-emerald-50"
        }
    ];

    return (
        <section className="py-24 bg-white border-b border-gray-100">
            <div className="container-custom">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Travel Support Services</h2>
                        <p className="text-gray-500">Essential logistics to make your medical journey stress-free.</p>
                    </div>
                    <button className="text-emerald-500 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        Learn about our logistics process <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {services.map((service, i) => (
                        <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group">
                            <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 text-lg">{service.title}</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
