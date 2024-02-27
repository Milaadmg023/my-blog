import React from 'react'
import { Link } from 'react-router-dom'

function GuestType() {
  return (
    <>
    <div className="absolute gap-1 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <Link to={'register'} className='hover:underline hover:underline-offset-8'>ثبت نام</Link>
        /
        <Link to={'login'} className='hover:underline hover:underline-offset-8'>ورود</Link>
    </div>
    </>
  )
}

export default GuestType