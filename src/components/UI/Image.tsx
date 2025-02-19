import { ImgHTMLAttributes } from 'react'
import { classMerge } from '@/utils/classMerge'

export default function Image({ src, alt, className, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img 
            src={src} 
            alt={alt} 
            className={classMerge(className)} 
            {...props}
        />
    )
}