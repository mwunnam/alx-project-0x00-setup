import React from "react";

interface ButtonProps {
    title: string;
    size?: "small" | "medium" | "large";
    shape?: "rounded-sm" | "rounded-md" | "rounded-full";
    className?: string; 
}

const Botton: React.FC<ButtonProps> = ({ title, size = "medium", shape = "rounded-md", className }) => {
    const sizeClasses = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-2 text-1g",
    };

    return (
        <button
            className={`bg-blue-600 text-white font-semibold ${sizeClasses[size]} ${shape} ${className}`}
        >
            {title}
        </button>
    );
}

export default Button;