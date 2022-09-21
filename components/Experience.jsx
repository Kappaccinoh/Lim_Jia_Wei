import React from 'react'
import Image from 'next/image'

const Experience = () => {
  return (
    <div className='w-full h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center '>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Experience</p>
            <h2 className='py-4'>My Past Experiences</h2>

            <div id='cs50-harvard' className='flex justify-center p-5'>
                <div className='flex justify-center flex-col w-[30%]'>
                    <div className='flex justify-center items-center p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                        <Image className='rounded-xl' src='/../public/assets/cs50logo.png' width='250' height='250'/>
                    </div>
                    <h3 className='py-3 text-center'>June 2021 - Aug 2021</h3>
                </div>
                <div className='w-full h-auto m-auto flex-col items-center justify-left px-10'>
                    <p className='py-2 text-gray-600 font-bold'>Harvard CS50 - Intro To Computer Science</p>
                    <p className='py-2 text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, eveniet deleniti culpa accusamus saepe maxime. Quis itaque repudiandae, nam odit sequi incidunt adipisci, magni, nulla rem numquam nostrum iusto eligendi!</p>
                    <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                        <div className='flex justify-center p-5'>
                            <Image className='' src='/../public/assets/pythonlogo.jpg' width='64px' height='64px'/>
                            <Image className='' src='/../public/assets/flasklogo2.png' width='64px' height='64px'/>
                            <Image className='' src='/../public/assets/C_Logo.png' width='64px' height='64px'/>
                        </div>
                    </div>
                </div>
            </div>

            <div id='rolljak-codomo' className='flex justify-center p-5'>
                <div className='flex justify-center flex-col w-[30%]'>
                    <div className='my-2 flex justify-center items-center p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                        <Image className='rounded-xl' src='/../public/assets/codomologo.jpg' width='250' height='250'/>
                    </div>
                    <div className='my-2 flex justify-center items-center p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                        <Image className='rounded-xl' src='/../public/assets/rolljaklogo.webp' width='250' height='250'/>
                    </div>
                    <h3 className='py-3 text-center'>Jan 2022 - June 2022</h3>
                </div>
                <div className='w-full h-auto m-auto flex-col items-center justify-left px-10'>
                    <p className='py-2 text-gray-600 font-bold'>Front-End Engineer | Codomo</p>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto soluta quasi ipsam ab officia doloremque iure recusandae eius repellat, eligendi laboriosam atque quo doloribus porro esse officiis. Ratione, officia!</p>
                    <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                        <div className='flex justify-between p-5'>
                            <Image className='' src='/../public/assets/htmllogo.png' width='64px' height='64px'/>
                            <Image className='' src='/../public/assets/scsslogo.png' width='64px' height='64px'/>
                            <Image className='' src='/../public/assets/jquerylogo.png' width='64px' height='64px'/>
                            <Image className='' src='/../public/assets/railslogo.png' width='64px' height='64px'/>
                            <Image className='' src='/../public/assets/cypresslogo.jpg' width='64px' height='64px'/>
                            <Image className='' src='/../public/assets/postgreslogo.png' width='64px' height='64px'/>
                        </div>
                    </div>
                </div>
            </div>

            <div id='nus-fintch' className='flex justify-center p-5'>
                <div className='flex justify-center flex-col w-[30%]'>
                    <div className='my-2 flex justify-center items-center p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                        <Image className='rounded-xl' src='/../public/assets/fintechlogo.jpg' width='250' height='250'/>
                    </div>
                    <h3 className='py-3 text-center'>Aug 2022 - Present</h3>
                </div>
                <div className='w-full h-auto m-auto flex-col items-center justify-left px-10'>
                    <p className='py-2 text-gray-600 font-bold'>Software Developer | NUS Fintech Society</p>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus obcaecati, soluta nulla eum nisi, doloremque possimus asperiores earum assumenda, commodi recusandae tempore corporis ullam! Commodi consequuntur nostrum doloremque iste. Quia.</p>
                    <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                        <div className='flex justify-center p-5'>
                            <Image className='' src='/../public/assets/nextjslogo.png' width='64px' height='64px'/>
                            <Image className='' src='/../public/assets/tailwindcsslogo.jpg' width='64px' height='64px'/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Experience