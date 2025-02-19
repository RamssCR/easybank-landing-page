import Text from '@/components/UI/Text'
import Title from '@/components/UI/Title'
import Image from '@/components/UI/Image'
import { ArticleProps } from '@/types/item'

export default function Article({ image, author, title, description }: ArticleProps) {
    return (
        <article className="rounded-lg overflow-hidden">
            <section className="w-full flex lg:h-50">
                <Image src={image} alt={title} className="w-full object-cover" />
            </section>
            <section className="w-full flex flex-col items-start gap-3 px-8 py-10 bg-neutral-lighter lg:px-6">
                <Text className="text-sm">By {author}</Text>
                <Title 
                    as="h3" 
                    size="text-xl" 
                    className="font-light hover:text-primary-limeGreen hover:cursor-pointer"
                >
                    {title}
                </Title>
                <Text>{description}</Text>
            </section>
        </article>
    )
}