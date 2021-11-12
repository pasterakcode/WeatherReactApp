import React, { useState, useEffect } from 'react';
import styles from './ResultTable.module.css';
import LoadingPage from '../../../GlobalComponents/LoadingPage/LoadingPage';

function ResultTable({ selectedTown, weatherInfo, onHanldeWeatherInfo }) {
	const [timeToUpdate, setTimeToUpdate] = useState(null);
	const [timer, setTimer] = useState(null);

	useEffect(() => {
		if (selectedTown) {
			clearInterval(timer);
			setTimeToUpdate(10);
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
					setTimeToUpdate(10);
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
			<tbody>
				{weatherInfo ? (
					<>
						<tr>
							<th>Date info</th>
							<td>{weatherInfo.date}</td>
						</tr>
						<tr>
							<th>temperature</th>
							<td>{weatherInfo.temp}°C</td>
						</tr>
						<tr>
							<th>humidity</th>
							<td>{weatherInfo.humidity}%</td>
						</tr>
						<tr>
							<th>time to update</th>
							<td>{timeToUpdate}</td>
						</tr>
					</>
				) : (
					<>
						<tr>
							<th>Date info</th>
							<td>
								<LoadingPage />
							</td>
						</tr>
						<tr>
							<th>temperature</th>
							<td></td>
						</tr>
						<tr>
							<th>humidity</th>
							<td></td>
						</tr>
						<tr>
							<th>time to update</th>
							<td></td>
						</tr>
					</>
				)}
			</tbody>
		</table>
	);
}

export default ResultTable;
