import { CheckCircle2, Circle } from 'lucide-react';

interface MedicationItem {
    id: string;
    name: string;
    dosage: string;
    time: string;
    completed: boolean;
    withFood?: boolean;
    frequency?: string;
    timing?: string;
}

interface MedicationChecklistProps {
    medications: MedicationItem[];
    onToggle?: (medicationId: string) => void;
}

export default function MedicationChecklist({ medications, onToggle }: MedicationChecklistProps) {
    const remaining = medications.filter((m) => !m.completed).length;

    return (
        <div className="bg-white rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Daily Medication</h3>
                <span className="px-3 py-1 bg-teal-50 text-teal-700 text-sm font-semibold rounded-full">
                    {remaining} Remaining
                </span>
            </div>

            <div className="space-y-3">
                {medications.map((med) => (
                    <div
                        key={med.id}
                        className={`flex items-center gap-4 p-4 rounded-lg border transition cursor-pointer ${med.completed
                                ? 'bg-gray-50 border-gray-200'
                                : 'bg-white border-gray-200 hover:border-teal-300'
                            }`}
                        onClick={() => onToggle?.(med.id)}
                    >
                        <div
                            className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 ${med.completed ? 'bg-teal-600' : 'bg-gray-200'
                                }`}
                        >
                            {med.completed ? (
                                <CheckCircle2 className="w-4 h-4 text-white" />
                            ) : (
                                <Circle className="w-4 h-4 text-gray-400" />
                            )}
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className={`font-medium ${med.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                                {med.name} {med.dosage}
                            </div>
                            <div className="text-sm text-gray-500">
                                {med.withFood && 'With food • '}
                                {med.frequency || med.timing}
                            </div>
                        </div>

                        <div className="text-sm font-medium text-gray-600">{med.time}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
