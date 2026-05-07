'use client';
import useCartStore from '@/store/useCartStore';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import type { CartItem } from '@/types/store.types';

export default function CartItem({
    id,
    name,
    price,
    quantity,
    image,
}: CartItem) {
    const { removeItem, updateQty } = useCartStore();
    return (
        <div
            className="flex items-center gap-3 p-3 rounded-xl
                           border border-gray-100 bg-gray-50"
        >
            <div
                className="relative size-16 rounded-lg overflow-hidden
                                bg-white border border-gray-100 shrink-0"
            >
                <Image
                    sizes="64px"
                    src={image}
                    alt={name}
                    fill
                    className="object-contain"
                />
            </div>

            <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-800 text-sm truncate">
                    {name}
                </p>
                <p className="text-green-600 font-medium text-sm mt-1">
                    ${(price * quantity).toFixed(2)}
                </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
                <button
                    onClick={() => updateQty(id, quantity - 1)}
                    aria-label="Decrease quantity"
                    className="w-7 h-7 rounded-full border border-gray-200
                               flex items-center justify-center
                               hover:bg-gray-100 transition-colors text-gray-800 hover:cursor-pointer"
                >
                    <Minus size={12} />
                </button>

                <span className="text-sm text-gray-800 font-medium w-4 text-center">
                    {quantity}
                </span>

                <button
                    onClick={() => updateQty(id, quantity + 1)}
                    aria-label="Increase quantity"
                    className="w-7 h-7 rounded-full border border-gray-200
                               flex items-center justify-center
                               hover:bg-gray-100 transition-colors text-gray-800 hover:cursor-pointer"
                >
                    <Plus size={12} />
                </button>

                <button
                    onClick={() => removeItem(id)}
                    aria-label="Remove item"
                    className="ml-1 text-red-500 hover:text-red-600
                               transition-colors hover:cursor-pointer"
                >
                    <Trash2 size={14} />
                </button>
            </div>
        </div>
    );
}
