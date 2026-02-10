export default function HelpCTA() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container-custom">
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">

                    {/* Decorative background blur */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Unsure where to start?</h2>
                        <p className="text-gray-600 text-lg">Our medical advisors can help you find the best treatment and destination based on your medical history and budget.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
                        <button className="bg-white text-gray-900 border border-gray-200 py-3 px-8 rounded-full font-bold shadow-sm hover:shadow-md hover:border-emerald-200 transition-all">
                            Talk to Advisor
                        </button>
                        <button className="bg-emerald-500 text-white py-3 px-8 rounded-full font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-600 hover:shadow-xl transition-all">
                            Calculate Savings
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
