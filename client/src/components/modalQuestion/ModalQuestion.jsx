import React from 'react'
import './modalQuestion.css'

export default function ModalQuestion({active, setActive}) {
	return (
		<>
			<div className={active ? 'window-question active' : 'window-question'}
			 onClick={() => setActive(false)}>
				<div className={active ? 'window-content active' : 'window-content'}
					onClick={e => e.stopPropagation()}>
					<button onClick={() => setActive(false)}
					className='window-question-close'></button>
					<h1>Задайте нам вопросы</h1>
					<p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</p>
					<div className="wrap-text">
						<input className='input-name' type="text" placeholder='Enter your name'/>
						<input className='input-number' type="number" placeholder='Ваш телефон'/>
						<textarea className='textarea'
						 name="textarea" wrap='hard' cols={70} rows={10} placeholder='Текст ваш'></textarea>
						 <button className='submit-question'>Записаться</button>
					</div>
				</div>

			</div>
		</>
		
	)
}
