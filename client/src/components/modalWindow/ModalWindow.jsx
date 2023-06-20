import './modalWindow.css'

import React, { useState } from 'react'

export default function ModalWindow({active, setActive}) {
	// const constructor = (props) => {
	// 	super(props);
  //   this.state = {value: 'choose'};

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
	// }
	// const handleChange = (event) => {
	// 	this.setState({value: event.target.value});
	// }

	return (
		<div className={active ? 'window active' : 'window'}
			onClick={() => setActive(false)}>

			<div className="modal-content" onClick={e => e.stopPropagation()}>

				<button onClick={() => setActive(false)} className='close'></button>
				<div className="modal-inform">
					<h1>Записаться на курс</h1>
					<p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</p>
					<div className="inputs">
						<div className='input-block'>
							<input className='input-info' type="text" placeholder='Enter your name' />
							<input className='input-info' type="number" placeholder='Ваш телефон'/>

							<div className="choose-block">
								<select
								className='course-menu'>
									<option value='choose'>Выбирете курс</option>
									<option value='smm'>SMM</option>
									<option value='frontend'>Frontend</option>
									<option value='backend'>Backend</option>
									<option value='python'>Python</option>
								</select>
								<button className='open-list'></button>
								<button className='submit-btn'>Записаться</button>
							</div>
						</div>			
					</div>
				</div>
			
			</div>

		</div>

	)
}
