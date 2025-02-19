import { useApi } from '@/hooks/useApi'
import { ArticleProps } from '@/types/item'
import GridWrapper from '@/components/UI/GridWrapper'
import Layout from '@/components/UI/Layout'
import Title from '@/components/UI/Title'
import Article from './Article'

export default function Articles() {
    const { data } = useApi<ArticleProps[]>('/data/articles.json')

    return (
        <section className="w-full flex items-start justify-center bg-neutral-light">
            <Layout className="w-full flex flex-col items-center gap-7 py-16 px-7 lg:gap-14 lg:items-start">
                <Title as="h2" size="text-4xl" className="font-light">Latest Articles</Title>
                <GridWrapper className="gap-y-10 lg:gap-x-5">
                    {data?.map((article, index) => (
                        <Article
                            key={index}
                            image={article.image}
                            author={article.author}
                            title={article.title}
                            description={article.description}
                        />
                    ))}
                </GridWrapper>
            </Layout>
        </section>
    )
}