export default function Input({
    id,
    error,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { error?: string }) {
    return (
        <input
            id={id}
            className={`w-full border rounded-lg px-3 h-9 text-sm focus:outline-none focus:ring-2 transition-colors
                ${
                    error
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-gray-200 focus:border-green-600 focus:ring-green-600/20'
                }`}
            {...props}
        />
    );
}
