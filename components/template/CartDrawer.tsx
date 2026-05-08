'use client';
import useCartStore from '@/store/useCartStore';
import CartFooter from '../organisms/CartFooter';
import CartHeader from '../organisms/CartHeader';
import CartBody from '../organisms/CartBody';

export default function CartDrawer() {
    const { items, isOpen, toggleCart } = useCartStore();

    return (
        <>
            <div
                role="button"
                aria-label="Close cart"
                tabIndex={isOpen ? 0 : -1}
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
                    ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleCart}
                onKeyDown={(e) =>
                    (e.key === 'Enter' || e.key === ' ') && toggleCart()
                }
            />

            <div
                role="dialog"
                aria-modal="true"
                aria-label="Shopping cart"
                className={`fixed right-0 top-0 h-full w-full max-w-sm
                      bg-white z-50 shadow-xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <CartHeader />

                <CartBody />

                {items.length > 0 && <CartFooter />}
            </div>
        </>
    );
}
