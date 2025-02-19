import { ReactNode } from 'react'
import { classMerge } from '@/utils/classMerge'

interface ModalProps {
    children?: ReactNode
    className?: string
}

export default function Modal({ children, className }: ModalProps) {
    return (
        <section
            className={classMerge(
                'fixed w-full bg-linear-to-b from-primary-blue-dark/55 to-primary-blue-dark/0 p-5',
                className
            )}
        >
            {children}
        </section>
    )
}