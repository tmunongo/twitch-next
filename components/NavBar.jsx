import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import Logo from '../public/assets/half-life.png'
import { BsPerson, BsSearch, BsThreeDots } from 'react-icons/bs'

import { IoMenu, IoCloseSharp } from 'react-icons/io5'

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='fixed h-14 w-full flex flex-nowrap items-center p-4 bg-zinc-800 mb-[2px] z-10'>
        {/* Left section */}
        <div className='flex grow items-center justify-start'>
            <Link href='/'>
                <a className='flex'>
                    <Image 
                        alt='Home' 
                        src={Logo} 
                        width={36} 
                        height={36} className='cursor-pointer z-10' />
                </a>
            </Link>
            <p className='p-4'>Browse</p>
            <div className='p-4'>
            <Menu as='div' className='relative text-left'>
                <div className='flex'>
                    <Menu.Button>
                        <BsThreeDots size={20} />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-95'
                >
                    <Menu.Items className='origin-top-right absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-black ring-1 ring-white ring-opacity-5 focus:outline-none' >
                        <div className='py-1'>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                    className={classNames(
                                        active
                                            ? 'bg-gray-500 text-gray-100'
                                            : 'text-gray-200',
                                            'block px-4 py-2 text-sm'
                                    )}
                                    href="#"
                                    >
                                        My Account
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                    className={classNames(
                                        active
                                            ? 'bg-gray-500 text-gray-100'
                                            : 'text-gray-200',
                                            'block px-4 py-2 text-sm'
                                    )}
                                    href="#"
                                    >
                                    Support
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item disabled>
                                <span className="opacity-75 px-4 py-2">Invite a friend (coming soon!)</span>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
                </Menu>
            </div>
        </div>
        {/* Middle Section */}
        <div className='hidden md:flex grow-[2] items-center justify-center'>
            <div className='bg-gray-700 text-white flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded-2xl'>
                <div>
                   <input type="text" className='bg-transparent border-none text-white focus:outline-none' placeholder='Search'/> 
                </div>
                <div>
                    <BsSearch />
                </div>
            </div>
        </div>
        {/* Right Section */}
        <div className='hidden md:flex grow items-center justify-end'>
            <div className='flex items-center'>
                <Link href='/account'>
                    <button className='px-4 py-[6px] rounded-lg font-bold bg-teal-600 mr-2'>
                        Account
                    </button>
                </Link>
                <BsPerson size={30} />
            </div>
        </div>
        {/* Burger menu for mobile */}
            <div onClick={handleNav} className='block md:hidden z-10 cursor-pointer'>
                {
                    nav 
                    ? <IoCloseSharp size={25} />
                    : <IoMenu size={25} />
                     
                }
            </div>
        {/* The menu itself */}
        <div className={
            nav 
                ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-black flex justify-center items-center ease-in duration-300' 
                : 'md:hidden fixed top-[-100%] left-0 w-full h-screen bg-black flex justify-center items-center ease-in duration-300'
            }>
            <ul className='text-center'>
                <li className='p-4 text-3xl font-bold'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4 text-3xl font-bold'>
                    <Link href='/'>Subscriptions</Link>
                </li>
                <li className='p-4 text-3xl font-bold'>
                    <Link href='/'>Categories</Link>
                </li>
                <li className='p-4 text-3xl font-bold'>
                    <Link href='/account'>My Account</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar