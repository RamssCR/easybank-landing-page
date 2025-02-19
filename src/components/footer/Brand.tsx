import { ImgHTMLAttributes } from 'react'
import { useApi } from '@/hooks/useApi'
import Image from '@/components/UI/Image'
import logoIcon from '@/assets/images/logo2.svg'

export default function Brand() {
    const { data } = useApi<ImgHTMLAttributes<HTMLImageElement>[]>('./src/data/networks.json')

    return (
        <article className="w-full flex flex-col items-center gap-7 lg:items-start lg:gap-16 lg:w-fit">
            <Image src={logoIcon} alt="EasyBank" />
            <section className="flex items-center gap-4">
                {data?.map((icon, index) => (
                    <img
                        key={index}
                        src={icon.src}
                        alt={icon.alt}
                        title={icon.alt}
                        className="w-6 h-6 object-contain hover:cursor-pointer"
                    />
                ))}
            </section>
        </article>
    )
}