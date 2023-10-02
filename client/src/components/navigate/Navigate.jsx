import React from 'react'
import n from './navigate.module.css'
export default function Navigate() {
	return (
		<div>
			<div className={n.navigate}>
				<p>К интересному</p>
				<a href='#allBlock' className={n.arrow}></a>
			</div>
		</div>
	)
}

