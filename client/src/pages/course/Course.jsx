import { Divider } from '@mui/material'
import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import './course.css'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

import clock from '../../img/icons/clock.svg'
import money from '../../img/icons/money.svg'
import technologies from '../../img/technologies/devtools-icon 1 1.svg'
import Header from '../../components/header/Header';

export const Course =() => {
	return (
		<div>
			<Header/>
			<div className="nearestCourse">
				<div className="aboutThisCourse">
					<div className="onlineStatus">
						<p className='onlineStatusText'>Online</p>
					</div>
					<div className="courseInformation">
						<h2 className="courseAuthor">Авторские курсы</h2>
						<h1 className="thisCourseName">КУРС по QA</h1>
						<p className="thisCorsesDescription">Запишитесь пожауйста, иначе злой начальник меня уволит, умоляю вас, не проходите мимо </p>
					</div>
					<div className="coursesTimeAndCost">
						<div className="timeOfThisCourse">
							<img src={clock} alt="clock" className='courseTimeImg'/>
							<div className='courseTimeAndText'>
								<p className="courseTimeName">Время</p>
								<p className="courseTimetable">Пн/Ср (18:00-21:00)</p>
							</div>
						</div>
						<div className="coursePaymentPerMonth">
							<img src={money} alt="money" className='coursePaymentImg'/>
							<div className='coursePaymentPerMonthText'>
								<p className="coursePaymentPerMonthTitle">Оплата</p>
								<p className="coursePaymentPerMonthOpportunities">Можно по частям</p>
							</div>
						</div>
					</div>
				</div>
				
				<div className="thisCourseBox">
					<h2 className="thisCourseBoxTitle">Старт ближайшей группы</h2>
					<div className="nearestCoursesGroupInformation">
						<div className="detailsOfNearestCourseGroup">
							<div className="nearestCourseNameGroup">
								<div className="courseStartAtAndCost">
									<div className="courseStartAt">
										<p className="courseStartAtTitle">Старт курса:</p>
										<h2 className="courseStartAtText">1 Декабря</h2>
									</div>
									<div className="thisCourseCost">
										<p className="thisCourseCostTitle">Стоимость:</p>
										<h2 className="thisCourseCostText">4000грн</h2>
									</div>
								</div>
								<Divider className='courseDivider'/>
								<div className="durationAndNumberOfLessons">
									<div className="duration">
										<p className="durationTitle">Продолжительность:</p>
										<h2 className="durationText">4,5 месяцев</h2>
									</div>
									<div className="courseNumberOfLessons">
										<p className="courseNumberOfLessonsTitle">Количество занятий:</p>
										<h2 className="courseNumberOfLessonsText">36 занятий</h2>
									</div>
								</div>
							</div>
						</div>
						
						<div className="thisCoursenumberOfFreePlaces">
							<PersonOutlineOutlinedIcon className='freePlacesIcon'/>
							<p className="freePlaces">Осталось 2 места</p>
						</div>

					</div>
					<div className="leaveReviewOrStartCourse">
						<p className="leaveReview">Оставить отзыв</p>
						<button className="startCourse">Записаться на онлайн курс</button>
					</div>
					
				</div>
			</div>

			<div className="toMoreDetails">
				<p className="toMoreDetailsText">ПОДРОБнее</p>
				<ExpandMoreOutlinedIcon className='toMoreDetailsIcon'/>
			</div>

			<div className="technologiesUnderStudy">
				<h1 className="technologiesUnderStudyTitle">Изучаемые технологии</h1>
				<div className="technologiesUnderStudyBox">
					<div className="technologiesUnderStudy_example">
						<img src={technologies} alt="technologiesUnderStudy_devTools" className="technologiesUnderStudyImg" />
						<h2 className='technologiesUnderStudyText'>DevTools</h2>
					</div>

					<div className="technologiesUnderStudy_example">
						<img src={technologies} alt="technologiesUnderStudy_devTools" className="technologiesUnderStudyImg" />
						<h2 className='technologiesUnderStudyText'>DevTools</h2>
					</div>

					<div className="technologiesUnderStudy_example">
						<img src={technologies} alt="technologiesUnderStudy_devTools" className="technologiesUnderStudyImg" />
						<h2 className='technologiesUnderStudyText'>DevTools</h2>
					</div>

					<div className="technologiesUnderStudy_example">
						<img src={technologies} alt="technologiesUnderStudy_devTools" className="technologiesUnderStudyImg" />
						<h2 className='technologiesUnderStudyText'>DevTools</h2>
					</div>

					<div className="technologiesUnderStudy_example">
						<img src={technologies} alt="technologiesUnderStudy_devTools" className="technologiesUnderStudyImg" />
						<h2 className='technologiesUnderStudyText'>DevTools</h2>
					</div>

					<div className="technologiesUnderStudy_example">
						<img src={technologies} alt="technologiesUnderStudy_devTools" className="technologiesUnderStudyImg" />
						<h2 className='technologiesUnderStudyText'>DevTools</h2>
					</div>

					<div className="technologiesUnderStudy_example">
						<img src={technologies} alt="technologiesUnderStudy_devTools" className="technologiesUnderStudyImg" />
						<h2 className='technologiesUnderStudyText'>DevTools</h2>
					</div>

					<div className="technologiesUnderStudy_example">
						<img src={technologies} alt="technologiesUnderStudy_devTools" className="technologiesUnderStudyImg" />
						<h2 className='technologiesUnderStudyText'>DevTools</h2>
					</div>
				</div>
			</div>

			<div className="aboutProfession">
				<h1 className="aboutProfessionTitle">О професии QA</h1>
				<p className="aboutProfessionText"><b>Front-End</b> — в наше время, пожалуй, быстрее всего развивающаяся область программирования. С другой стороны, эти технологии достаточно устоявшиеся и распространены практически повсеместно, ведь браузер есть во многих электронных устройствах.</p>
			</div>


			<div className="aimOfCourseAndForWhom">
				<div className="aimOfCourse">
					<div className="aimOfCorseTitle">
						<SchoolRoundedIcon className='aimOfCorseTitleIcon'/>
						<h1 className="aimOfCorseTitleText">Цель курса</h1>
					</div>
					<ul className="aimOfCourseList">
						<li>Быстрее всего развивающаяся область программирования</li>
						<li>Быстрее всего развивающаяся область программирования</li>
						<li>Быстрее всего развивающаяся область программирования</li>
						<li>Быстрее всего развивающаяся область программирования</li>
						<li>Быстрее всего развивающаяся область программирования</li>
						<li>Быстрее всего развивающаяся область программирования</li>
					</ul>
				</div>

				<div className="courseForWhom">
					<div className="courseForWhomTitle">
						<PersonOutlineOutlinedIcon className='courseForWhomTitleIcon'/>
						<h1 className="courseForWhomTitleText">Для кого курс</h1>
					</div>
					<div className="courseForWhomTextAndButton">
						<p className="courseForWhomText">Курс рассчитан на специалистов, умеющих верстать, на базовом уровне знакомых с JavaScript и желающих углубить свои знания.</p>
						<button className="courseForWhomButton">Задать вопрос</button>
					</div>
				</div>
			</div>
		</div>
	)
}

