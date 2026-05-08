'use client';
import type { DeliveryDetailsProps } from '@/types/checkout-modal.types';
import Field from '../atoms/Field';
import Input from '../atoms/Input';

export default function DeliveryDetails({
    submitStep1,
    delivery,
}: DeliveryDetailsProps) {
    return (
        <div className="space-y-3">
            <p className="text-sm font-medium text-gray-700 pb-2 border-b">
                Delivery details
            </p>
            <div className="grid grid-cols-2 gap-3">
                <Field
                    label="First name"
                    id="first-name"
                    error={delivery.errors.firstName}
                >
                    <Input
                        id="first-name"
                        value={delivery.fields.firstName}
                        error={delivery.errors.firstName}
                        placeholder="Ahmed"
                        onChange={(e) =>
                            delivery.handleChange('firstName', e.target.value)
                        }
                        onBlur={(e) =>
                            delivery.handleBlur('firstName', e.target.value)
                        }
                    />
                </Field>
                <Field
                    label="Last name"
                    id="last-name"
                    error={delivery.errors.lastName}
                >
                    <Input
                        id="last-name"
                        value={delivery.fields.lastName}
                        error={delivery.errors.lastName}
                        placeholder="Hassan"
                        onChange={(e) =>
                            delivery.handleChange('lastName', e.target.value)
                        }
                        onBlur={(e) =>
                            delivery.handleBlur('lastName', e.target.value)
                        }
                    />
                </Field>
            </div>
            <Field
                label="Street address"
                id="addr"
                error={delivery.errors.address}
            >
                <Input
                    id="addr"
                    value={delivery.fields.address}
                    error={delivery.errors.address}
                    placeholder="123 El Geish St"
                    onChange={(e) =>
                        delivery.handleChange('address', e.target.value)
                    }
                    onBlur={(e) =>
                        delivery.handleBlur('address', e.target.value)
                    }
                />
            </Field>
            <div className="grid grid-cols-2 gap-3">
                <Field label="City" id="city" error={delivery.errors.city}>
                    <Input
                        id="city"
                        value={delivery.fields.city}
                        error={delivery.errors.city}
                        placeholder="Suez"
                        onChange={(e) =>
                            delivery.handleChange('city', e.target.value)
                        }
                        onBlur={(e) =>
                            delivery.handleBlur('city', e.target.value)
                        }
                    />
                </Field>
                <Field
                    label="Postal code"
                    id="postal"
                    error={delivery.errors.postal}
                >
                    <Input
                        id="postal"
                        value={delivery.fields.postal}
                        error={delivery.errors.postal}
                        placeholder="43511"
                        onChange={(e) =>
                            delivery.handleChange('postal', e.target.value)
                        }
                        onBlur={(e) =>
                            delivery.handleBlur('postal', e.target.value)
                        }
                    />
                </Field>
            </div>
            <Field label="Phone" id="phone" error={delivery.errors.phone}>
                <Input
                    id="phone"
                    type="tel"
                    value={delivery.fields.phone}
                    error={delivery.errors.phone}
                    placeholder="+20 62 000 0000"
                    onChange={(e) =>
                        delivery.handleChange('phone', e.target.value)
                    }
                    onBlur={(e) => delivery.handleBlur('phone', e.target.value)}
                />
            </Field>
            <button
                onClick={submitStep1}
                className="w-full bg-green-700 hover:bg-green-800 text-white rounded-xl py-3 text-sm font-medium transition-colors mt-1"
            >
                Continue to payment
            </button>
        </div>
    );
}
