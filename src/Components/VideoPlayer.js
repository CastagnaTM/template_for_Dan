import React from 'react'

import ReactPlayer from 'react-player/lazy'

export default function VideoPlayer() {

    return (
        <ReactPlayer 
            url='https://www.youtube.com/watch?v=BS-oRydlnCE&ab_channel=BroScienceLife' 
            className='react-player'
            width='100%'
            height='100%'
            controls={true}
            />
    )
}