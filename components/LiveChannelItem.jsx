import Image from 'next/image'
import React from 'react'

const LiveChannelItem = ({img, avatar, title, user, game}) => {
  return (
    <div className='p-2'>
        <Image src={img} alt='stream' />
        <div className='flex pt-2'>
            <div className='pr-2'>
                <Image src={avatar} alt='avatar' width={60} height={60} className='rounded-full' />
            </div>
            <div>
                <p className='text-sm font-bold'>{title}</p>
                <p className='text-sm text-gray-400'>{user}</p>
                <p className='text-sm text-gray-400'>{game}</p>
            </div>
        </div>
    </div>
  )
}

export default LiveChannelItem