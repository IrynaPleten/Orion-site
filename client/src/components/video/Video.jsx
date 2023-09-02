import React from 'react'
import './video.css'

export default function Video() {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER
	return (
		<div className="video">
				<h1>Видосы</h1>

					<div className='clip-wrap'>
						<button className='arrow-clip right'></button>
						<div className="video-block">
							<video className='clip' src={PF + 'video/video1.mp4'} controls poster={PF + 'img/videoBackground.png'}>
							</video>
						</div>
						<button className='arrow-clip left'></button>
						<div className='filter'></div>
						
					</div>
		</div>
	)
}
