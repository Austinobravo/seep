import React from 'react'
import AdminNav from '../_components/AdminNav'
import CategoryForm from './_components/CategoryForm'
import CategoryTable from './_components/CategoryTable'
import { useAllContext } from '@/hooks/useContextHook'

const data = [
  {
    id: "string",
    name: "string",
    slug: "string",
    description: "string",

    userId: "string",

    createdAt: "",
  },
  {
    id: "string",
    name: "string",
    slug: "string",
    description: "string",

    userId: "string",

    createdAt: "",
  },
]
const CategoryPage = async () => {
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
    <section>
        <AdminNav title='Category' user='Joy'/>

        <div>
            <div>
                <h2 className='text-2xl py-4'>Categories</h2>
            </div>
            <div className='flex gap-7 flex-wrap md:flex-nowrap'>
                <CategoryForm/>
                <CategoryTable data={category}/>
    
            </div>
          
        </div>
    </section>
  )
}

export default CategoryPage
