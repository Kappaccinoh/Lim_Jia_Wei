import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <div id='contact' className='w-full h-screen p-2 flex items-center'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full text-center justify-center'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Let&apos;s Work Together</h2>
            <p className='px-16'>
            I check my emails quite regularly, feel free to drop me an email at&nbsp;
            <Link href='mailto:lim.jia28@email.com'>
                <span className='font-bold text-black underline cursor-pointer hover:scale-105 ease-in duration-300'>lim.jia28@gmail.com</span>
            </Link>
            &nbsp;or hit me up through one of my socials below! I&apos;m always keeping an eye out for opportunities or other projects to take on in the coming months, and I&apos;d love to get involved and value add to your project!
            </p>
            <div className='py-5 rounded-xl shadow-gray-400 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src='/../public/assets/jiawei4.jpeg' width='550px' height='409px'/>
            </div>

            <div className='flex items-center justify-center'>
                <div className='flex items-center justify-between my-4 w-[40%] sm:w-[40%] text-2xl'>
                    <Link href='https://www.linkedin.com/in/jia-wei-lim-747037181'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn/>
                        </div>
                    </Link>

                    <Link href='https://github.com/Kappaccinoh'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub/>
                        </div>
                    </Link>

                    <Link href='mailto:lim.jia28@email.com'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineMail/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact