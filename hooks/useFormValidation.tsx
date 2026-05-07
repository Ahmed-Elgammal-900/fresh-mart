'use client';
import { useState, useCallback } from 'react';
import { ZodType, ZodError } from 'zod';

export function useFormValidation<T extends Record<string, string>>(
    schema: ZodType<T>,
    initial: T
) {
    const [fields, setFields] = useState<T>(initial);
    const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
    const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>(
        {}
    );

    const getFieldError = useCallback(
        (key: keyof T, value: string): string | null => {
            const partial = { ...fields, [key]: value };
            const result = schema.safeParse(partial);
            if (result.success) return null;
            const issue = (result.error as ZodError).issues.find(
                (i) => i.path[0] === key
            );
            return issue?.message ?? null;
        },
        [schema, fields]
    );

    const handleChange = useCallback(
        (key: keyof T, value: string) => {
            setFields((prev) => ({ ...prev, [key]: value }));

            if (touched[key]) {
                const msg = getFieldError(key, value);
                setErrors((prev) => ({ ...prev, [key]: msg ?? '' }));
            }
        },
        [touched, getFieldError]
    );

    const handleBlur = useCallback(
        (key: keyof T, value: string) => {
            setTouched((prev) => ({ ...prev, [key]: true }));
            const msg = getFieldError(key, value);
            setErrors((prev) => ({ ...prev, [key]: msg ?? '' }));
        },
        [getFieldError]
    );

    const validateAll = useCallback((): boolean => {
        const result = schema.safeParse(fields);
        if (result.success) {
            setErrors({});
            return true;
        }
        const newErrors: Partial<Record<keyof T, string>> = {};
        const newTouched: Partial<Record<keyof T, boolean>> = {};
        for (const issue of (result.error as ZodError).issues) {
            const key = issue.path[0] as keyof T;
            if (!newErrors[key]) newErrors[key] = issue.message;
            newTouched[key] = true;
        }
        setErrors(newErrors);
        setTouched(newTouched);
        return false;
    }, [schema, fields]);

    return {
        fields,
        setFields,
        errors,
        handleChange,
        handleBlur,
        validateAll,
        setErrors,
    };
}
