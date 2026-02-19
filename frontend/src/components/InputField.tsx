import type { ComponentPropsWithoutRef } from "react";
interface InputFieldProps extends ComponentPropsWithoutRef<"input"> {
    label: string;
}
export default function InputField({ label, ...props }: InputFieldProps) {
    return (
        <div className="mb-4 text-left">
            <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
            <input
                {...props}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
        </div>
    );
}
