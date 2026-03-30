import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "authority";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const variants = {
  primary: 'bg-orange-600 hover:bg-orange-700 text-white',
  secondary: 'border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white',
  tertiary: 'bg-green-600 hover:bg-green-700 text-white font-bold',
  authority: 'bg-amber-600 hover:bg-amber-700 text-white uppercase tracking-wide'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  onClick,
  type = 'button',
  className = ''
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''}
        font-semibold rounded-lg transition duration-200 shadow-md hover:shadow-lg
        ${className}
      `}
    >
      {children}
    </button>
  );
};