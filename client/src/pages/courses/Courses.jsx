import { Divider } from '@mui/material'
import './courses.css'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


import clock from '../../img/icons/clock.svg'
import money from '../../img/icons/money.svg'
import Header from '../../components/header/Header';
import CourseBlock from '../../components/courseBlocks/CourseBlock';
import Navigate from '../../components/navigate/Navigate';
import AboutTeam from '../../components/aboutTeam/AboutTeam';
import Reviews from '../../components/reviews/Reviews';
import Footer from '../../components/footer/Footer';
import FormQuestion from '../../components/formQuestion/FormQuestion';
import { CourseDesk } from '../../helpers/dummyDates.js';

export const Courses =() => {
	
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
							<img src={clock} alt="clock" className='courseTimeIcon'/>
							<div className='courseTimeText'>
								<p className="courseTimeTitle">Время</p>
								<p className="courseTimeTable">Пн/Ср (18:00-21:00)</p>
							</div>
						</div>
						<div className="coursePayment">
							<img src={money} alt="money" className='coursePayment'/>
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
								<h2 className="nearestCourseText">Design</h2>
							</div>
							<div className="nearestCoursesStatus">
								<p className="nearestCourseStatusTitle">Старт курса:</p>
								<h2 className="nearestCourseDateOfStart">1 декабря</h2>
							</div>
						</div>
						<Divider className='divider'/>
						<div className="numberOfFreePlaces">
							<PersonOutlineOutlinedIcon className='freePlacesIcon'/>
							<p className="freePlaces">Осталось 2 места</p>
						</div>
						<button className="moreDetails">Подробнее</button>
					</div>
					<button className="askQuestion">Задать нам вопрос</button>
				</div>
			</div>

			<Navigate/>
			{CourseDesk.map((c, index) => {
				<CourseBlock key={index} index={index} course={c}/>
      })}
			<AboutTeam/>
			<Reviews/>
			<FormQuestion/>
			<Footer/>
		</div>
	)
}

