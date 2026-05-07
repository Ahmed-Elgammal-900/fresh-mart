import { FormReturn } from '@/types/checkout-modal.types';
import { CardFields } from '@/validations/checkoutSchema';
import { createContext } from 'react';

export const CardContext = createContext<FormReturn<CardFields> | null>(null);
