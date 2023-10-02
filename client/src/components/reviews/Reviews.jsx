import React from 'react'
import Slider from 'react-slick'
import './slick-theme.css'
import './slick.css'
import './Slider.css'


function SampleNextArrow(props) {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{ ...style, display: 'block' }}
			onClick={onClick}
		/>
	)
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{ ...style, display: 'block' }}
			onClick={onClick}
		/>
	)
}

export default class SimpleSlider extends React.Component {
	render() {
		const settings = {
			dots: false,
			infinite: true,
			autoplay: true,
			speed: 1000,
			autoplaySpeed: 5000,
			slidesToShow: 3,
			slidesToScroll: 1,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			className: 'Slider wow fadeIn',
		}
		const PF = process.env.REACT_APP_PUBLIC_FOLDER
		return (
			<div className='reviews'>
					<div className='review_text'>
						<h1>Отзывы</h1>
						<p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</p>
					</div>
				<Slider {...settings}>
						<div>
								<div className='review_block'>
									<img src={PF + 'img/ava/ava-user.svg'} alt="#" />
									<div className='review_text'>
										<h1>Кирилл</h1>
										<p>Давно выяснено, что при оценке дизайна и композиции</p>
									</div>
								</div>
							</div>
							<div>
									<div className='review_block'>
										<img src={PF + 'img/ava/ava-user.svg'} alt="#" />
										<div className='review_text'>
											<h1>Кирилл</h1>
											<p>Давно выяснено, что при оценке дизайна и композиции</p>
										</div>
									</div>
							</div>
							<div>
								<div className='review_block'>
										<img src={PF + 'img/ava/ava-user.svg'} alt="#" />
										<div className='review_text'>
											<h1>Кирилл</h1>
											<p>Давно выяснено, что при оценке дизайна и композиции</p>
										</div>
									</div>
							</div>
							<div>
								<div className='review_block'>
										<img src={PF + 'img/ava/ava-user.svg'} alt="#" />
										<div className='review_text'>
											<h1>Кирилл</h1>
											<p>Давно выяснено, что при оценке дизайна и композиции</p>
										</div>
									</div>
							</div>
				</Slider>
			</div>
		)
	}
}

