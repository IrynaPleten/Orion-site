import './header.css'
import React, { useState } from 'react'


import ModalWindow from '../modalWindow/ModalWindow'
import { Link } from 'react-router-dom'

export default function Header() {

	const PF = process.env.REACT_APP_PUBLIC_FOLDER

	const [modalActive, setModalActive] = useState(false)
	return (
		<div className='header-block'>
				
			<div className="background">
				<img src={PF + 'img/background.svg'} alt="#" />
			</div>
				
			<div className='header'>
				<Link to='/'>
					<img src={PF + 'img/logo.svg'} alt="#" />
				</Link>
				
				<ul className='menu'>
					<Link to='/'>
						<li>Главная</li>
					</Link>
					<Link to='/courses'>
						<li>Курсы</li>
					</Link>
					<Link to='/'>
						<li>Контакты</li>
					</Link>
					
				</ul>
				<button onClick={() => setModalActive(true)}
				className='hed-button' type='submit'>Записаться</button>
			</div>
			<ModalWindow active={modalActive} setActive={setModalActive}/>
		</div>
	)
}
