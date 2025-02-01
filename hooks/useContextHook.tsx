"use client"
import React, { createContext, PropsWithChildren, useContext } from "react"

interface CategoryContextType {
    category: CategoryType[]
    addCategory: (category: CategoryType) => void
    clearCategories: () => void
    clearPost: () => void
    updateCategory: (category: CategoryType) => void
    updatePost: (post: NewsType) => void
    addPost: (post: NewsType) => void
    post: NewsType[]
}
const GeneralContext = createContext<CategoryContextType | undefined>(undefined);

type Props = PropsWithChildren<{}>

export const GeneralProvider = ({children}: Props) => {
    const [category, setCategory] = React.useState<CategoryType[]>([])
    const [post, setPost] = React.useState<NewsType[]>([])

    const addCategory = (category: CategoryType) => {
        setCategory(prev => [...prev, category])
    }
    const updateCategory = (updatedCategory: CategoryType) => {
        setCategory(prev => prev.map((cat) => cat.id === updatedCategory.id ? updatedCategory : cat))
    }
    const addPost = (post: NewsType) => {
        setPost(prev => [...prev, post])
    }
    const updatePost = (updatedPost: NewsType) => {
        setPost(prev => prev.map((post) => post.id === updatedPost.id ? updatedPost : post))
    }
    const clearCategories = () => {
        setCategory([]);
      };
    const clearPost = () => {
        setPost([]);
      };
    

    return(
        <GeneralContext.Provider value={{category, addCategory, clearCategories, updatePost, post, clearPost, addPost, updateCategory}}>
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