import React from 'react'
import Image from 'next/image'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='w-full h-screen p-2 flex items-center'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full text-center'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Let's Work Together</h2>
            <p className='px-16'>
            I check my emails quite regularly, feel free to drop me an email at&nbsp;
            <span className='font-bold text-black underline'>lim.jia28@gmail.com</span>
            &nbsp;or hit me up through one of my socials below! I'm always keeping an eye out for opportunities or other projects to take on in the coming months, and I'd love to get involved and value add to your project!
            </p>

            <div className='flex items-center justify-center py-3'>
                <div className='flex items-center justify-between my-4 w-[40%] sm:w-[40%] text-2xl'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaGithub/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact