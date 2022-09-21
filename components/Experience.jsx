import React from 'react'
import Image from 'next/image'

const Experience = () => {
  return (
    <div id='experience' className='w-full p-2 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center py-10'>
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
                    <p className='py-2 text-gray-600'>This is the first course I took which formally introduced me to programming. CS50 covered topics ranging from Machine Learning to Web Development to more theoretical Computer Science concepts, although mainly at the surface level. The initial part of the course was taught in C, and soon we moved on to python and flask.</p>
                    <p className='py-2 text-gray-600'>Out of the topics that touched upon the topic which I gravitated towards was web-programming, that being my topic of choice for the final project in order to graduate the course. My first ever web application was a simple four route webapp using flask, html and css.</p>
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
                    <p className='py-2 text-gray-600'>I was given the opportunity to intern at Codomo as a front-end engineer. My six months there was primarily working on Rolljak, one of Codomo&apos;s products, which went through several reiterations and redesigns with the design team. We used the scrum methodology to organise our workflow, and working alongside the tech leads, PM and POs was initially a steep learning curve, but nonetheless an important and fruitful experience learning to work in an agile team.</p>
                    <p className='py-2 text-gray-600'>Although officially my title was a front-end engineer, some tickets did require some back-end routing and database changes. Ruby on Rails was Rolljak&apos;s techstack, along with SASS and Jquery. Towards the later months of my internship, Codomo started to integrate Cypress for unit testing.</p>
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
                    <p className='py-2 text-gray-600'>I joined Fintech Society as a Software Developer primarily because I wanted to continue my experience from Codomo as a Developer, although a part of it also stems from wanting to explore the crypto-currency scene and its various technologies.</p>
                    <p className='py-2 text-gray-600'>Currently, I&apos;m working on Decentralised Autonomous Organisation (DAO), a form of legal structure which gained popularity along with the rise of cryptocurrency ethusiasts and blockchain technology not as a machine learning or blockchain developer but likewise as a web developer.</p>
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