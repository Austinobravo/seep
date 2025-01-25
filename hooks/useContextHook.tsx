"use client"
import React, { createContext, PropsWithChildren, useContext } from "react"

interface CategoryContextType {
    category: CategoryType[]
    addCategory: (category: CategoryType) => void
    clearCategories: () => void
    clearPost: () => void
    updatePost: (post: PostType) => void
    addPost: (post: PostType) => void
    post: PostType[]
}
const GeneralContext = createContext<CategoryContextType | undefined>(undefined);

type Props = PropsWithChildren<{}>

export const GeneralProvider = ({children}: Props) => {
    const [category, setCategory] = React.useState<CategoryType[]>([])
    const [post, setPost] = React.useState<PostType[]>([])

    const addCategory = (category: CategoryType) => {
        setCategory(prev => [...prev, category])
    }
    const addPost = (post: PostType) => {
        setPost(prev => [...prev, post])
    }
    const updatePost = (updatedPost: PostType) => {
        setPost(prev => prev.map((post) => post.id === updatedPost.id ? updatedPost : post))
    }
    const clearCategories = () => {
        setCategory([]);
      };
    const clearPost = () => {
        setPost([]);
      };
    

    return(
        <GeneralContext.Provider value={{category, addCategory, clearCategories, updatePost, post, clearPost, addPost}}>
            {children}
        </GeneralContext.Provider>
    )
}

export const useAllContext = () => {
    const context = useContext(GeneralContext)

    if(!context){
        throw new Error("useAllContext must be used in a Provider")
    }

    return context
}