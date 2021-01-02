import React from 'react'

import ReactPlayer from 'react-player/lazy'

export default function VideoPlayer() {

    return (
        <ReactPlayer 
            url='https://www.youtube.com/watch?v=WplLgkM4qck&feature=youtu.be&ab_channel=Dan%27sUnforgettableCreations' 
            className='react-player'
            width='100%'
            height='100%'
            controls={true}
            style={{display: 'inline-block', padding: window.innerWidth > 1200 ? '8%' : '0'}}
            />
    )
}