import React from 'react'
import { channels, top_channels } from '../data/MOCK_DATA'
import { RiMovieLine } from 'react-icons/ri'
import Image from 'next/image'
import { BsDot } from 'react-icons/bs'

const SideMenu = () => {
  return (
    <div className='fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2 bg-[#0e0e10]'>
        <div>
            <p className='hidden xl:flex uppercase font-bold text-sm py-4 text-center'>Recommended Channels</p>
            <p>
                <RiMovieLine size={20} className='xl:hidden justify-center w-full' />
            </p>
        </div>
        {channels.map((item, index) => (
            <div key={index} className='inline-flex items-center w-full py-[2px]'>
                <div>
                    <Image src={item.avatar} width='50' height='50' alt={item.username} />
                </div>
                <div className='hidden xl:flex justify-between w-full'>
                <div>
                    <p>{item.username}</p>
                    <p className='text-gray-400'>{item.game_name}</p>
                </div>
                    <p className='flex items-center'>
                    <BsDot color='red' size={40} />
                {item.rank}K
                </p>
            </div>
            </div>    
        ))}
    </div>
  )
}

export default SideMenu