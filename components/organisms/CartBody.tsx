'use client';
import useCartStore from '@/store/useCartStore';
import { ShoppingCart } from 'lucide-react';
import CartItem from './CartItem';

export default function CartBody() {
    const { items } = useCartStore();

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {items.length === 0 ? (
                <div
                    className="flex flex-col items-center justify-center
                                h-full text-gray-400 gap-3"
                >
                    <ShoppingCart size={48} strokeWidth={1} />
                    <p>Your cart is empty</p>
                </div>
            ) : (
                items.map((item) => <CartItem key={item.id} {...item} />)
            )}
        </div>
    );
}
