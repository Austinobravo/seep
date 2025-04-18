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
type PrivacyType = {
    id: string
    content: string
    type: string
  
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
type TestimonialType ={
    id: string
    individual_name: string
    individual_image: string
    content: string
    school: string
    program:string

    userId: string

    createdAt: string


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
    id: string
    username : string
    email : string
    password: string
    firstName: string
    lastName: string
    phone: string
    bio: string
    image: string
    isActive: boolean
    isBlocked: boolean
    role: string

    category:     CategoryType
    news:        NewsType

}

type JoinUsType = {
        id: string
        firstName: string
        lastName: string
        email: string
        phone: string
      
        createdAt: string
}
type ContactUsType = {
        id: string
        name: string
        email: string
        phone: string
        message: string
      
        createdAt: string

}

type GalleryCategoryType = {
        id: string
        title: string
        subtitle: string
        userId: string
        galleryImage: GalleryImageType[]
        createdAt: string

}
type GalleryImageType = {
        id: string
        image: string
        description: string
        userId: string
        galleryCategoryId : string

        createdAt: string

}

declare module 'react-quill'{
    const ReactQuill: any
    export default ReactQuill
}      