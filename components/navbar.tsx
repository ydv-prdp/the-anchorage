'use client'
import { UserButton, useAuth } from '@clerk/nextjs'
import React from 'react'
import Container from './container'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import Search from './search'

const Navbar = () => {
    const router = useRouter();
    const userId = useAuth();
  return (
    <div className='sticky top-0 border border-b-primary/10 bg-seconday'>
        <Container>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1 cursor-pointer' onClick={()=>router.push("/")}>
                    <Image src="./logo.svg" alt='logo' width={"30"} height={"30"}/>
                    <div className='font-bold text-xl'>The Anchorage</div>
                </div>
                <Search/>
                <div className='flex gap-3 items-center'>
                    <div>theme</div>
                    <UserButton afterSignOutUrl='/'/>
                    {!userId && <>
                        <Button variant="outline" size={"sm"} onClick={()=>router.push('/sign-in')}>Sign In</Button>
                        <Button size={"sm"} onClick={()=>router.push('/sign-up')}>Sign Up</Button>
                    </>}
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar