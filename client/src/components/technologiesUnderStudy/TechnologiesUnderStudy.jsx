import React from 'react'

export default function TechnologiesUnderStudy({technology}) {

	const PF = process.env.REACT_APP_PUBLIC_FOLDER
	return (
		<div className="technologiesUnderStudy_example">
			<img src={PF + technology.img} alt="technologiesUnderStudy_devTools" className="technologiesUnderStudyImg" />
			<h2 className='technologiesUnderStudyText'>{technology.text}</h2>
		</div>
	)
}

 