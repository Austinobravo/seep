import React from 'react'
import PermissionsForm from './PermissionsForm'
import RolesForm from './RolesForm'

const PermissionsAndRoles = () => {
  return (
    <div>
      <h3>Admin</h3>
      
        <PermissionsForm/>
        <RolesForm/>
      
    </div>
  )
}

export default PermissionsAndRoles
