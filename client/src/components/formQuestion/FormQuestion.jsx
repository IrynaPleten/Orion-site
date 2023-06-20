import React, { useState } from 'react'
import './formQuestion.css'
import ModalQuestion from '../modalQuestion/ModalQuestion'

export default function FormQuestion() {
	const [activeModal, setActiveModal] = useState(false)
	return (
		<>
			<div className="form-questions">
				<div className="questions-block">
					<div className="diagonal-left"></div>
					<div className="diagonal-center"></div>

					<div className="question-content">
						<p className='quest-str'>что ж</p>
						<p className='question-title'>Есть вопросы?</p>
						<p className='question-lorem'>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.  </p>
					</div>
					<button onClick={() => setActiveModal(true)}
					 className='question-btn'>Задать нам вопросы</button>
				</div>
			</div>
			<ModalQuestion active={activeModal} setActive={setActiveModal}/>
		</>
		
	)
}
