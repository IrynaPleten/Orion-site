import './reviews.css'

import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


export default class Reviews extends React.Component {
	
	render() {
		const settings = {
			dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
			className: 'slider',
		};

		const PF = process.env.REACT_APP_PUBLIC_FOLDER
	return (

		<div className="reviews">
					<div className="review-text">
						<h1>Отзывы</h1>
						<p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</p>
					</div>

							<Slider {...settings}>
								<div className='block-slider'>
									<div className="review-block">
										<img src={PF + 'img/ava/ava-user.svg'} alt="#" />
										<div className='review-text'>
											<h1>Кирилл</h1>
											<p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. </p>
										</div>
									</div>
								</div>
							
								<div>
									<div className="review-block">
										<img src={PF + 'img/ava/ava-user.svg'} alt="#" />
										<div className='review-text'>
											<h1>Кирилл</h1>
											<p>Давно выяснено, что при оценке дизайна и композиции</p>
										</div>
									</div>
								</div>
							
								<div>
									<div className="review-block">
										<img src={PF + 'img/ava/ava-user.svg'} alt="#" />
										<div className='review-text'>
											<h1>Кирилл</h1>
											<p>Давно выяснено, что при оценке дизайна и композиции</p>
										</div>
									</div>
								</div>
							
								<div>
									<div className="review-block">
										<img src={PF + 'img/ava/ava-user.svg'} alt="#" />
										<div className='review-text'>
											<h1>Кирилл</h1>
											<p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Давно выяснено, что при</p>
										</div>
									</div>
								</div>
							
							</Slider>	
							
					
				<button className='btn-review'>Добавить отзыв
					<img src={PF + 'img/ava/arrow-right.svg'} alt="#" />
				</button>
			</div>
	)
	}
}
