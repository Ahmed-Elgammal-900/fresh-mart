'use client';
import { useState } from 'react';
import useCartStore from '@/store/useCartStore';
import { useFormValidation } from '@/hooks/useFormValidation';
import {
    deliverySchema,
    cardSchema,
    walletSchema,
} from '@/validations/checkoutSchema';
import DeliveryDetails from '../organisms/DelevieryDetails';
import PaymentMethod from '../organisms/PaymentMethod';
import OrderSummary from '../organisms/OrderSummary';
import CompleteStatus from '../molecules/CompleteStatus';
import StepIndicator from '../molecules/StepIndicator';
import CheckoutModalHeader from '../molecules/CheckoutModalHeader';
import { CardContext } from '@/context/CardContext';
import type { PaymentTab, Step } from '@/types/checkout-modal.types';

export default function CheckoutModal() {
    const { isModalOpen, toggleModal, clearCart } = useCartStore();
    const [step, setStep] = useState<Step>(1);
    const [tab, setTab] = useState<PaymentTab>('card');
    const [loading, setLoading] = useState(false);

    const delivery = useFormValidation(deliverySchema, {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postal: '',
        phone: '',
    });
    const card = useFormValidation(cardSchema, {
        cardNumber: '',
        cardName: '',
        expiry: '',
        cvv: '',
    });
    const wallet = useFormValidation(walletSchema, { wallet: '' });

    const submitStep1 = () => {
        if (delivery.validateAll()) setStep(2);
    };

    const submitStep2 = () => {
        const ok =
            tab === 'card'
                ? card.validateAll()
                : tab === 'wallet'
                  ? wallet.validateAll()
                  : true;
        if (ok) setStep(3);
    };

    const placeOrder = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep(4);
            clearCart();
            clearFields();
        }, 900);
    };

    const handleClose = () => {
        toggleModal();
        setTimeout(() => {
            setStep(1);
            setTab('card');
            setLoading(false);
            clearFields();
        }, 300);
    };

    const clearFields = () => {
        delivery.setFields({
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            postal: '',
            phone: '',
        });
        delivery.setErrors({});
        card.setFields({
            cardNumber: '',
            cardName: '',
            expiry: '',
            cvv: '',
        });
        card.setErrors({});
        wallet.setFields({ wallet: '' });
        wallet.setErrors({});
    };

    if (!isModalOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black/40 z-500"
                onClick={handleClose}
            />
            <div className="fixed inset-0 z-600 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
                    <CheckoutModalHeader handleClose={handleClose} />

                    {step < 4 && <StepIndicator step={step} />}

                    <div className="p-5">
                        {step === 1 && (
                            <DeliveryDetails
                                submitStep1={submitStep1}
                                delivery={delivery}
                            />
                        )}

                        {step === 2 && (
                            <CardContext value={card}>
                                <PaymentMethod
                                    submitStep2={submitStep2}
                                    tab={tab}
                                    setStep={setStep}
                                    setTab={setTab}
                                    wallet={wallet}
                                />
                            </CardContext>
                        )}

                        {step === 3 && (
                            <OrderSummary
                                placeOrder={placeOrder}
                                loading={loading}
                                setStep={setStep}
                            />
                        )}

                        {step === 4 && (
                            <CompleteStatus handleClose={handleClose} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
