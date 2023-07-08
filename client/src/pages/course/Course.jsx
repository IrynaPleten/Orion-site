import { Divider } from '@mui/material'
import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import './course.css'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import clock from '../../img/icons/clock.svg'
import money from '../../img/icons/money.svg'
import technologies from '../../img/technologies/devtools-icon 1 1.svg'
import Header from '../../components/header/Header';
import Video from '../../components/video/Video';
import Companies from '../../components/companies/Companies';
import Reviews from '../../components/reviews/Reviews';
import FormQuestion from '../../components/formQuestion/FormQuestion';
import Footer from '../../components/footer/Footer';

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
					<div className="aimOfCourseList">
						<div className='aimOfCourseList_item'>
							<div className="circleAimOfCourseList_item"></div>
							<p>Быстрее всего развивающаяся область программирования</p>
						</div>

						<div className='aimOfCourseList_item'>
							<div className="circleAimOfCourseList_item"></div>
							<p>Быстрее всего развивающаяся область программирования</p>
						</div>

						<div className='aimOfCourseList_item'>
							<div className="circleAimOfCourseList_item"></div>
							<p>Быстрее всего развивающаяся область программирования</p>
						</div>

						<div className='aimOfCourseList_item'>
							<div className="circleAimOfCourseList_item"></div>
							<p>Быстрее всего развивающаяся область программирования</p>
						</div>
					
					</div>
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

			<div className="coursePlanBox">
				<div className="coursePlanTitle">
					<p className="coursePlanTitleText">План курса</p>
				</div>

				

				<div className="coursePlanForList">
					<div className="coursePlanForListTitles">
						<p className="coursePlanListTitle">Программа курса:</p>
						<p className="moreInfoAboutPlanItemMainTitle">Подробнее о теме:</p>
					</div>
					<div className="coursePlanList">
						<div className="coursePlanList_item">
							<p className="numberOfProgramm">1.</p>
							<p className="nameOfProgram">Начало</p>
							<ArrowDropDownIcon className='iconOfProgramm'/>
						</div>

						<div className="coursePlanList_item">
							<p className="numberOfProgramm">1.</p>
							<p className="nameOfProgram">Начало</p>
							<ArrowDropDownIcon className='iconOfProgramm'/>
						</div>

						<div className="coursePlanList_item">
							<p className="numberOfProgramm">1.</p>
							<p className="nameOfProgram">Начало</p>
							<ArrowDropDownIcon className='iconOfProgramm'/>
						</div>

						<div className="coursePlanList_item">
							<p className="numberOfProgramm">1.</p>
							<p className="nameOfProgram">Начало</p>
							<ArrowDropDownIcon className='iconOfProgramm'/>
						</div>

						<div className="coursePlanList_item">
							<p className="numberOfProgramm">1.</p>
							<p className="nameOfProgram">Начало</p>
							<ArrowDropDownIcon className='iconOfProgramm'/>
						</div>

						<div className="coursePlanList_item">
							<p className="numberOfProgramm">1.</p>
							<p className="nameOfProgram">Начало</p>
							<ArrowDropDownIcon className='iconOfProgramm'/>
						</div>

						<div className="coursePlanList_item">
							<p className="numberOfProgramm">1.</p>
							<p className="nameOfProgram">Начало</p>
							<ArrowDropDownIcon className='iconOfProgramm'/>
						</div>
					</div>

					<div className="moreInfoAboutPlanItem">
						<div className="moreInfoAboutPlanItemTitle">
							<p className="numberOfProgramm">1.</p>
							<p className="nameOfPrograminMoreInfo">Начало</p>
						</div>
						<p className="infoAboutThisItem">Курс рассчитан на специалистов, умеющих верстать, на базовом уровне знакомых с JavaScript и желающих углубить свои знания.</p>
					</div>
				</div>

				<div className="getSertificate">
					<div className="getSertificateCircle">
						<SchoolRoundedIcon style={{ fontSize: 60 }} className='getSertificateIcon'/>
					</div>
					<p className="getSertificateText">Выпускники получают сертификат об окончаии</p>
				</div>

				<div className="form-join">
					<div className="join-block">
						<div className="diagonal-left"></div>
						<div className="diagonal-center"></div>

						<div className="join-content">
							<p className='join-str'>что ж</p>
							<p className='join-title'>ЗАПИШИТЕСЬ</p>
							<p className='join-lorem'>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.  </p>
						</div>
						<button className='join-btn'>Записаться на курс</button>
					</div>
				</div>
			</div>

			<Video style={{marginTop: 156}}/>

			<Companies/>

			<Reviews/>

			<FormQuestion/>
			
			<Footer/>
		</div>
	)
}

