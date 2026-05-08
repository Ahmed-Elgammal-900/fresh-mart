import { AlertCircle } from "lucide-react";

export default function Field({
    label,
    id,
    error,
    children,
}: {
    label: string;
    id: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <label htmlFor={id} className="block text-xs text-gray-500 mb-1">
                {label}
            </label>
            {children}
            {error && (
                <p className="flex items-center gap-1 text-xs text-red-700 mt-1">
                    <AlertCircle size={11} />
                    {error}
                </p>
            )}
        </div>
    );
}
