import React from 'react'

import ReactPlayer from 'react-player/lazy'

export default function VideoPlayer() {

    return (
        <ReactPlayer 
            url='https://www.dailymotion.com/video/x7ygcbd'
            className='react-player'
            width='100%'
            height='100%'
            controls={true}
            playing={true}
            muted={true}
            style={{display: 'inline-block', padding: window.innerWidth > 1200 ? '8%' : '0'}}
            config={{
                dailymotion: {
                    params: {
                        "queue-autoplay-next": false,
                        "queue-enable": false,
                    }
                }
            }}
            />
    )
}