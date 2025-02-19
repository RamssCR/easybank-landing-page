import { ReactNode } from 'react'
import { classMerge } from '@/utils/classMerge'

interface LayoutProp {
    children?: ReactNode
    className?: string
}

export default function Layout({ children, className }: LayoutProp) {
    return (
        <section 
            className={classMerge(
                'w-full max-w-[75em] px-4 sm:px-6 lg:px-8',
                className
            )}>
            {children}
        </section>
    )
}