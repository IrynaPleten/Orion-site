import React from 'react'
import cont from './contacts.module.css'
import Header from '../../components/header/Header'

import Footer from '../../components/footer/Footer'

export const Contacts = () => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER
	return (
		<>
			<Header/>
			<div className={cont.contact_wrap}>
				<div className={cont.contact_text}>
					<div className={cont.information}>
						<h2 className={cont.author}>Авторские курсы</h2>
						<h1 className={cont.allCourses}>КОНТАКТЫ</h1>
						<p className={cont.corsesDescription}>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. </p>
					</div>
					<div className={cont.toConnect}>
						<div className={cont.address}>
							<img src={PF + 'img/contact/email.svg'} alt="email" className={cont.emailIcon}/>
							<div className={cont.addressText}>
								<p className={cont.addressTitle}>Email:</p>
								<p className={cont.full}>FFF@gmail.com</p>
							</div>
						</div>
						<div className={cont.number_phone}>
							<img src={PF + 'img/contact/call.svg'} alt="phone" className={cont.phoneIcon}/>
							<div className={cont.numberText}>
								<p className={cont.numberTitle}>Телефон:</p>
								<p className={cont.full}>+380 68 786 2835</p>
							</div>
						</div>
					</div>
				</div>
				<div className={cont.feedBack}>
					<h2 className={cont.title_form}>Обратная связь</h2>
					
					<div className={cont.input_wrap}>
						<input type="text" className={cont.name} placeholder='Enter your name'/>
						<input type="number" className={cont.numberPhone} placeholder='Enter your phone'/>
						<textarea className={cont.textarea_feedBack} wrap='hard' cols="25" rows="5" placeholder='Your Text'></textarea>
					</div>
					<button type='submit'	className={cont.btn}>Отправить нам</button>
				</div>
			</div>
			<Footer/>
		</>
	)
}
