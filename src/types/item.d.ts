export interface Item {
    image: string
    title: string
    description: string
}

export interface ArticleProps extends Item {
    author: string
}