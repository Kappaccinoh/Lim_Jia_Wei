import React from 'react'
import Image from 'next/image'

const Experience = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Experience</p>
            <h2 className='py-4'>My Past Experiences</h2>

            <div id='cs50-harvard' className='flex justify-center p-5'>
                <div className='flex justify-center flex-col'>
                    <div className='flex justify-center items-center p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                        <Image className='rounded-xl' src='/../public/assets/cs50logo.png' width='250' height='250'/>
                    </div>
                    <h3 className='py-3 text-center'>CS50 By Harvard University</h3>
                </div>
                <div className='w-full h-auto m-auto flex items-center justify-center px-10'>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi unde minus architecto, modi accusantium similique nemo soluta harum quod tempore possimus excepturi tempora. A exercitationem officia rem consequuntur laboriosam?</p>
                </div>
            </div>

            <div id='rolljak-codomo' className='flex justify-center p-5'>
                <div className='flex justify-center flex-col'>
                    <div className='my-2 flex justify-center items-center p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                        <Image className='rounded-xl' src='/../public/assets/codomologo.jpg' width='250' height='250'/>
                    </div>
                    <div className='my-2 flex justify-center items-center p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                        <Image className='rounded-xl' src='/../public/assets/rolljaklogo.webp' width='200' height='200'/>
                    </div>
                    <h3 className='py-3 text-center'>Rolljak at Codomo</h3>
                </div>
                <div className='w-full h-auto m-auto flex items-center justify-center px-10'>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi unde minus architecto, modi accusantium similique nemo soluta harum quod tempore possimus excepturi tempora. A exercitationem officia rem consequuntur laboriosam?</p>
                </div>
            </div>




        </div>
    </div>
  )
}

export default Experience