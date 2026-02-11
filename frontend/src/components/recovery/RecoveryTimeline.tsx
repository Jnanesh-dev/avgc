import { CheckCircle2, Circle, Play } from 'lucide-react';

interface RecoveryTimelineProps {
    currentDay: number;
    totalDays: number;
    procedure: string;
}

export default function RecoveryTimeline({ currentDay, totalDays, procedure }: RecoveryTimelineProps) {
    const progress = (currentDay / totalDays) * 100;

    const phases = [
        { name: 'SURGERY', completed: true },
        { name: 'MOBILITY PHASE', active: true },
        { name: 'FULL DISCHARGE', upcoming: true },
    ];

    return (
        <div className="bg-white rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <div className="text-sm text-gray-500 mb-1">ACL Reconstruction • Post-Op Phase</div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Day <span className="text-teal-600">{currentDay}</span> of {totalDays}
                    </h2>
                </div>
                <div className="text-right">
                    <div className="text-3xl font-bold text-teal-600">{Math.round(progress)}%</div>
                    <div className="text-sm text-gray-500">Complete</div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Phases */}
            <div className="flex justify-between">
                {phases.map((phase, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${phase.completed
                                    ? 'bg-teal-100 text-teal-600'
                                    : phase.active
                                        ? 'bg-teal-50 text-teal-600 border-2 border-teal-600'
                                        : 'bg-gray-100 text-gray-400'
                                }`}
                        >
                            {phase.completed ? (
                                <CheckCircle2 className="w-5 h-5" />
                            ) : phase.active ? (
                                <Play className="w-5 h-5" />
                            ) : (
                                <Circle className="w-5 h-5" />
                            )}
                        </div>
                        <div
                            className={`text-xs font-semibold ${phase.completed || phase.active ? 'text-gray-900' : 'text-gray-400'
                                }`}
                        >
                            {phase.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
