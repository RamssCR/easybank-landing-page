import { ReactNode } from 'react'
import { classMerge } from '@/utils/classMerge'

interface GridWrapperProps {
    children?: ReactNode
    className?: string
}

export default function GridWrapper({ children, className }: GridWrapperProps) {
    return (
        <section className={classMerge(
            'grid grid-cols-1 lg:grid-cols-4',
            className
        )}>
            {children}
        </section>
    )
}