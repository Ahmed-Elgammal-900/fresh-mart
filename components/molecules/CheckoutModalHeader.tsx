'use client';
import type { CheckoutModalHeaderProps } from '@/types/checkout-modal.types';
import { ShoppingCart, X } from 'lucide-react';

export default function CheckoutModalHeader({
    handleClose,
}: CheckoutModalHeaderProps) {
    return (
        <div className="flex items-center justify-between p-5 border-b">
            <div className="flex items-center gap-2">
                <ShoppingCart size={17} className="text-green-700" />
                <span className="font-medium text-gray-800">Checkout</span>
            </div>
            <button onClick={handleClose} aria-label="Close checkout">
                <X size={17} className="text-gray-400 hover:text-gray-600" />
            </button>
        </div>
    );
}
