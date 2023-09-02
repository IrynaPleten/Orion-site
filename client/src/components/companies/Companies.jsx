import './companies.css'
import React from 'react'


export default function Companies() {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER
	return (
		<div className="companies">
				<div className="text">
					<h1>Компании</h1>
					<p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает 	 сосредоточиться.
					</p>
				</div>

					<div className='companies-block'>
						<div className="companies-logo">
							<div className="logoBlock">
								<img src={PF + 'img/companyLogo/silpo.svg'} alt="#" />
							</div>
							<div className='hr'></div>
							<div className="logoBlock">
								<img src={PF + 'img/companyLogo/monobank.svg'} alt="#" />
							</div>
							<div className='hr'></div>
							<div className="logoBlock">
								<img src={PF + 'img/companyLogo/silpo.svg'} alt="#" />
							</div>
							<div className='hr'></div>
							<div className="logoBlock">
								<img src={PF + 'img/companyLogo/monobank.svg'} alt="#" />
							</div>
							<div className='hr'></div>
							<div className="logoBlock">
								<img src={PF + 'img/companyLogo/silpo.svg'} alt="#" />
							</div>
							<div className='hr'></div>
							<div className="logoBlock">
								<img src={PF + 'img/companyLogo/monobank.svg'} alt="#" />
							</div>
						</div>

						<div className="companies-logo">
							<div className="logoBlock">
								<img src={PF + 'img/companyLogo/silpo.svg'} alt="#" />
							</div>
							<div className='hr'></div>
							<div className="logoBlock">
								<img src={PF + 'img/companyLogo/monobank.svg'} alt="#" />
							</div>
							<div className='hr'></div>
							<div className="logoBlock">
								<img src={PF + 'img/companyLogo/silpo.svg'} alt="#" />
							</div>
							<div className='hr'></div>
							<div className="logoBlock">
								<img src={PF + 'img/companyLogo/monobank.svg'} alt="#" />
							</div>
							<div className='hr'></div>
							<div className="logoBlock">
								<img src={PF + 'img/companyLogo/silpo.svg'} alt="#" />
							</div>
							<div className='hr'></div>
							<div className="logoBlock">
								<img src={PF + 'img/companyLogo/monobank.svg'} alt="#" />
							</div>
						</div>
					</div>
				</div>
	)
}
