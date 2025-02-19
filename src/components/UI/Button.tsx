import { ButtonHTMLAttributes } from 'react'
import { classMerge } from '@/utils/classMerge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
}

export default function Button ({ children, onClick, variant = 'primary', className, disabled, ...props }: ButtonProps) {
    const variantStyles = { 
        primary: 'bg-linear-to-r from-primary-limeGreen to-primary-cyan-light',
        secondary: 'bg-linear-to-bl from-primary-cyan-light to-primary-limeGreen'
    }

    return (
        <button
            onClick={onClick}
            className={classMerge(
                'py-3 px-5 rounded-full text-neutral-lighter hover:cursor-pointer',
                disabled && 'bg-neutral-primary-grayish hover:cursor-not-allowed',
                variantStyles[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}