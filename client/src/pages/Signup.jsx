import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {

    const [formData, setFormData] = useState()

    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.id] : e.target.value
            }
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('form is submitted');
        const {data} = await axios.post('/api/auth/signup',  formData);
        console.log(data)
    }

    return (
        <section className='mt-40 max-w-lg z-50 mx-auto relative'>
            <h1 className='text-center text-2xl font-bold my-6'>Sign Up</h1>

            <form className='flex flex-col  mt-8 gap-8' onSubmit={handleSubmit}>
                <input type="text" placeholder='Username' className='p-3 rounded-lg border' id='username' onChange={handleChange} />
                <input type="email" placeholder='Email' className='p-3 rounded-lg border' id='email' onChange={handleChange}/>
                <input type="password" placeholder='Password' className='p-3 rounded-lg border' id='password' onChange={handleChange} />

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
