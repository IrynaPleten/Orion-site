import React from 'react'
import a from './aboutTeam.module.css'
export default function AboutTeam() {
	return (
		<div>
			<div className={a.aboutCompany}>
				<div className={a.aboutUsContent}>
					<p className={a.contentUs}>О нашей команде</p>
					<div className={a.desc}>
						<p className={a.desc_title}>МЫ ГЕНИИ, СЛОВА ЛИШНИЕ</p>
						<p className={a.desc_text}>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. </p>
					</div>
					<div className={a.line}></div>

					<div className={a.resultsBlock}>
						<div className={a.results}>
							<p className={a.number}>20</p>
							<p className={a.worker}>Преподователей</p>
						</div>
						<div className={a.results}>
							<p className={a.number}>20</p>
							<p className={a.worker}>Преподователей</p>
						</div>
						<div className={a.results}>
							<p className={a.number}>20</p>
							<p className={a.worker}>Преподователей</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
