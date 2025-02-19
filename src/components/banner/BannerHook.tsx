import Button from '@/components/UI/Button'
import Title from '@/components/UI/Title'
import Text from '@/components/UI/Text'

export default function BannerHook() {
    return (
        <article className="flex w-full flex-col items-center gap-7 px-8 lg:items-start lg:px-16 xl:px-32 xl:ml-12">
            <Title size="text-5xl" className="text-center font-extralight lg:text-left">Next generation digital banking</Title>
            <Text className="text-center px-2 lg:text-left xl:pr-4">
                Take your finantial life online. Your EasyBank
                account will be a one-stop-shop for spending. 
                saving, budgeting, investing and much more.
            </Text>
            <Button
                className="py-3 px-10 font-semibold hover:brightness-110"
            >
                Request Invite
            </Button>
        </article>
    )
}