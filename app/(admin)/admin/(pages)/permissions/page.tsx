import React from 'react'
import AdminNav from '../_components/AdminNav'
import PermissionsAndRoles from './_components/PermissionsAndRoles'
import PermissionsAndRolesTable from './_components/PermissionsAndRolesTable'

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
const PermissionsPage = () => {
  return (
    <section>
        <AdminNav title='Permissions' user='Joy'/>

        <div>
            <div>
                <h2 className='text-2xl py-4'>Permissions and Roles</h2>
            </div>
            <div className='flex gap-7 flex-wrap md:flex-nowrap'>
                <PermissionsAndRoles/>
                <PermissionsAndRolesTable data={data}/>
    
            </div>
          
        </div>
      
    </section>
  )
}

export default PermissionsPage
