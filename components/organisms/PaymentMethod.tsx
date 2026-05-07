'use client';
import { paymentOptions } from '@/constants/checkout-modal.contants';
import Field from '../atoms/Field';
import Input from '../atoms/Input';
import CardForm from './CardForm';
import type { PaymentMethodProps } from '@/types/checkout-modal.types';

export default function PaymentMethod({
    tab,
    setTab,
    setStep,
    submitStep2,
    wallet,
}: PaymentMethodProps) {
    return (
        <div className="space-y-3">
            <p className="text-sm font-medium text-gray-700 pb-2 border-b">
                Payment method
            </p>
            <div className="flex gap-2">
                {paymentOptions.map(([id, Icon, label]) => (
                    <button
                        key={id}
                        onClick={() => setTab(id)}
                        className={`flex-1 flex items-center justify-center gap-1.5 h-9 rounded-lg border text-xs transition-colors
                                                    ${tab === id ? 'bg-green-50 border-green-600 text-green-800' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}
                    >
                        <Icon size={13} />
                        {label}
                    </button>
                ))}
            </div>

            {tab === 'card' && <CardForm />}

            {tab === 'cash' && (
                <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-500 leading-relaxed">
                    Pay with cash on delivery. Our driver will bring exact
                    change.
                </div>
            )}

            {tab === 'wallet' && (
                <div className="space-y-1">
                    <Field
                        label="Mobile wallet number"
                        id="wallet"
                        error={wallet.errors.wallet}
                    >
                        <Input
                            id="wallet"
                            type="tel"
                            value={wallet.fields.wallet}
                            error={wallet.errors.wallet}
                            placeholder="+20 10 0000 0000"
                            onChange={(e) =>
                                wallet.handleChange('wallet', e.target.value)
                            }
                            onBlur={(e) =>
                                wallet.handleBlur('wallet', e.target.value)
                            }
                        />
                    </Field>
                    <p className="text-xs text-gray-400">
                        Vodafone Cash · Orange Money · Etisalat Cash
                    </p>
                </div>
            )}

            <button
                onClick={submitStep2}
                className="w-full bg-green-700 hover:bg-green-800 text-white rounded-xl py-3 text-sm font-medium transition-colors"
            >
                Review order
            </button>
            <button
                onClick={() => setStep(1)}
                className="w-full border border-gray-200 text-gray-500 hover:bg-gray-50 rounded-xl py-2.5 text-sm transition-colors"
            >
                Back
            </button>
        </div>
    );
}
