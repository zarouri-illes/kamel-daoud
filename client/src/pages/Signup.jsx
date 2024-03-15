import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

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
        try {
            setLoading(true)
            console.log('form is submitted');
            const {data} = await axios.post('/api/auth/signup',  formData);

            if(data.success === false) {
                setLoading(false);
                setError(data.message);
                return;
            }

            setLoading(false);
            setError(null);
            navigate("/signin")
            console.log("user created");
        } catch (error) {
            setLoading(false);
            setError(error.message)
        }
    }

    return (
        <section className='mt-40 max-w-lg z-50 mx-auto relative'>
            <h1 className='text-center text-2xl font-bold my-6'>Sign Up</h1>

            <form className='flex flex-col  mt-8 gap-8' onSubmit={handleSubmit}>
                <input type="text" placeholder='Username' className='p-3 rounded-lg border' id='username' onChange={handleChange} />
                <input type="email" placeholder='Email' className='p-3 rounded-lg border' id='email' onChange={handleChange}/>
                <input type="password" placeholder='Password' className='p-3 rounded-lg border' id='password' onChange={handleChange} />

                <button disabled={loading} className='border transition-all duration-300 hover:opacity-90 py-2 rounded-lg bg-secondary cursor-pointer text-white'>
                    {loading ? "Loading..." : "Submit"}
                </button>
            </form>
            <div className='mt-8'>
                <p className='flex gap-4'>Already have an account ? <Link to={"/signin"}>
                    <span className='text-primary'>Sign in</span>   
                </Link></p>
            </div>

            <div>
                {error ? <p className='bg-primary'>{error}</p> : <p></p>}
            </div>
        </section>
    )
}
