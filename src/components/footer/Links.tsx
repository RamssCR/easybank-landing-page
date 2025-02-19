import { footerLinks } from '@/utils/links'
import Link from '@/components/UI/Link'

export default function Links() {
    return (
        <section className="grid grid-cols-1 gap-y-4 lg:w-[30em] lg:grid-cols-2 lg:gap-x-4">
            {footerLinks.map((link, index) => (
            <Link
                key={index}
                href={link}
                className="text-center text-neutral-light hover:text-primary-limeGreen lg:text-left"
            >
                {link}
            </Link>
            ))}
        </section>
    )
}