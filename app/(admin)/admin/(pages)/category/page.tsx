"use client"
import React from 'react'
import CategoryForm from './_components/CategoryForm'
import CategoryTable from './_components/CategoryTable'
import { useAllContext } from '@/hooks/useContextHook'

const CategoryPage = () => {
  const {category, addCategory, clearCategories} = useAllContext()
   
    React.useEffect(() => {
        const fetchUpdatedCategories = async () => {
          const response = await fetch('/api/category');
          const data = await response.json();
          clearCategories();
          data.forEach((category: CategoryType) => addCategory(category));
        };
      
        fetchUpdatedCategories();
      }, []);

  return (
        <div>
            <div>
                <h2 className='text-2xl py-4'>Categories</h2>
            </div>
            <div className='flex gap-7 flex-wrap md:flex-nowrap'>
                <CategoryForm/>
                <CategoryTable data={category}/>
    
            </div>
          
        </div>
  )
}

export default CategoryPage
