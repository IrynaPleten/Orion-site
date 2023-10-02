import h from './header.module.css'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'


import ModalWindow from '../modalWindow/ModalWindow'

export default function Header() {
	const [modalActive, setModalActive] = useState(false)

	const PF = process.env.REACT_APP_PUBLIC_FOLDER
	return (
		<div className={h.header_block}>
				
			<div className={h.background}>
				<img src={PF + 'img/background.svg'} alt="#" />
			</div>
				
			<div className={h.header}>
				<img src={PF + 'img/logo.svg'} alt="#" />
				<nav className={h.menu}>
					<Link className={h.link} to="/">Главная</Link>
					<Link className={h.link} to="/courses">Курсы</Link>
					<Link className={h.link} to="/contacts">Контакты</Link>
				</nav>
				<button onClick={() => setModalActive(true)}
				className={h.btn} type='submit'>Записаться</button>
			</div>
			<ModalWindow active={modalActive} setActive={setModalActive}/>
		</div>
	)
}