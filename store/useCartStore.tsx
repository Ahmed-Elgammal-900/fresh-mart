'use client';
import { CartStore } from '@/types/store.types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,
            isModalOpen: false,
            _hasHydrated: false,

            setHasHydrated: (value) => set({ _hasHydrated: value }),

            addItem: (item) => {
                const existing = get().items.find((i) => i.id === item.id);
                if (existing) {
                    set((state) => ({
                        items: state.items.map((i) =>
                            i.id === item.id
                                ? { ...i, quantity: i.quantity + 1 }
                                : i
                        ),
                    }));
                } else {
                    set((state) => ({
                        items: [
                            ...state.items,
                            { ...item, price: Number(item.price), quantity: 1 },
                        ],
                    }));
                }
            },

            removeItem: (id) =>
                set((state) => ({
                    items: state.items.filter((i) => i.id !== id),
                })),

            updateQty: (id, qty) =>
                set((state) => ({
                    items:
                        qty === 0
                            ? state.items.filter((i) => i.id !== id)
                            : state.items.map((i) =>
                                  i.id === id ? { ...i, quantity: qty } : i
                              ),
                })),

            clearCart: () => set({ items: [] }),
            toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
            toggleModal: () =>
                set((state) => ({ isModalOpen: !state.isModalOpen })),
        }),
        {
            name: 'cart-storage',
            partialize: (state) => ({
                items: state.items,
            }),
            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);
            },
        }
    )
);

export default useCartStore;
