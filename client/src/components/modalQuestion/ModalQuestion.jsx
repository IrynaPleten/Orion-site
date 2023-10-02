import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './modalQuestion.css'

export default function ModalQuestion({active, setActive}) {

	const form = useRef()
	const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zg16x5i', 'template_qh4ewo4', e.target, 'DloV1cm50ByneRkqB')
      .then((result) => {
          console.log(result.text);
      }, () => {
          console.log('error');
      });
			e.target.reset()
  };
	return (
		<>
			<div className={active ? 'window-question active' : 'window-question'}
			 onClick={() => setActive(false)}>
				<div ref={form} onSubmit={sendEmail}
					className={active ? 'window-content active' : 'window-content'}
					onClick={e => e.stopPropagation()}>
					<button onClick={() => setActive(false)}
					className='window-question-close'></button>
					<h1>Задайте нам вопросы</h1>
					<p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</p>
					<div className="wrap-text">
						<input className='input-name' name='user_email' type="email" placeholder='Enter your name'/>
						<input className='input-number' name='user_number' type="tel" placeholder='Ваш телефон'/>
						<textarea className='textarea'
						 name="textarea" wrap='hard' cols={70} rows={10} placeholder='Текст ваш'></textarea>
						 <button type='submit' className='submit-question'>Записаться</button>
					</div>
				</div>

			</div>
		</>
		
	)
}