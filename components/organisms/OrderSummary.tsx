'use client';
import { deliveryCost } from '@/constants/checkout-modal.contants';
import useCartStore from '@/store/useCartStore';
import type { OrderSummaryProps } from '@/types/checkout-modal.types';

export default function OrderSummary({
    placeOrder,
    loading,
    setStep,
}: OrderSummaryProps) {
    const { items } = useCartStore();
    const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
    const total = subtotal + deliveryCost;
    return (
        <div className="space-y-3">
            <p className="text-sm font-medium text-gray-700 pb-2 border-b">
                Order summary
            </p>
            {items.map((item) => (
                <div
                    key={item.id}
                    className="flex justify-between items-center py-1.5 border-b border-gray-50 last:border-0"
                >
                    <div>
                        <p className="text-sm text-gray-800">{item.name}</p>
                        <p className="text-xs text-gray-400">
                            x{item.quantity}
                        </p>
                    </div>
                    <span className="text-sm text-gray-800 font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                    </span>
                </div>
            ))}
            <div className="space-y-1 pt-1">
                <div className="flex justify-between text-sm text-gray-500">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                    <span>Delivery</span>
                    <span>${deliveryCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-gray-800 pt-2 border-t">
                    <span>Total</span>
                    <span className="text-green-700">${total.toFixed(2)}</span>
                </div>
            </div>
            <button
                onClick={placeOrder}
                disabled={loading}
                className={`w-full ${loading && 'hover:cursor-progress!'} bg-green-700 hover:bg-green-800 disabled:bg-green-200 disabled:text-green-700 text-white rounded-xl py-3 text-sm font-medium transition-colors`}
            >
                {loading
                    ? 'Processing...'
                    : `Place order — $${total.toFixed(2)}`}
            </button>
            <button
                onClick={() => setStep(2)}
                className="w-full border border-gray-200 text-gray-500 hover:bg-gray-50 rounded-xl py-2.5 text-sm transition-colors"
            >
                Back
            </button>
        </div>
    );
}
