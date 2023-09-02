import React from 'react'

export default function AimOfCourseList( {aim}) {
	return (
		<div className='aimOfCourseList_item'>
			<div className="circleAimOfCourseList_item"></div>
			<p>{aim.itemText}</p>
		</div>
	)
}
