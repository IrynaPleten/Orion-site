import Header from '../../components/header/Header'
import './home.css'

import macbook from '../../img/macbook.svg'

import React from 'react'

import Footer from '../../components/footer/Footer'
import CourseBlock from '../../components/courseBlocks/CourseBlock'
import Reviews from '../../components/reviews/Reviews'
import Video from '../../components/video/Video'
import Companies from '../../components/companies/Companies'
import FormQuestion from '../../components/formQuestion/FormQuestion'
import Navigate from '../../components/navigate/Navigate'
import AboutTeam from '../../components/aboutTeam/AboutTeam'


export const Home = () => {
	return (
		<>
			<Header/>

			<div className="slider">
				<div className='poster'>
					<div className="titles">
						<p className='title'>Авторские курсы</p>
						<h1>Фантастические курсы по IT</h1>
						<p className='about'>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. </p>

						<div className='input'>
						<input className='numberPhone' type="number" placeholder='Ваш телефон' />
						<button className='phone-btn' type='submit'>Перезвонить мне</button>
						</div>
					</div>
					<img className='photo' src={macbook} alt="#" />
				</div>
			</div>

				<Navigate/>
				<CourseBlock/>

			
				<AboutTeam/>
				<Companies/>
				<Reviews/>
				<Video/>
				<FormQuestion/>
			<Footer/>
		</>
	)
}
