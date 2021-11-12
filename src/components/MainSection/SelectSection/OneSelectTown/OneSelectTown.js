import React from 'react';
import styles from './OneSelectTown.module.css';

function OneSelectTown( { town, onHandleTown } ) {
	return (
		<div className={`form-check ${styles.oneTown}`}>
			<input
				className='form-check-input'
				type='radio'
				name='flexRadioDefault'
				id='flexRadioDefault1'
                onClick={() => onHandleTown(town)}
			/>
			<label className={`form-check-label ${styles.label}`}>
				{town}
			</label>
		</div>
	);
}

export default OneSelectTown;