import { useState } from 'react';

interface SymptomLoggingFormProps {
    onSubmit?: (data: SymptomData) => void;
}

interface SymptomData {
    swelling: 'none' | 'mild' | 'moderate' | 'high';
    painLevel: number;
    redness: 'none' | 'mild' | 'moderate' | 'high';
    fatigue: 'none' | 'mild' | 'moderate' | 'high';
}

export default function SymptomLoggingForm({ onSubmit }: SymptomLoggingFormProps) {
    const [formData, setFormData] = useState<SymptomData>({
        swelling: 'none',
        painLevel: 3,
        redness: 'none',
        fatigue: 'moderate',
    });

    const handleSubmit = () => {
        onSubmit?.(formData);
    };

    const severityOptions: Array<'none' | 'mild' | 'moderate' | 'high'> = ['none', 'mild', 'moderate', 'high'];

    const getSeverityButtonClass = (current: string, option: string) => {
        const baseClass = 'px-4 py-2 rounded-lg text-sm font-medium transition';
        if (current === option) {
            if (option === 'high') return `${baseClass} bg-red-600 text-white`;
            if (option === 'moderate') return `${baseClass} bg-orange-500 text-white`;
            if (option === 'mild') return `${baseClass} bg-yellow-500 text-white`;
            return `${baseClass} bg-gray-200 text-gray-700`;
        }
        return `${baseClass} bg-gray-50 text-gray-600 hover:bg-gray-100`;
    };

    return (
        <div className="bg-white rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Symptom Logging</h3>

            <div className="space-y-6">
                {/* Swelling */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Swelling
                        <span className="text-gray-500 ml-2">Typical for first 7-10 days</span>
                    </label>
                    <div className="flex gap-2">
                        {severityOptions.map((option) => (
                            <button
                                key={option}
                                onClick={() => setFormData({ ...formData, swelling: option })}
                                className={getSeverityButtonClass(formData.swelling, option)}
                            >
                                {option.charAt(0).toUpperCase() + option.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pain Level */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pain Level
                        <span className="text-gray-500 ml-2">Rate from 1 to 10</span>
                    </label>
                    <input
                        type="range"
                        min="1"
                        max="10"
                        value={formData.painLevel}
                        onChange={(e) => setFormData({ ...formData, painLevel: Number(e.target.value) })}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>1</span>
                        <span className="text-lg font-bold text-teal-600">{formData.painLevel}</span>
                        <span>10</span>
                    </div>
                </div>

                {/* Redness */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Redness
                        <span className="text-gray-500 ml-2">Near the incision site</span>
                    </label>
                    <div className="flex gap-2">
                        {severityOptions.map((option) => (
                            <button
                                key={option}
                                onClick={() => setFormData({ ...formData, redness: option })}
                                className={getSeverityButtonClass(formData.redness, option)}
                            >
                                {option.charAt(0).toUpperCase() + option.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Fatigue */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fatigue
                        <span className="text-gray-500 ml-2">Energy levels today</span>
                    </label>
                    <div className="flex gap-2">
                        {severityOptions.map((option) => (
                            <button
                                key={option}
                                onClick={() => setFormData({ ...formData, fatigue: option })}
                                className={getSeverityButtonClass(formData.fatigue, option)}
                            >
                                {option.charAt(0).toUpperCase() + option.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-6 flex gap-3">
                <button className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
                    Discard
                </button>
                <button
                    onClick={handleSubmit}
                    className="flex-1 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition"
                >
                    Submit Daily Log
                </button>
            </div>
        </div>
    );
}
