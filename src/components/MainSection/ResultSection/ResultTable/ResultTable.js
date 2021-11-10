import React, { useState, useEffect } from 'react';

function ResultTable({ weatherInfo, onHanldeWeatherInfo }) {
	const [timeToUpdate, setTimeToUpdate] = useState(null);
	const [timer, setTimer] = useState(null)

	useEffect(() => {
		if (weatherInfo) {
			setTimeToUpdate(16);
			setTimer(setInterval(() => {
				setTimeToUpdate(prev => prev - 1);
			}, 1000));
		}
	}, [weatherInfo]);

	const checkTimeToUpdate = () => {
		if (timeToUpdate <= -1) {
			clearInterval(timer);
			setTimeToUpdate(null);
			updateWeatherInfo();
		}
	};

	const updateWeatherInfo = () => {
		onHanldeWeatherInfo();
	};

	return (
		<table className='table'>
			<thead>
				<tr>
					<th scope='col'>date</th>
					<th scope='col'>humidity</th>
					<th scope='col'>temp</th>
					<th scope='col'>Time to update</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{weatherInfo.date}</td>
					<td>{weatherInfo.humidity}</td>
					<td>{weatherInfo.temp}</td>
					<td onChange={checkTimeToUpdate()}>{timeToUpdate}</td>
				</tr>
			</tbody>
		</table>
	);
}

export default ResultTable;
