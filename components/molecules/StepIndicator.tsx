import { stepLabels } from '@/constants/checkout-modal.contants';
import { StepIndicatorProps } from '@/types/checkout-modal.types';
import { Check } from 'lucide-react';

export default function StepIndicator({ step }: StepIndicatorProps) {
    return (
        <div className="flex items-center px-5 pt-4 pb-1">
            {stepLabels.map((label, index) => {
                const n = index + 1;
                return (
                    <div
                        key={label}
                        className="flex items-center gap-1.5 flex-1"
                    >
                        <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium shrink-0
                                                ${n < step ? 'bg-green-200 text-green-800' : n === step ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-400'}`}
                        >
                            {n < step ? <Check size={11} /> : n}
                        </div>
                        <span
                            className={`text-xs ${n === step ? 'text-green-700 font-medium' : 'text-gray-400'}`}
                        >
                            {label}
                        </span>
                        {index < stepLabels.length - 1 && (
                            <div className="flex-1 h-px bg-gray-200 mx-1" />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
