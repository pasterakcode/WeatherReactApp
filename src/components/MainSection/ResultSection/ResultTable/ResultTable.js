import React, { useState, useEffect } from 'react';

function ResultTable({ selectedTown, weatherInfo, onHanldeWeatherInfo }) {
	const [timeToUpdate, setTimeToUpdate] = useState(null);
	const [timer, setTimer] = useState(null);

	useEffect(() => {
		if (selectedTown) {
			console.log('UseEffect:');
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
				console.log('checkTimeToUpdate 1');
				if (timeToUpdate < 0 && timeToUpdate > -2) {
					console.log('checkTimeToUpdate 2 (inside if === -1 ');
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
		console.log('updateWeatherInfo 1');
		try {
			await onHanldeWeatherInfo();
		} catch (err) {
			console.log(err);
		}
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
					<td>{timeToUpdate}</td>
				</tr>
			</tbody>
		</table>
	);
}

export default ResultTable;
