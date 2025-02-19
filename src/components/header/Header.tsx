import { useState } from 'react'
import Image from '@/components/UI/Image'
import Button from '@/components/UI/Button'
import Layout from '@/components/UI/Layout'
import logoIcon from '@/assets/images/logo.svg'
import hamburgerIcon from '@/assets/images/icon-hamburger.svg'
import closeIcon from '@/assets/images/icon-close.svg'
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () => setIsOpen(prev => !prev)

    return (
        <header className="w-full fixed z-20 top-0 left-0 bg-neutral-lighter">
            <Layout className="mx-auto flex items-center justify-between px-7 py-7 lg:py-0">
                <Image src={logoIcon} alt="Easybank" className="w-36" />
                <Navbar />
                <Button className="hidden text-[0.95em] font-semibold hover:brightness-110 lg:flex lg:px-8">Request Invite</Button>
                <Image 
                    src={!isOpen ? hamburgerIcon : closeIcon} 
                    alt="Open navigation" 
                    className="w-8 h-5 object-contain lg:hidden hover:cursor-pointer" 
                    onClick={toggleModal}
                />
            </Layout>
            <article className="max-w-[75em] mx-auto w-full">
            </article>
            {isOpen && <NavbarMobile />}
        </header>
    )
}