import Modal from '@/components/UI/Modal'
import { links } from '@/utils/links'
import Link from '../UI/Link'

export default function NavbarMobile() {
    return (
        <Modal className="top-19 h-4/5 lg:hidden">
            <nav className="bg-neutral-light py-5 rounded-lg flex flex-col items-center gap-4">
                {links.map((link, index) => (
                    <Link key={index} href={`#${link}`} className="font-normal text-primary-blue-dark">{link}</Link>
                ))}
            </nav>
        </Modal>
    )
}