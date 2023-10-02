import React, { useState } from 'react'
import f from './formQuestion.module.css'
import ModalQuestion from '../modalQuestion/ModalQuestion'

export default function FormQuestion() {
	const [activeModal, setActiveModal] = useState(false)
	return (
		<>
			<div className={f.form_questions}>
				<div className={f.questions_block}>
					<div className={f.diagonal_left}></div>
					<div className={f.diagonal_center}></div>

					<div className={f.question_content}>
						<p className={f.quest_str}>что ж</p>
						<p className={f.question_title}>Есть вопросы?</p>
						<p className={f.question_lorem}>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.  </p>
					</div>
					<button onClick={() => setActiveModal(true)}
					 className={f.btn}>Задать нам вопросы</button>
				</div>
			</div>
			<ModalQuestion active={activeModal} setActive={setActiveModal}/>
		</>
		
	)
}