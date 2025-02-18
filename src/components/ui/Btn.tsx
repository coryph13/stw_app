'use client';

export function Btn({ variant = "default", children, className = "", ...props }) {
    const baseStyles = "px-4 py-2 rounded-md font-medium transition focus:outline-none";
    const variants = {
      default: "bg-black dark:bg-white text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-700 shadow-sm hover:shadow-white",
      outline: "border border-gray-700 dark:border-white text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300",
    };

    return (
      <button
        className={`${baseStyles} ${variants[variant] || variants.default} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
