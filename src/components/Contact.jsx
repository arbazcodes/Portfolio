import React, { useState } from 'react';
import { delay, motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import gh from "../assets/gh.png";
import linkd from "../assets/linkd.png";
import insta from "../assets/insta.png";
import wa from "../assets/wa.png"
import em from "../assets/em.png"

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
        <div name= "contact" className=' pt-52 bg-gradient-to-r from-black to-slate-950 h-full w-full text-white p-12' style={{zIndex:1}}>
        <div className='w-full md:flex-row flex flex-col border-2 border-white'>
        <div className='justify-center items-center flex md:w-1/2'>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className='p-20 w-[600px] bg-transparent rounded-2xl min-w-[500px]'
                transition={{delay:0.25}}
            >
                <h1 className='text-4xl font-bold mb-6'>Contact</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                    <label className='flex flex-col'>
                        <input
                            className='bg-transparent outline-none h-10 p-4 mt-10 text-white border-b-2 border-white'
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder='Full Name'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <input
                            className='bg-transparent outline-none h-10 p-4 mt-10 text-white border-b-2 border-white'
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder='E-mail'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <textarea
                            className='bg-transparent pr-4 outline-none h-10 mt-10 text-white border-b-2 border-white'
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='   Your message here...'
                            rows={4}
                        />
                    </label>
                    <motion.button className="button mt-16" whileHover={{ scale: 1.05, color:"#000"}}>
                    <span>Submit</span>
                    <div className="stripe" />
                    </motion.button>
                </form>
            </motion.div>
        </div>
            <div className='justify-center items-center text-center flex flex-col md:w-1/2'>
                <motion.div 
                    initial={{y:-100, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{delay:0.25}}>
                        <h1 className='py-20 font-extrabold text-7xl mb-10'>GET IN TOUCH</h1>
                </motion.div>

                <motion.div 
                    initial={{y:100, opacity:0}}
                    whileInView={{y:0, opacity:1}} className='flex flex-wrap gap-10 pb-20 justify-center items-center'
                    transition={{delay:0.25}}>
                            <img src={gh} alt='GitHub' onClick={() => window.open("https://github.com/arbazcodes", "_blank")} className='w-16 h-16 bg-white rounded-full p-1 hover:scale-110 duration-200 hover:cursor-pointer'/>
                            <img src={linkd} alt='LinkedIn' onClick={() => window.open("https://www.linkedin.com/in/arbazcodes", "_blank")} className='w-16 h-16 bg-white rounded-full hover:scale-110 duration-200 hover:cursor-pointer'/>
                            <img src={insta} alt='Instagram' onClick={() => window.open("https://instagram.com/_major.tom_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D", "_blank")} className='w-16 h-16 bg-white rounded-full hover:scale-110 duration-200 hover:cursor-pointer'/>
                            <img src={wa} alt='WhatsApp' onClick={() => window.open("https://wa.me/923314138877", "_blank")} className='w-16 h-16 p-1 bg-white rounded-full hover:scale-110 duration-200 hover:cursor-pointer'/>
                            <img src={em} alt='Gmail' onClick={() => window.open("mailto:8566206@gmail.com", "_blank")} className='w-16 h-16 p-1 bg-white rounded-full hover:scale-110 duration-200 hover:cursor-pointer'/>
                </motion.div>

            </div>
            </div>
        </div>
    );
};

export default Contact;
