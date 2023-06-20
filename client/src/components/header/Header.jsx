import './header.css'
import React, { useState } from 'react'

import background from '../../img/background.svg'
import logo from '../../img/logo.svg'
import ModalWindow from '../modalWindow/ModalWindow'

export default function Header() {
	const [modalActive, setModalActive] = useState(false)
	return (
		<div className='header-block'>
				
			<div className="background">
				<img src={background} alt="#" />
			</div>
				
			<div className='header'>
				<img src={logo} alt="#" />
				<ul className='menu'>
					<li>Главная</li>
					<li>Курсы</li>
					<li>Контакты</li>
				</ul>
				<button onClick={() => setModalActive(true)}
				className='hed-button' type='submit'>Записаться</button>
			</div>
			<ModalWindow active={modalActive} setActive={setModalActive}/>
		</div>
	)
}
