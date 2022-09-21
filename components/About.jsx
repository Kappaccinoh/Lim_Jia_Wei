import React from 'react'
import Image from 'next/image'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const About = () => {
  return (
    <div className='w-full h-screen p-2 flex item-center'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-6'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi unde minus architecto, modi accusantium similique nemo soluta harum quod tempore possimus excepturi tempora. A exercitationem officia rem consequuntur laboriosam?</p>
                <p className='py-2 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex illo est ratione facilis officiis a consequuntur perferendis voluptatum eligendi quo voluptate laborum enim cumque doloremque repellat repellendus, libero exercitationem saepe?</p>
                <p className='py-2 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex illo est ratione facilis officiis a consequuntur perferendis voluptatum eligendi quo voluptate laborum enim cumque doloremque repellat repellendus, libero exercitationem saepe?</p>
                <div className='flex items-center justify-center'>
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
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src='/../public/assets/doorpic.jpg' alt='Jia Wei Rock Climbing' height='1280' width='960'/>
            </div>
        </div>
    </div>
  )
}

export default About