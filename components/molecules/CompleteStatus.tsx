'use client';
import type { CompleteStatusProps } from '@/types/checkout-modal.types';
import { Check } from 'lucide-react';

export default function CompleteStatus({ handleClose }: CompleteStatusProps) {
    return (
        <div className="text-center py-4 space-y-3">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                <Check size={28} className="text-green-700" />
            </div>
            <div>
                <p className="font-medium text-gray-800 text-base">
                    Order placed!
                </p>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Confirmed. Estimated delivery: 30-45 min.
                </p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                SMS confirmation sent to your phone.
            </div>
            <button
                onClick={() => {
                    handleClose();
                }}
                className="w-full bg-green-700 hover:bg-green-800 text-white rounded-xl py-3 text-sm font-medium transition-colors"
            >
                Done
            </button>
        </div>
    );
}
