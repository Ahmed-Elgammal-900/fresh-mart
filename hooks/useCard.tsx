'use client';
import { CardContext } from '@/context/CardContext';
import { useContext } from 'react';

export function useCard() {
    const context = useContext(CardContext);
    if (!context) {
        throw new Error('useCard must be used within CardProvider');
    }
    return context;
}
