import Image from '@/components/UI/Image'
import Title from '@/components/UI/Title'
import Text from '@/components/UI/Text'
import { Item } from '@/types/item'

export default function AboutItem({ image, title, description }: Item) {
    return (
        <article className="flex flex-col items-center gap-6 lg:items-start">
            <Image src={image} alt={title} />
            <Title as="h3" className="text-center lg:text-left">{title}</Title>
            <Text className="text-center lg:text-left">{description}</Text>
        </article>
    )
}