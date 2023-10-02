import Header from '../../components/header/Header'
import s from './home.module.css'


import React from 'react'

import Footer from '../../components/footer/Footer'
import CourseBlock from '../../components/courseBlocks/CourseBlock'
import Video from '../../components/video/Video'
import Companies from '../../components/companies/Companies'
import FormQuestion from '../../components/formQuestion/FormQuestion'
import Navigate from '../../components/navigate/Navigate'
import AboutTeam from '../../components/aboutTeam/AboutTeam'
import {motion} from 'framer-motion'
import { CourseDesk } from '../../helpers/dummyDates'
import Reviews from '../../components/reviews/Reviews'

export const Home = () => {
	const animation = {
		hidden: {
			y: 100,
			opacity: 0,
		},
		visible: custom => ({
			y: 0,
			opacity: 1,
			transition: {delay: custom * 0.1},
			speed: 0.5
		}),
	}
	const animationP = {
		hidden: {
			transform: 0,
			opacity: 0,
		},
		visible: {
			transform: 1,
			opacity: 1,
		}
	}
	const PF = process.env.REACT_APP_PUBLIC_FOLDER
	return (
		<>
			<Header/>

			<div className={s.slider}>
				<div className={s.poster}>
					<div className={s.titles}>
						<p className={s.title}>Авторские курсы</p>
						<h1>Фантастические курсы по IT</h1>
						<p className={s.about}>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. </p>

						<div className={s.input}>
						<input className={s.numberPhone} type="number" placeholder='Ваш телефон' />
						<button className={s.phone_btn} type='submit'>Перезвонить мне</button>
						</div>
					</div>
					<img className={s.photo} src={PF + 'img/macbook.svg'} alt="#" />
				</div>
			</div>

				<Navigate/>
				<motion.div 
       initial='hidden' whileInView={'visible'}
       className="ourCourses" id='allBlock'>
         <div className='background-wave'>
           <img src='assets/img/courses/wave.svg' alt="#" />
         </div>
       <motion.h2 initial='hidden' whileInView={'visible'} variants={animationP} 
         viewport={{ once: true}} custom={1}
         className='ourCoursesTitle'>Наши курсы</motion.h2>
         <motion.div initial='hidden' whileInView={'visible'}
           className="ourCoursesList">
						{CourseDesk.map((c, index) => <CourseBlock course={c} key={index} index={c.title} /> )}
					 </motion.div>
					
				</motion.div> 
				<AboutTeam/>
				<Companies/>
				<Reviews/>
				 <Video/>
				<FormQuestion/>
			<Footer/> 
		</>
	)
}
