import React from 'react'
import LiveChannelItem from './LiveChannelItem'
import Live1 from '../public/assets/live/live1.jpeg'
import Live2 from '../public/assets/live/live2.jpeg'
import Live3 from '../public/assets/live/live3.jpeg'
import Live4 from '../public/assets/live/live4.jpeg'
import Live5 from '../public/assets/live/live5.jpeg'
import Live6 from '../public/assets/live/live6.jpeg'
import Live7 from '../public/assets/live/live7.jpeg'
import Live8 from '../public/assets/live/live8.jpeg'
import Live9 from '../public/assets/live/live9.jpeg'
import Live10 from '../public/assets/live/live10.jpeg'


const LiveChannels = () => {
  return (
    <div className='p-2 md:p-8'>
        <h2 className='text-xl font-bold px-8'>
            <span className='text-purple-300'>Live Channels </span>
            we&apos;ve put together for you
        </h2>
        {/* body */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2'>
            <LiveChannelItem 
                img={Live3} 
                avatar='https://static-cdn.jtvnw.net/previews-ttv/live_user_snuffy-440x248.jpg'
                title='FOR THE PLANET! Any support is ap...'
                user='Fermi'
                game='Smash Hit'
            />
            <LiveChannelItem 
                img={Live10} 
                avatar='https://static-cdn.jtvnw.net/previews-ttv/live_user_snuffy-440x248.jpg'
                title='FOR THE PLANET! Any support is ap...'
                user='Fermi'
                game='Smash Hit'
            />
            <LiveChannelItem 
                img={Live6} 
                avatar='https://static-cdn.jtvnw.net/previews-ttv/live_user_snuffy-440x248.jpg'
                title='FOR THE PLANET! Any support is ap...'
                user='Fermi'
                game='Smash Hit'
            />
            <LiveChannelItem 
                img={Live8} 
                avatar='https://static-cdn.jtvnw.net/previews-ttv/live_user_snuffy-440x248.jpg'
                title='FOR THE PLANET! Any support is ap...'
                user='Fermi'
                game='Smash Hit'
            />
            <LiveChannelItem 
                img={Live4} 
                avatar='https://static-cdn.jtvnw.net/previews-ttv/live_user_snuffy-440x248.jpg'
                title='FOR THE PLANET! Any support is ap...'
                user='Fermi'
                game='Smash Hit'
            />
            <LiveChannelItem 
                img={Live5} 
                avatar='https://static-cdn.jtvnw.net/previews-ttv/live_user_snuffy-440x248.jpg'
                title='FOR THE PLANET! Any support is ap...'
                user='Fermi'
                game='Smash Hit'
            />
            <LiveChannelItem 
                img={Live2} 
                avatar='https://static-cdn.jtvnw.net/previews-ttv/live_user_snuffy-440x248.jpg'
                title='FOR THE PLANET! Any support is ap...'
                user='Fermi'
                game='Smash Hit'
            />
            <LiveChannelItem 
                img={Live1} 
                avatar='https://static-cdn.jtvnw.net/previews-ttv/live_user_snuffy-440x248.jpg'
                title='FOR THE PLANET! Any support is ap...'
                user='Fermi'
                game='Smash Hit'
            />
            <LiveChannelItem 
                img={Live7} 
                avatar='https://static-cdn.jtvnw.net/previews-ttv/live_user_snuffy-440x248.jpg'
                title='FOR THE PLANET! Any support is ap...'
                user='Fermi'
                game='Smash Hit'
            />
            <LiveChannelItem 
                img={Live9} 
                avatar='https://static-cdn.jtvnw.net/previews-ttv/live_user_snuffy-440x248.jpg'
                title='FOR THE PLANET! Any support is ap...'
                user='Fermi'
                game='Smash Hit'
            />
            <LiveChannelItem 
                img={Live5} 
                avatar='https://static-cdn.jtvnw.net/previews-ttv/live_user_snuffy-440x248.jpg'
                title='FOR THE PLANET! Any support is ap...'
                user='Fermi'
                game='Smash Hit'
            />
            <LiveChannelItem 
                img={Live10} 
                avatar='https://static-cdn.jtvnw.net/previews-ttv/live_user_snuffy-440x248.jpg'
                title='FOR THE PLANET! Any support is ap...'
                user='Fermi'
                game='Smash Hit'
            />
        </div>
    </div>
  )
}

export default LiveChannels