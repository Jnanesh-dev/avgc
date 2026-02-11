import { AlertTriangle, Phone } from 'lucide-react';

interface EmergencyIndicator {
    id: string;
    condition: string;
    detected: boolean;
}

interface EmergencyIndicatorsProps {
    indicators: EmergencyIndicator[];
}

export default function EmergencyIndicators({ indicators }: EmergencyIndicatorsProps) {
    return (
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-red-900 mb-1">Emergency Indicators</h3>
                    <p className="text-sm text-red-700">
                        If you experience any of the following, seek immediate medical attention or contact our care team.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
                {indicators.map((indicator) => (
                    <div
                        key={indicator.id}
                        className="flex items-center gap-2 p-3 bg-white rounded-lg border border-red-200"
                    >
                        <div className="w-6 h-6 rounded-full border-2 border-red-400 flex items-center justify-center flex-shrink-0">
                            {indicator.detected && <div className="w-3 h-3 bg-red-600 rounded-full" />}
                        </div>
                        <div className="text-sm text-gray-900">{indicator.condition}</div>
                    </div>
                ))}
            </div>

            <button className="w-full py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Immediate Care Line: +1 (800) 555-CARE
            </button>
        </div>
    );
}
