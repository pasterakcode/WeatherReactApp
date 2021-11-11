import React, { useState, useEffect } from 'react';
import styles from './ResultTable.module.css'
import LoadingPage from '../../../GlobalComponents/LoadingPage/LoadingPage';

function ResultTable({ selectedTown, weatherInfo, onHanldeWeatherInfo }) {
	const [timeToUpdate, setTimeToUpdate] = useState(null);
	const [timer, setTimer] = useState(null);

	useEffect(() => {
		if (selectedTown) {
			clearInterval(timer);
			setTimeToUpdate(15);
			setTimer(
				setInterval(async () => {
					setTimeToUpdate(prev => prev - 1);
				}, 1000)
			);
		}
	}, [selectedTown]);

	useEffect(() => {
		const checker = async () => {
			try {
				if (timeToUpdate < 0) {
					setTimeToUpdate(15);
					await updateWeatherInfo();
				}
			} catch (err) {
				console.log(err);
			}
		};
		checker();
	}, [timeToUpdate]);

	const updateWeatherInfo = async () => {
		try {
			await onHanldeWeatherInfo();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<table className={`table ${styles.table}`}>
			<thead>
				<tr>
					<th scope='col'>date</th>
					<th scope='col'>humidity</th>
					<th scope='col'>temp</th>
					<th scope='col'>to update</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					{weatherInfo ? (
						<>
							<td>{weatherInfo.date}</td>
							<td>{weatherInfo.humidity}</td>
							<td>{weatherInfo.temp}</td>
							<td>{timeToUpdate}</td>
						</>
					) : (
						<>
							<td colspan="4">
								<LoadingPage />
							</td>
						</>
					)}
				</tr>
			</tbody>
		</table>
	);
}

export default ResultTable;
