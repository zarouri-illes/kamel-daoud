import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <section className='mt-40 max-w-lg z-50 mx-auto relative'>
            <h1 className='text-center text-2xl font-bold my-6'>Sign Up</h1>

            <form action="GET" className='flex flex-col  mt-8 gap-8'>
                <input type="text" placeholder='Username' className='p-3 rounded-lg border' id='username' />
                <input type="email" placeholder='Email' className='p-3 rounded-lg border' id='email' />
                <input type="password" placeholder='Password' className='p-3 rounded-lg border' id='username' />

                <button className='border transition-all duration-300 hover:opacity-90 py-2 rounded-lg bg-secondary cursor-pointer text-white'>Submit</button>
            </form>
            <div className='mt-8'>
                <p className='flex gap-4'>Already have an account ? <Link to={"/signin"}>
                    <span className='text-primary'>Sign in</span>   
                </Link></p>
            </div>
        </section>
    )
}
