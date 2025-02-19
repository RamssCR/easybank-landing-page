import { ReactNode } from 'react'
import { classMerge } from '@/utils/classMerge'

interface TextProps {
    children?: ReactNode
    className?: string
}

export default function Text({ children, className }: TextProps) {
    return (
        <p className={classMerge('text-neutral-primary-grayish', className)}>
            {children}
        </p>
    )
}