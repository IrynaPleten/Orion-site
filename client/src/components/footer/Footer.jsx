import './footer.css'
import React from 'react'

import logo from '../../img/logo.svg'
import insta from '../../img/social-network/instagram.svg'
import google from '../../img/social-network/google.svg'
import phone from '../../img/social-network/phone.svg'

export default function Footer() {
	return (
		<div className='footer'>
			<hr />

			<div className="footer-blocks">
				<div className='privacy'>
					<img className='logo' src={logo} alt="" />
					<p className='about-privacy'>Все права защищены</p>
					<p className='about-privacy'>Политика коеффф</p>
				</div>
				<p className='motto'>Авторские курсы от лучших специалистов</p>

				<div className="footer-contact">
					<div className='social-network'>
						<a href='/'>
							<img src={insta} alt="#" />
						</a>
						<a href='/'>
							<img src={google} alt="#" />
						</a>
						<a href='/'>
							<img src={phone} alt="#" />
						</a>
					</div>
					<a className='number' href='/'> +380 95 555 55 55</a>
					<a className='email' href='/'> Itishka@gmail.com</a>
				</div>
			</div>
		</div>
	)
}
