import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import EarthCanvas from "./Earth"

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {

        if (!form.name || !form.email || !form.message) {
            alert("Please fill in all fields.");
            return;
        }

        e.preventDefault();
        setLoading(true);

        emailjs.send("service_wzdjit8", 
            "template_uliw0nd", 
            {
                from_name: form.name,  
                to_name: "Arbaz Khan", 
                from_email: form.email, 
                to_email: "8566206@gmail.com", 
                message: form.message
            }, 
            "6-NCqRxX_Ncm8Pd2-"
        ).then(() => {
            setLoading(false);
            alert("Thank You. I will get back to you as soon as possible. ");
            setForm({
                name:'',
                email:'',
                message:'',
            });
        }).catch((error) => {
            setLoading(false);
            console.log(error);
            alert("Oops, Something went wrong.");
        });
    };

    return (
        <div className='bg-gradient-to-r from-black to-slate-950 h-full w-full text-white justify-center items-center p-12' style={{zIndex:1}}>
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
