import React, { useState, useEffect } from 'react';
import styles from './ResultSection.module.css';
import TitleSection from '../../GlobalComponents/TitleSection/TitleSection';
import ResultTable from './ResultTable/ResultTable';
import axios from 'axios';
import { myConfig } from '../../../config';

function ResultSection({ selectedTown }) {
	const [weatherInfo, setWeatherInfo] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			if (selectedTown) {
				try {
					await getWeatherInfo();
				} catch (err) {
					console.log(err);
				}
			}
		};
		fetchData();
	}, [selectedTown]);

	const fetchWeather = async () => {
		try {
			const weatherAllInfo = await axios.get(
				myConfig.apiLink + selectedTown + myConfig.apiId + '&units=metric'
			);
			return weatherAllInfo;
		} catch (err) {
			console.log(err);
		}
	};

	const getWeatherInfo = async () => {
		try {
			setWeatherInfo('');
			const weatherAllInfo = await fetchWeather();
			const unixTimestamp = weatherAllInfo.data.dt;
			const date = getDate(unixTimestamp);
			const humidity = parseInt(weatherAllInfo.data.main.humidity);
			const temp = parseInt(weatherAllInfo.data.main.temp);
			const infoObject = {
				date,
				humidity,
				temp,
			};
			setWeatherInfo(infoObject);
		} catch (err) {
			console.log(err);
		}
	};

	const getDate = unixTimestamp => {
		const a = new Date(unixTimestamp * 1000);
		const year = a.getFullYear();
		const month = a.getMonth() + 1;
		const date = a.getDate();
		const hour = a.getHours() < 10 ? `0${a.getHours()}` : a.getHours();
		const min = a.getMinutes() < 10 ? `0${a.getMinutes()}` : a.getMinutes();
		const sec = a.getSeconds() < 10 ? `0${a.getSeconds()}` : a.getSeconds();
		const time =
			year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec;
		return time;
	};

	return (
		<div className={`${styles.resultSection}`}>
			{selectedTown ? (
				<>
					<TitleSection section='current weather:' />
					<ResultTable
						selectedTown={selectedTown}
						weatherInfo={weatherInfo}
						onHanldeWeatherInfo={getWeatherInfo}
					/>
				</>
			) : (
				<div className={styles.pleaseSelectedInfo}>to check the weather, please select a town</div>
			)}
		</div>
	);
}

export default ResultSection;
