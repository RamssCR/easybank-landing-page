import { ReactNode } from 'react'

export default function Banner({ children }: { children?: ReactNode }) {
    return (
        <section className="grid w-full grid-cols-1 gap-y-5 bg-neutral-light pb-20 lg:grid-cols-2 lg:gap-x-6 lg:place-items-center lg:pb-0">
            {children}
        </section>
    )
}