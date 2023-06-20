import './companies.css'
import React from 'react'
import silpo from '../../img/companyLogo/silpo.svg'
import monobank from '../../img/companyLogo/monobank.svg'

export default function Companies() {
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
								<img src={silpo} alt="#" />
							</div>
							<div className='hr'></div>
							<div className="logoBlock">
								<img src={monobank} alt="#" />
							</div>
							<div className='hr'></div>
							<div className="logoBlock">
								<img src={silpo} alt="#" />
							</div>
							<div className='hr'></div>
							<div className="logoBlock">
								<img src={monobank} alt="#" />
							</div>
							<div className='hr'></div>
							<div className="logoBlock">
								<img src={silpo} alt="#" />
							</div>
							<div className='hr'></div>
							<div className="logoBlock">
								<img src={monobank} alt="#" />
							</div>
						</div>

						<div className="companies-logo">
							<div className="logoBlock">
								<img src={silpo} alt="#" />
							</div>
							<div className='hr'></div>
							<div className="logoBlock">
								<img src={monobank} alt="#" />
							</div>
							<div className='hr'></div>
							<div className="logoBlock">
								<img src={silpo} alt="#" />
							</div>
							<div className='hr'></div>
							<div className="logoBlock">
								<img src={monobank} alt="#" />
							</div>
							<div className='hr'></div>
							<div className="logoBlock">
								<img src={silpo} alt="#" />
							</div>
							<div className='hr'></div>
							<div className="logoBlock">
								<img src={monobank} alt="#" />
							</div>
						</div>
					</div>
				</div>
	)
}
