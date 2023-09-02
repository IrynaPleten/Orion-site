import React from 'react'
import { useParams } from 'react-router-dom';
import { CourseDesk } from '../../helpers/dummyDates';

export default function MoreInfoAboutPlanItem( {planItem}) {


	return (
		<div className="moreInfoAboutPlanItem">
			<div className="moreInfoAboutPlanItemTitle">
				<p className="numberOfProgramm">{planItem.number}</p>
				<p className="nameOfPrograminMoreInfo">{planItem.name}</p>
			</div>
			<p className="infoAboutThisItem">{planItem.description}</p>
		</div>
	)
}
