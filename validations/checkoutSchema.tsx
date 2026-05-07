import { z } from 'zod';

export const deliverySchema = z.object({
    firstName: z.string().min(2, 'First name is too short'),
    lastName: z.string().min(2, 'Last name is too short'),
    address: z.string().min(5, 'Address is too short'),
    city: z.string().min(2, 'City is required'),
    postal: z.string().regex(/^\d{4,10}$/, 'Invalid postal code'),
    phone: z.string().regex(/^[\+\d\s\-\(\)]{7,20}$/, 'Invalid phone number'),
});

export const cardSchema = z.object({
    cardNumber: z.string().regex(/^[\d\s]{19}$/, 'Enter a valid 16-digit number'),
    cardName: z.string().min(3, 'Cardholder name is too short'),
    expiry: z
        .string()
        .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Use MM/YY format')
        .refine((val) => {
            const [m, y] = val.split('/');
            return (
                new Date(2000 + parseInt(y), parseInt(m) - 1, 1) >= new Date()
            );
        }, 'Card is expired'),
    cvv: z.string().regex(/^\d{3,4}$/, 'Enter 3 or 4 digits'),
});

export const walletSchema = z.object({
    wallet: z.string().regex(/^[\+\d\s\-]{10,20}$/, 'Invalid number'),
});

export type DeliveryFields = z.infer<typeof deliverySchema>;
export type CardFields = z.infer<typeof cardSchema>;
export type WalletFields = z.infer<typeof walletSchema>;
