import { AnchorHTMLAttributes } from 'react'
import { classMerge } from '@/utils/classMerge'

export default function Link({ href, children, className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a 
            href={href}
            className={classMerge('font-light text-lg hover:cursor-pointer', className)}
            {...props}
        >
            {children}
        </a>
    )
}