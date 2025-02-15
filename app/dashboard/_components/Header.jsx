"use client"
import React,{useEffect} from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
function Header () {
    const path=usePathname();
    useEffect(() => {
       console.log(path)
    },[]) 
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
     <Image src={'/logo.svg'} alt="logo" width={40} height={80} />   
    <UserButton />
    </div>
  )
}

export default Header