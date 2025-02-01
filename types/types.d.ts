type NewsType ={
    id: string
    title: string
    image: string
    categoryId: string
    otherOptions: string
    slug: string
    user: UserType
    userId: string
    category: CategoryType
    newsContent: NewsContentType[]
    
    createdAt: string
}

type NewsContentType = {
    id: string
    heading: string
    paragraph: string
    news: NewsType
  
}
type CategoryType ={
    id: string
    name: string
    slug: string
    description: string
    news: NewsType[]

    userId: string

    createdAt: string


}

type UserType = {
    username : string
    email : string
    password: string
    firstName: string
    lastName: string

    category:     CategoryType
    news:        NewsType

}