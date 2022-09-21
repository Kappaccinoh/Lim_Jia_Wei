import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    return (
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-center items-center w-full h-full px-2 2xl:px-16'>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b-2 border-black'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b-2 border-black'>About</li>
                        </Link>
                        <Link href='/#experience'>
                            <li className='ml-10 text-sm uppercase hover:border-b-2 border-black'>Experience</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b-2 border-black'>Contact</li>
                        </Link>
                    </ul>
                </div>
                {/* <div className='pl-10'>
                    <AiOutlineMenu size={30}/>
                </div> */}
            </div>

            {/* <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>
                <div className='fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'>

                </div>
            </div> */}
        </div>
    )
}

export default Navbar