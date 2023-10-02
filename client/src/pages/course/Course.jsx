import { Divider } from '@mui/material'
import React, { useState } from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import './course.css'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Header from '../../components/header/Header'
import Video from '../../components/video/Video'
import Companies from '../../components/companies/Companies'
import Reviews from '../../components/reviews/Reviews'

import FormQuestion from '../../components/formQuestion/FormQuestion'
import Footer from '../../components/footer/Footer'
import { useParams } from 'react-router-dom'
import { CourseDesk } from '../../helpers/dummyDates'
import TechnologiesUnderStudy from '../../components/technologiesUnderStudy/TechnologiesUnderStudy'
import CoursePlanList from '../../components/coursePlanList/CoursePlanList'
import AimOfCourseList from '../../components/aimOfCourseList/AimOfCourseList'
import ModalWindow from '../../components/modalWindow/ModalWindow';
import ModalQuestion from '../../components/modalQuestion/ModalQuestion';

export const Course =() => {

	const {title} = useParams();
	const course = CourseDesk.find((c) => c.title === title);

	const [selectedPlanItem, setSelectedPlanItem] = useState(null);
	const [modalActive, setModalActive] = useState(false)
	const [activeModal, setActiveModal] = useState(false)

 
	const handleItemClick = (index) => {
    setSelectedPlanItem(index);
  };

	const PF = process.env.REACT_APP_PUBLIC_FOLDER



	return (
		<div>
			<Header />
			<div className="nearestCourse" onLoad={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});
  }}>
				<div className="aboutThisCourse">
					<div className="onlineStatus">
						<p className='onlineStatusText'>Online</p>
					</div>
					<div className="courseInformation">
						<h2 className="courseAuthor">Авторские курсы</h2>
						<h1 className="thisCourseName">КУРС по {course.title}</h1>
						<p className="thisCorsesDescription">Запишитесь пожауйста, иначе злой начальник меня уволит, умоляю вас, не проходите мимо </p>
					</div>
					<div className="coursesTimeAndCost">
						<div className="timeOfThisCourse">
							<img src={PF + 'img/icons/clock.svg' } alt="clock" className='courseTimeImg'/>
							<div className='courseTimeAndText'>
								<p className="courseTimeName">Время</p>
								<p className="courseTimetable">{course.time}</p>
							</div>
						</div>
						<div className="coursePaymentPerMonth">
							<img src={PF + 'img/icons/money.svg'} alt="money" className='coursePaymentImg'/>
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
									<h2 className="courseStartAtText">{course.startAt}</h2>
								</div>
								<div className="thisCourseCost">
									<p className="thisCourseCostTitle">Стоимость:</p>
									<h2 className="thisCourseCostText">{course.cost}</h2>
								</div>
							</div>
							<Divider className='courseDivider'/>
							<div className="durationAndNumberOfLessons">
								<div className="duration">
									<p className="durationTitle">Продолжительность:</p>
									<h2 className="durationText">{course.duration}</h2>
								</div>
								<div className="courseNumberOfLessons">
									<p className="courseNumberOfLessonsTitle">Количество занятий:</p>
									<h2 className="courseNumberOfLessonsText">{course.numberOfLessons}</h2>
								</div>
							</div>
							
						</div>
						
						<div className="thisCoursenumberOfFreePlaces">
							<PersonOutlineOutlinedIcon className='freePlacesIcon'/>
							<p className="freePlaces">Осталось {course.freePlaces}</p>
						</div>

					</div>
					<div className="leaveReviewOrStartCourse">
						<p className="leaveReview">Оставить отзыв</p>
						<button onClick={() => setModalActive(true)}
						className="startCourse" type='submit'>Записаться на онлайн курс</button>
						<ModalWindow active={modalActive} setActive={setModalActive}/>
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
				{course.technologiesUnderStudy.map((t) => <TechnologiesUnderStudy key={t.id} technology={t}/> )}
				</div>
			</div>

			<div className="aboutProfession">
				<h1 className="aboutProfessionTitle">О професии {course.title}</h1>
				<p className="aboutProfessionText"><b>{course.title}</b> — {course.aboutCourse}</p>
			</div>


			<div className="aimOfCourseAndForWhom">
				<div className="aimOfCourse">
					<div className="aimOfCorseTitle">
						<SchoolRoundedIcon className='aimOfCorseTitleIcon'/>
						<h1 className="aimOfCorseTitleText">Цель курса</h1>
					</div>
					<div className="aimOfCourseList">
						{course.aimOfCourseList.map((a) => <AimOfCourseList aim={a}/> )}

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
						<p className="courseForWhomText">{course.whoCanTakeCourse}</p>
						<button className="courseForWhomButton" onClick={() => setActiveModal(true)} >Задать вопрос </button>
					</div>
					<ModalQuestion active={activeModal} setActive={setActiveModal}/>
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
					<div className="coursePlanListItem">
						{course.coursePlan.map((p, index) => <CoursePlanList index={index} key={index} planItem={p} toggleExpansion={() => handleItemClick(index)} />)}
						</div>
					</div>

					{ selectedPlanItem === null ? (
						<div className="moreInfoAboutPlanItem">
              <div className="moreInfoAboutPlanItemTitle">
                <p className="numberOfProgramm">
                  {course.coursePlan[0].number}
                </p>
                <p className="nameOfPrograminMoreInfo">
                  {course.coursePlan[0].name}
                </p>
              </div>
              <p className="infoAboutThisItem">
                {course.coursePlan[0].description}
              </p>
            </div>
					) : selectedPlanItem !== null ? (
            <div className="moreInfoAboutPlanItem">
              <div className="moreInfoAboutPlanItemTitle">
                <p className="numberOfProgramm">
                  {course.coursePlan[selectedPlanItem].number}
                </p>
                <p className="nameOfPrograminMoreInfo">
                  {course.coursePlan[selectedPlanItem].name}
                </p>
              </div>
              <p className="infoAboutThisItem">
                {course.coursePlan[selectedPlanItem].description}
              </p>
            </div>
          ) : null}
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

