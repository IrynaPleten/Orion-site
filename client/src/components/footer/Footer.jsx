import './footer.css'
import React from 'react'

export default function Footer() {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER

	return (
		<div className='footer'>
			<hr />

			<div className="footer-blocks">
				<div className='privacy'>
					<img className='logo' src={PF + 'img/logo.svg'} alt="" />
					<p className='about-privacy'>Все права защищены</p>
					<p className='about-privacy'>Политика коеффф</p>
				</div>
				<p className='motto'>Авторские курсы от лучших специалистов</p>

				<div className="footer-contact">
					<div className='social-network'>
						<a href='/'>
							<img src={PF + 'img/social-network/instagram.svg'} alt="#" />
						</a>
						<a href='/'>
							<img src={PF + 'img/social-network/google.svg'} alt="#" />
						</a>
						<a href='/'>
							<img src={PF + 'img/social-network/phone.svg'} alt="#" />
						</a>
					</div>
					<a className='number' href='/'> +380 95 555 55 55</a>
					<a className='email' href='/'> Itishka@gmail.com</a>
				</div>
			</div>
		</div>
	)
}
