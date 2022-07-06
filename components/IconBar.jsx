import React from 'react'
import Remote from '../public/assets/remote.png'
import HeadPhones from '../public/assets/headphones.png'
import Mic from '../public/assets/mic.png'
import Paint from '../public/assets/paint.png'
import Trophy from '../public/assets/trophy.png'
import Image from 'next/image'

const IconBar = () => {
  return (
    <div className='p-2 md:p-8'>
        {/* COntainer */}
        <div className='grid sm:grid-cols-3 lg:grid-cols-5 gap-4 border-gray-500 py-8'>
            {/* games button */}
            <div className='flex w-full h-[50px] bg-purple-400 justify-between items-center px-4 rounded'>
                <p className='text-2xl font-bold'>Games</p>
                <Image src={Remote} alt='remote' />
            </div>
            {/* IRL button */}
            <div className='flex w-full h-[50px] bg-purple-400 justify-between items-center px-4 rounded'>
                <p className='text-2xl font-bold'>IRL</p>
                <Image src={Mic} alt='remote' />
            </div>
            {/* Music button */}
            <div className='flex w-full h-[50px] bg-purple-400 justify-between items-center px-4 rounded'>
                <p className='text-2xl font-bold'>Music</p>
                <Image src={HeadPhones} alt='remote' />
            </div>
            {/* esports button */}
            <div className='flex w-full h-[50px] bg-purple-400 justify-between items-center px-4 rounded'>
                <p className='text-2xl font-bold'>Esports</p>
                <Image src={Trophy} alt='remote' />
            </div>
            {/* creative button */}
            <div className='flex w-full h-[50px] bg-purple-400 justify-between items-center px-4 rounded'>
                <p className='text-2xl font-bold'>Creative</p>
                <Image src={Paint} alt='remote' />
            </div>
        </div>
    </div>
  )
}

export default IconBar