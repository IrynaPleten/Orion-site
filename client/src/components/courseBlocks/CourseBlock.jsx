import React, { useState } from 'react'
import './courseBlock.css'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import { useEffect } from 'react';


import {motion} from 'framer-motion'
import { NavLink, useParams } from 'react-router-dom';






export default function CourseBlock({ course, index }) {
	


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
	  

            <motion.div initial='hidden' whileInView={'visible'} variants=      {animation} viewport={{ once: true}} custom={2}
              className="ourCourse">
              <div className="borderCircle">
                <div className="colorCircle color1">
                    <h3 className='courseName' style={{fontSize: course.title.length > 5 ? 24 : 33}}>{course.title}</h3>   
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
                    <p className="startAtDate">{course.startAt}</p>
                    <p className="numberOfLessons">{course.numberOfLessons}</p>
                    <p className="costOfCourse">{course.cost}</p>
                  </div>
                </div>
                
                <NavLink to={`/course/${index}`} className="moreAboutCourse" >
                  Подробнее
                
                </NavLink>
                <p className="statusOfRecrut">Идет набор студентов</p>
              </div>
            </motion.div>
             

          
          

			
	)
}
