import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default Navbar