import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const About = () => {
  return (
    <div id='about' className='w-full h-screen p-2 flex item-center'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-6'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'>Outside of Computer Science I engage in a variety of outdoor activities. Anything that keeps me active and up on my feet always makes me feel alive and motivated and ready to start a new day. Running and hiking are part of my weekly routine, and that is precisely how I would spend my time if not sitting in front of a computer doing work.</p>
                <p className='py-2 text-gray-600'>In NUS, I am tied to two other commitments apart from NUS Fintech Society, that being NUS Mountaineering and I&apos;m part of the House Committee in my residential hall. Maintaining a healthy work life balance between the three as well as studies can be a challenge at times, but I think that as long as I prioritise and focus when I need to, it is possible to still value add and make something meaningful out of the three.</p>
                <p className='py-2 text-gray-600'>The photo on the right is me posing with my door chalked by people in my house, a tradition that is carried out at the start of each semester when everyone moves into their dormitory rooms for the first time. I often find myself admiring the drawings when I come back because it reminds me of my place in Cinnamon College and that I&apos;m constantly surrounded by other friends on the same journey as me.</p>
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
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src='assets/doorpic.jpg' alt='Jia Wei Rock Climbing' height='1280' width='960'/>
            </div>
        </div>
    </div>
  )
}

export default About