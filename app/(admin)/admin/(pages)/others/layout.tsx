import React, { PropsWithChildren } from 'react'
import AdminNav from '../_components/AdminNav'

type Props = PropsWithChildren<{}>

const OthersLayout = ({children}: Props) => {
  return (
    <>
         <AdminNav title='Others'/>
         {children}
      
    </>
  )
}

export default OthersLayout
