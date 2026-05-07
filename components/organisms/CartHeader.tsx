'use client';
import useCartStore from '@/store/useCartStore';
import { ShoppingCart, X } from 'lucide-react';

export default function CartHeader() {
    const { items, toggleCart } = useCartStore();

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
                <ShoppingCart size={20} className="text-green-600" />
                <h2 className="font-medium text-lg text-gray-600">
                    Cart
                    {totalItems > 0 && (
                        <span className="ml-2 text-sm text-green-600">
                            ({totalItems} items)
                        </span>
                    )}
                </h2>
            </div>
            <button
                onClick={toggleCart}
                aria-label="Close cart"
                className="group hover:cursor-pointer hover:bg-green-600 text-white p-2 rounded-full"
            >
                <X size={20} className="text-gray-600 group-hover:text-white" />
            </button>
        </div>
    );
}
