import { useApi } from '@/hooks/useApi'
import { Item } from '@/types/item'
import AboutItem from './AboutItem'
import GridWrapper from '@/components/UI/GridWrapper'
import Layout from '@/components/UI/Layout'
import Title from '@/components/UI/Title'
import Text from '@/components/UI/Text'

export default function About() {
    const { data } = useApi<Item[]>('./src/data/about.json')

    return (
        <section className="w-full flex items-start justify-center bg-neutral-primary-grayish-light">
            <Layout className="flex flex-col items-center gap-5 px-7 py-16 lg:items-start">
                <Title as="h2" size="text-4xl" className="text-center font-light lg:text-left">Why choose EasyBank?</Title>
                <Text className="text-center lg:text-left lg:w-150">
                    We leverage Open Banking to turn your
                    bank account into your finantial hub.
                    Control your finances like never before.
                </Text>
                <GridWrapper className="mt-14 gap-y-10 lg:gap-x-7">
                    {data?.map((about, index) => (
                        <AboutItem 
                            key={index}
                            image={about.image}
                            title={about.title}
                            description={about.description}
                        />
                    ))}
                </GridWrapper>
            </Layout>
        </section>
    )
}