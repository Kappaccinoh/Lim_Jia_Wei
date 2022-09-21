import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Hey there, Greetings!</p>
                <h1 className='py-4'>I&apos;m <span className=''>Jia Wei</span></h1>
                <h2 className='py-2'>A Front-End Web Developer</h2>
                <p className='py-4 px-20'>
                    I&apos;m a first year computer science student studying at the National University Of Singapore.
                    Currently, I&apos;m focused on building responsive front-end web applications while learning back-end
                    technologies. With each project I undertake, I hope to value add to the team and learn as much as
                    possible to become an efficient and practical software developer.
                </p>
                <div className='py-4'>
                    <Image className='rounded-full' src='/../public/assets/Jumaring2.jpg' alt='/' width='300' height='300'/>
                </div>
                <Link href='/#about'>
                    <p className='cursor-pointer hover:scale-105 ease-in duration-300 py-4 uppercase text-md text-gray-800 underline'>scroll for more</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Main