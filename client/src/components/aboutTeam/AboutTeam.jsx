import React from 'react'
import './aboutTeam.css'
export default function AboutTeam() {
	return (
		<div>
			<div className="aboutCompany">
				<div className='aboutUsContent'>
					<p className='contentUs'>О нашей команде</p>
					<div className='desc'>
						<p className='desc-title'>МЫ ГЕНИИ, СЛОВА ЛИШНИЕ</p>
						<p className='desc-text'>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. </p>
					</div>
					<div className="line"></div>

					<div className='resultsBlock'>
						<div className="results">
							<p className='number'>20</p>
							<p className='worker'>Преподователей</p>
						</div>
						<div className="results">
							<p className='number'>20</p>
							<p className='worker'>Преподователей</p>
						</div>
						<div className="results">
							<p className='number'>20</p>
							<p className='worker'>Преподователей</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
