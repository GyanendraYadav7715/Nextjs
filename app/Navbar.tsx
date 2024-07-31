import Link from 'next/link'
import React from 'react'
 
const Navbar = () => {
  return (
      <div className='flex gap-8 bg-slate-200 p-5 items-center justify-center'>
          <Link href="/" className='uppercase'>Logo</Link>
          <Link href="/users" className='uppercase'>User</Link>
          <Link href="/admin" className='uppercase'>Admin</Link>
          <Link href="/" className='uppercase'>Cart</Link>
    </div>
  )
}

export default Navbar