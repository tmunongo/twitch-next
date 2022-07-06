import React from 'react'

const Banner = () => {
  return (
    <div id='banner' className='p-2 md:p-8'>
        <div className='relative overflow-hidden w-full pt-[56.25%]'>
            <iframe 
                className='absolute top-0 left-0 right-0 bottom-0 w-full h-full'
                src="https://www.youtube-nocookie.com/embed/drd99YmyChU" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                >
            </iframe>
        </div>
    </div>
  )
}

export default Banner