import { Activity, Thermometer, Camera } from 'lucide-react';

interface VitalSignsCardsProps {
    painLevel: number;
    bodyTemperature: number;
    targetTempMin: number;
    targetTempMax: number;
    onPainChange?: (value: number) => void;
}

export default function VitalSignsCards({
    painLevel,
    bodyTemperature,
    targetTempMin,
    targetTempMax,
    onPainChange,
}: VitalSignsCardsProps) {
    return (
        <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Pain Level */}
            <div className="bg-white rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                        <Activity className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Pain Level</h3>
                </div>
                <div className="mb-2 text-sm text-gray-600">Typical for first 7-10 days</div>
                <div className="mb-4">
                    <div className="text-4xl font-bold text-gray-900">{painLevel}</div>
                    <div className="text-sm text-gray-500">of 10</div>
                </div>
                <div className="relative">
                    <input
                        type="range"
                        min="1"
                        max="10"
                        value={painLevel}
                        onChange={(e) => onPainChange?.(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>Mild (1)</span>
                        <span>Intense (10)</span>
                    </div>
                </div>
            </div>

            {/* Body Temperature */}
            <div className="bg-white rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Thermometer className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Body Temperature</h3>
                </div>
                <div className="text-center py-4">
                    <div className="text-5xl font-bold text-gray-900 mb-2">{bodyTemperature}</div>
                    <div className="text-sm text-gray-600">
                        Target: {targetTempMin}°F - {targetTempMax}°F
                    </div>
                </div>
            </div>

            {/* Incision Site */}
            <div className="bg-white rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                        <Camera className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Incision Site</h3>
                </div>
                <div className="border-2 border-dashed border-gray-200 rounded-lg h-32 flex flex-col items-center justify-center text-center p-4">
                    <Camera className="w-8 h-8 text-gray-400 mb-2" />
                    <div className="text-sm text-gray-600 mb-1">Upload daily photo</div>
                    <div className="text-xs text-gray-400">Required for infection screening</div>
                </div>
            </div>
        </div>
    );
}
