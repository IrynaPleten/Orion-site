import React from 'react'
import './video.css'
import clip from '../../video/video1.mp4'

export default function Video() {
	return (
		<div className="video">
				<h1>Видосы</h1>

					<div className='clip-wrap'>
						<button className='arrow-clip right'></button>
						<div className="video-block">
							<video className='clip' src={clip} preload='auto'></video>
						</div>
						<button className='arrow-clip left'></button>
						<div className='filter'></div>
						
					</div>
			</div>
	)
}
