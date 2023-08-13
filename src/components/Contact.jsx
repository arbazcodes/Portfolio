import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for handling form submission (email sending, etc.)
    };

    return (
        <div className='flex bg-gradient-to-r from-black to-slate-950 h-full w-full text-white justify-center items-center p-12'>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className='p-20 md:w-[500px] bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl'
            >
                <h1 className='text-4xl font-bold mb-6'>Contact</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                    <label className='flex flex-col'>
                        <span className='text-xl mb-2'>Name</span>
                        <input
                            className='bg-slate-800 rounded-md outline-none h-10 p-4 text-white'
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder='First and Last Name'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-xl mb-2'>Email</span>
                        <input
                            className='bg-slate-800 rounded-md outline-none h-10 p-4 text-white'
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder='example@example.com'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-xl mb-2'>Message</span>
                        <textarea
                            className='bg-slate-800 rounded-md outline-none p-4 text-white'
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='Your message here...'
                            rows={4}
                        />
                    </label>
                    <motion.button className="button" whileHover={{ scale: 1.05, color:"#000"}}>
                    <span>Submit</span>
                    <div className="stripe" />
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;
