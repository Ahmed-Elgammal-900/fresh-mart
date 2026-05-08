'use client';
import { useCard } from '@/hooks/useCard';
import Field from '../atoms/Field';
import Input from '../atoms/Input';

export default function CardForm() {
    const card = useCard();

    const formatCard = (value: string) => {
        return value
            .replace(/\D/g, '')
            .slice(0, 16)
            .replace(/(.{4})/g, '$1 ')
            .trim();
    };

    const formatExpiry = (value: string) => {
        const v = value.replace(/\D/g, '');
        if (v.length === 0) return '';
        if (v.length <= 2) return v;
        return v.slice(0, 2) + '/' + v.slice(2, 4);
    };

    const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace') {
            const value = card.fields.expiry;
            if (value.endsWith('/') || value.length === 3) {
                e.preventDefault();
                card.handleChange('expiry', value.slice(0, -1));
            }
        }
    };

    return (
        <div className="space-y-3">
            <Field
                label="Card number"
                id="card-number"
                error={card.errors.cardNumber}
            >
                <Input
                    id="card-number"
                    value={card.fields.cardNumber}
                    error={card.errors.cardNumber}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    onChange={(e) =>
                        card.handleChange(
                            'cardNumber',
                            formatCard(e.target.value)
                        )
                    }
                    onBlur={(e) =>
                        card.handleBlur('cardNumber', e.target.value)
                    }
                />
            </Field>
            <div className="grid grid-cols-3 gap-3">
                <div className="col-span-1">
                    <Field
                        label="Expiry"
                        id="expiry"
                        error={card.errors.expiry}
                    >
                        <Input
                            id="expiry"
                            value={card.fields.expiry}
                            error={card.errors.expiry}
                            placeholder="MM/YY"
                            maxLength={5}
                            onChange={(e) =>
                                card.handleChange(
                                    'expiry',
                                    formatExpiry(e.target.value)
                                )
                            }
                            onBlur={(e) =>
                                card.handleBlur('expiry', e.target.value)
                            }
                            onKeyDown={handleBackspace}
                        />
                    </Field>
                </div>
                <div className="col-span-1">
                    <Field label="CVV" id="cvv" error={card.errors.cvv}>
                        <Input
                            id="cvv"
                            value={card.fields.cvv}
                            error={card.errors.cvv}
                            placeholder="123"
                            maxLength={4}
                            onChange={(e) =>
                                card.handleChange('cvv', e.target.value)
                            }
                            onBlur={(e) =>
                                card.handleBlur('cvv', e.target.value)
                            }
                        />
                    </Field>
                </div>
            </div>
            <Field
                label="Cardholder name"
                id="card-name"
                error={card.errors.cardName}
            >
                <Input
                    id="card-name"
                    value={card.fields.cardName}
                    error={card.errors.cardName}
                    placeholder="Ahmed Hassan"
                    onChange={(e) =>
                        card.handleChange('cardName', e.target.value)
                    }
                    onBlur={(e) => card.handleBlur('cardName', e.target.value)}
                />
            </Field>
        </div>
    );
}
