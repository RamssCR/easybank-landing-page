import Button from '@/components/UI/Button'
import Layout from '@/components/UI/Layout'
import Text from '@/components/UI/Text'
import Brand from './Brand'
import Links from './Links'

export default function Footer() {
    return (
        <footer className="w-full bg-primary-blue-dark">
            <Layout className="mx-auto flex flex-col items-center gap-10 lg:flex-row lg:justify-between py-12 px-7 lg:px-10">
                <section className="w-full flex flex-col items-center gap-10 lg:flex-row lg:gap-32">
                    <Brand />
                    <Links />
                </section>
                <section className="w-full flex flex-col items-center gap-7 lg:items-end">
                    <Button className="flex text-[0.95em] font-semibold hover:brightness-110 px-11 py-4">Request Invite</Button>
                    <Text className="text-neutral-primary-grayish">&copy; EasyBank. All Rights Reserved</Text>
                </section>
            </Layout>
        </footer>
    )
}