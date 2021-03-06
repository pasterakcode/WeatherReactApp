import React from 'react';
import styles from './SelectSection.module.css';
import TitleSection from '../../GlobalComponents/TitleSection/TitleSection';
import OneSelectTown from './OneSelectTown/OneSelectTown';

function SelectSection({ onHandleTown }) {
	const towns = ['London', 'München'];

	return (
		<div className={`${styles.selectSection}`}>
			<TitleSection section='Towns to select:' />
			{towns.map(town => (
				<OneSelectTown
					town={town}
					key={towns.indexOf(town)}
					onHandleTown={onHandleTown}
				/>
			))}
		</div>
	);
}

export default SelectSection;
