import { links } from '@/utils/links'
import Link from '@/components/UI/Link'

export default function Navbar() {
    const linkStyle = 'px-5 py-9 text-neutral-primary-grayish border-b-4 border-transparent hover:text-primary-blue-dark hover:border-b-primary-limeGreen'

    return (
        <nav className="hidden lg:flex items-center">
            {links.map((link, index) => (
                <Link key={index} href={`#${link}`} className={linkStyle}>{link}</Link>
            ))}
        </nav>
    )
}