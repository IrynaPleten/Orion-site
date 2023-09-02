import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreInfoAboutPlanItem from '../moreInfoAboutPlanItem/MoreInfoAboutPlanItem';
import './coursePlanForList.css'

export default function CoursePlanList({ index, planItem, toggleExpansion }) {
	const [isExpanded, setIsExpanded] = useState(false);

  const deskApper = () => {
    setIsExpanded(!isExpanded);
  };

	return (
		<>
			<div className="coursePlanList_item" onClick={() => {
  toggleExpansion();
  deskApper();
}}>
				<p className="numberOfProgramm">{planItem.number}</p>
				<p className="nameOfProgram">{planItem.name}</p>
				<ArrowDropDownIcon className='iconOfProgramm'/>
			</div>
			{
				document.documentElement.clientWidth <= 414 ? (
					isExpanded && (
						<div className="moreInfoAboutPlanItemFor414">
						<p className="infoAboutThisItem">
							{planItem.description}
						</p>
					</div>
					)
				) : null
			}
			
		</>
		
	)
}
