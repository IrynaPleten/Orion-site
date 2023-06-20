import React, { useState } from 'react'
import './courseBlock.css'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import wave from '../../img/courses/wave.svg'


import {motion} from 'framer-motion'

export default function CourseBlock() {

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
	
	return (

		<motion.div 
				initial='hidden' whileInView={'visible'}
				className="ourCourses" id='allBlock'>
					<div className='background-wave'>
						<img src={wave} alt="#" />
					</div>
				<motion.h2 initial='hidden' whileInView={'visible'} variants={animationP} 
					viewport={{ once: true}} custom={1}
					className='ourCoursesTitle'>Наши курсы</motion.h2>
					<motion.div initial='hidden' whileInView={'visible'}
						className="ourCoursesList">

						<motion.div initial='hidden' whileInView={'visible'} variants=			{animation} viewport={{ once: true}} custom={2}
							className="ourCourse">
							<div className="borderCircle">
								<div className="colorCircle color1">
									<h3 className='courseName'>QA</h3>
								</div>
							</div>
							<p className='courseDescription'>Специальность от А до Я</p>
							<ExpandMoreOutlinedIcon className='moreAboutCourseIcon'/>

							<div className="informAboutCourse">
								<div className="informTextData">
									<div className="informText">
										<p className="startAtText">Скорый Старт:</p>
										<p className="courseDurationText">Длительность:</p>
										<p className="courseCostText">Стоимость:</p>
									</div>
									<div className="informData">
										<p className="startAtDate">20 ноября</p>
										<p className="numberOfLessons">8 занятий</p>
										<p className="costOfCourse">4 000 грн</p>
									</div>
								</div>
								
								<button className="moreAboutCourse">Подробнее</button>
								<p className="statusOfRecrut">Идет набор студентов</p>
							</div>
						</motion.div>

						<motion.div initial='hidden' whileInView={'visible'} variants=			{animation} viewport={{ once: true}} custom={2}
						className="ourCourse">
							<div className="borderCircle">
								<div className="colorCircle color2" id='container'>
									<h3 className='courseName' id='text'>Front end</h3>
								</div>
							</div>
							<p className='courseDescription'>Специальность от А до Я</p>
							<ExpandMoreOutlinedIcon className='moreAboutCourseIcon'/>

							<div className="informAboutCourse">
								<div className="informTextData">
									<div className="informText">
										<p className="startAtText">Скорый Старт:</p>
										<p className="courseDurationText">Длительность:</p>
										<p className="courseCostText">Стоимость:</p>
									</div>
									<div className="informData">
										<p className="startAtDate">20 ноября</p>
										<p className="numberOfLessons">8 занятий</p>
										<p className="costOfCourse">4 000 грн</p>
									</div>
								</div>
								
								<button className="moreAboutCourse">Подробнее</button>
								<p className="statusOfRecrut">Идет набор студентов</p>
							</div>
						</motion.div>

						<motion.div initial='hidden' whileInView={'visible'} variants=			{animation} viewport={{ once: true}} custom={2}
						className="ourCourse">
							<div className="borderCircle">
								<div className="colorCircle color3">
									<h3 className='courseName'>QA</h3>
								</div>
							</div>
							<p className='courseDescription'>Специальность от А до Я</p>
							<ExpandMoreOutlinedIcon className='moreAboutCourseIcon'/>

							<div className="informAboutCourse">
								<div className="informTextData">
									<div className="informText">
										<p className="startAtText">Скорый Старт:</p>
										<p className="courseDurationText">Длительность:</p>
										<p className="courseCostText">Стоимость:</p>
									</div>
									<div className="informData">
										<p className="startAtDate">20 ноября</p>
										<p className="numberOfLessons">8 занятий</p>
										<p className="costOfCourse">4 000 грн</p>
									</div>
								</div>
								
								<button className="moreAboutCourse">Подробнее</button>
								<p className="statusOfRecrut">Идет набор студентов</p>
							</div>
						</motion.div>

						<motion.div initial='hidden' whileInView={'visible'} variants=			{animation} viewport={{ once: true}} custom={3}
						className="ourCourse">
							<div className="borderCircle">
								<div className="colorCircle color4">
									<h3 className='courseName'>QA</h3>
								</div>
							</div>
							<p className='courseDescription'>Специальность от А до Я</p>
							<ExpandMoreOutlinedIcon className='moreAboutCourseIcon'/>

							<div className="informAboutCourse">
								<div className="informTextData">
									<div className="informText">
										<p className="startAtText">Скорый Старт:</p>
										<p className="courseDurationText">Длительность:</p>
										<p className="courseCostText">Стоимость:</p>
									</div>
									<div className="informData">
										<p className="startAtDate">20 ноября</p>
										<p className="numberOfLessons">8 занятий</p>
										<p className="costOfCourse">4 000 грн</p>
									</div>
								</div>
								
								<button className="moreAboutCourse">Подробнее</button>
								<p className="statusOfRecrut">Идет набор студентов</p>
							</div>
						</motion.div>

						<motion.div initial='hidden' whileInView={'visible'} variants=			{animation} viewport={{ once: true}} custom={3}
						className="ourCourse">
							<div className="borderCircle">
								<div className="colorCircle color5">
									<h3 className='courseName'>QA</h3>
								</div>
							</div>
							<p className='courseDescription'>Специальность от А до Я</p>
							<ExpandMoreOutlinedIcon className='moreAboutCourseIcon'/>

							<div className="informAboutCourse">
								<div className="informTextData">
									<div className="informText">
										<p className="startAtText">Скорый Старт:</p>
										<p className="courseDurationText">Длительность:</p>
										<p className="courseCostText">Стоимость:</p>
									</div>
									<div className="informData">
										<p className="startAtDate">20 ноября</p>
										<p className="numberOfLessons">8 занятий</p>
										<p className="costOfCourse">4 000 грн</p>
									</div>
								</div>
								
								<button className="moreAboutCourse">Подробнее</button>
								<p className="statusOfRecrut">Идет набор студентов</p>
							</div>
						</motion.div>

						<motion.div initial='hidden' whileInView={'visible'} variants=			{animation} viewport={{ once: true}} custom={3}
						className="ourCourse">
							<div className="borderCircle">
								<div className="colorCircle color6">
									<h3 className='courseName'>QA</h3>
								</div>
							</div>
							<p className='courseDescription'>Специальность от А до Я</p>
							<ExpandMoreOutlinedIcon className='moreAboutCourseIcon'/>

							<div className="informAboutCourse">
								<div className="informTextData">
									<div className="informText">
										<p className="startAtText">Скорый Старт:</p>
										<p className="courseDurationText">Длительность:</p>
										<p className="courseCostText">Стоимость:</p>
									</div>
									<div className="informData">
										<p className="startAtDate">20 ноября</p>
										<p className="numberOfLessons">8 занятий</p>
										<p className="costOfCourse">4 000 грн</p>
									</div>
								</div>
								
								<button className="moreAboutCourse">Подробнее</button>
								<p className="statusOfRecrut">Идет набор студентов</p>
							</div>
						</motion.div>
					</motion.div>
			
			</motion.div>
			
	)
}
