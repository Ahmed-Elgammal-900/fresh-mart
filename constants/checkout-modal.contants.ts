import { Banknote, CreditCard, Wallet } from 'lucide-react';

export const stepLabels = ['Delivery', 'Payment', 'Review'];

export const paymentOptions = [
    ['card', CreditCard, 'Card'],
    ['cash', Banknote, 'Cash'],
    ['wallet', Wallet, 'Wallet'],
] as const;

export const deliveryCost = 1.5;
