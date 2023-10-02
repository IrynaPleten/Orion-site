import { Divider } from '@mui/material'
import './courses.css'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import Header from '../../components/header/Header';
import CourseBlock from '../../components/courseBlocks/CourseBlock';
import Navigate from '../../components/navigate/Navigate';
import AboutTeam from '../../components/aboutTeam/AboutTeam';
import Reviews from '../../components/reviews/Reviews'

import Footer from '../../components/footer/Footer';
import FormQuestion from '../../components/formQuestion/FormQuestion';
import { CourseDesk } from '../../helpers/dummyDates.js';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import ModalQuestion from '../../components/modalQuestion/ModalQuestion';
import React, { useState } from 'react'

export const Courses =() => {

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

	const [activeModal, setActiveModal] = useState(false)
	
	return (
		<div>
			<Header/>
			<div className="nearestCourse">
				<div className="aboutCourse">
					<div className="information">
						<h2 className="author">Авторские курсы</h2>
						<h1 className="allCourses">ВСЕ НАШИ КУРСЫ</h1>
						<p className="corsesDescription">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. </p>
					</div>
					<div className="coursesTimeCost">
						<div className="timeOfCourse">
							<img src='assets/img/icons/clock.svg' alt="clock" className='courseTimeIcon'/>
							<div className='courseTimeText'>
								<p className="courseTimeTitle">Время</p>
								<p className="courseTimeTable">{CourseDesk[0].time}</p>
							</div>
						</div>
						<div className="coursePayment">
							<img src='assets/img/icons/money.svg' alt="money" className='coursePayment'/>
							<div className='coursePaymentText'>
								<p className="coursePaymentTitle">Оплата</p>
								<p className="coursePaymentOpportunities">Можно по частям</p>
							</div>
						</div>
					</div>
				</div>
				
				<div className="courseBox">
					<h2 className="courseBoxTitle">Ближайшей курсы</h2>
					<div className="nearestCoursesInformation">
						<div className="detailsOfNearestCourse">
							<div className="nearestCourseName">
								<p className="nearestCourseNameTitle">Название курса:</p>
								<h2 className="nearestCourseText">{CourseDesk[0].title}</h2>
							</div>
							<div className="nearestCoursesStatus">
								<p className="nearestCourseStatusTitle">Старт курса:</p>
								<h2 className="nearestCourseDateOfStart">{CourseDesk[0].startAt}</h2>
							</div>
						</div>
						<Divider className='divider'/>
						<div className="numberOfFreePlaces">
							<PersonOutlineOutlinedIcon className='freePlacesIcon'/>
							<p className="freePlaces">Осталось {CourseDesk[0].freePlaces}</p>
						</div>
						<Link to="/course/QA"><button className="moreDetails">Подробнее</button></Link>

						
					</div>
					<button className="askQuestion" onClick={() => setActiveModal(true)}>Задать нам вопрос</button>
					<ModalQuestion active={activeModal} setActive={setActiveModal}/>
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
			<Reviews/>
			<FormQuestion/>
			<Footer/>
		</div>
	)
}

