import { ReactNode } from 'react'
import { classMerge } from '@/utils/classMerge'

interface TitleProps {
    children?: ReactNode
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    size?: string
    className?: string
}

export default function Title({ 
    children, 
    className, 
    as: Tag = 'h1', 
    size = 'text-2xl' 
}: TitleProps) {
    return (
        <Tag className={classMerge('font-normal text-primary-blue-dark', className, size)}>
            {children}
        </Tag>
    )
}