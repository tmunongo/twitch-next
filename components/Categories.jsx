import React from 'react'
import CategoriesItem from './CategoriesItem'

const Categories = () => {
  return (
    <div id='categories' className='p-2 md:p-8'>
        <h2 className='text-xl font-bold px-8'>
            <span className='text-purple-300'>Categories </span>
            we think you&apos;ll like
        </h2>
        {/* Container */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 gap-2 py-2'>
            <CategoriesItem 
                img='https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg' 
                title='Just Chatting'
                viewers='438k'
                tag1='IRL'
            />
            <CategoriesItem 
                img='https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg' 
                title='VALORANT'
                viewers='121k'
                tag1='FPS'
                tag2='Shooter'
            />
            <CategoriesItem 
            img='https://static-cdn.jtvnw.net/ttv-boxart/512980-188x250.jpg' 
            title='Fall Guys'
            viewers='49.3k'
            tag1='Action'
            />
            <CategoriesItem 
                img='https://static-cdn.jtvnw.net/ttv-boxart/491931_IGDB-188x250.jpg' 
                title='Escape from Tar...'
                viewers='59.5k'
                tag1='Simulation'
            />
            <CategoriesItem 
                img='https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg' 
                title='League of Legends'
                viewers='59.5k'
                tag1='MOBA'
                tag2='Action'
            />
            <CategoriesItem 
                img='https://static-cdn.jtvnw.net/ttv-boxart/511224-188x250.jpg' 
                title='Apex Legends'
                viewers='59.5k'
                tag1='FPS'
                tag2='Shooter'
            />
        </div>
    </div>
  )
}

export default Categories