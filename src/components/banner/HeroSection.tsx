import Image from '@/components/UI/Image'
import bgMobile from '@/assets/images/bg-intro-mobile.svg'
import bgDesktop from '@/assets/images/bg-intro-desktop.svg'
import phonesImage from '@/assets/images/image-mockups.png'

export default function HeroSection() {
    return (
        <section className="relative w-full h-full min-h-screen flex items-center justify-center lg:order-2">
            <Image
                src={bgMobile}
                alt="Background Shape Mobile"
                className="absolute w-full h-full object-cover lg:hidden"
            />
            <Image
                src={bgDesktop}
                alt="Background Shape Desktop"
                className="hidden absolute w-full h-full object-cover lg:block"
            />
            <Image
                src={phonesImage}
                alt="Hero Image"
                className="relative z-10 mx-auto max-w-[90%]"
            />
        </section>
    )
}