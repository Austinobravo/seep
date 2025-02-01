import React, { PropsWithChildren } from 'react'
import AdminNav from '../_components/AdminNav'

type Props = PropsWithChildren<{}>
const CategoryLayoutPage = ({children}: Props) => {
  return (
    <section>
         <AdminNav title='Category'/>
         {children}
      
    </section>
  )
}

export default CategoryLayoutPage
