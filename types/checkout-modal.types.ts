import { Dispatch, SetStateAction } from 'react';
import type { useFormValidation } from '@/hooks/useFormValidation';
import type {
    DeliveryFields,
    WalletFields,
} from '@/validations/checkoutSchema';

export type Step = 1 | 2 | 3 | 4;
export type PaymentTab = 'card' | 'cash' | 'wallet';

export type FormReturn<T extends Record<string, string>> = ReturnType<
    typeof useFormValidation<T>
>;

export interface WithHandleClose {
    handleClose: () => void;
}

export type CheckoutModalHeaderProps = WithHandleClose;
export type CompleteStatusProps = WithHandleClose;

export interface DeliveryDetailsProps {
    submitStep1: () => void;
    delivery: FormReturn<DeliveryFields>;
}

export interface OrderSummaryProps {
    placeOrder: () => void;
    loading: boolean;
    setStep: Dispatch<SetStateAction<Step>>;
}

export interface PaymentMethodProps {
    tab: PaymentTab;
    setTab: Dispatch<SetStateAction<PaymentTab>>;
    setStep: Dispatch<SetStateAction<Step>>;
    submitStep2: () => void;
    wallet: FormReturn<WalletFields>;
}

export interface StepIndicatorProps {
    step: Step;
}
