import React, { useState, useEffect } from 'react';
import styles from './ResultSection.module.css';
import TitleSection from '../../GlobalComponents/TitleSection';
import ResultTable from './ResultTable/ResultTable';
import axios from 'axios';

function ResultSection({ selectedTown }) {
	const [weatherInfo, setWeatherInfo] = useState('');
	const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
	const apiKey = '&appid=0f108b745624921d1b3b89f457e80a95';
	const apiKey2 = '&appid=722ec66764c3f6a657d371702de7158e';
	const units = '&units=metric';

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		if (selectedTown) {
	// 			try {
	// 				await getWeatherInfo();
	// 			} catch (err) {
	// 				console.log(err);
	// 			}
	// 		}
	// 	};
	// 	fetchData();
	// }, [selectedTown]);
	// useEffect(() => {
	// 	if (selectedTown) {
	// 		getWeatherInfo();
	// 	}
	// }, [selectedTown]);

	const fetchWeather = async () => {
		try {
			console.log(`pobieram pogode dla: ${selectedTown}`);
			const weatherAllInfo = await axios.get(
				apiLink + selectedTown + apiKey + units
			);
			console.log(`weather info fetch : all: ${selectedTown}`);
			return weatherAllInfo;
		} catch (err) {
			console.log(err);
		}
	};

	const getWeatherInfo = async () => {
		console.log('get weather info');
		try {
			const weatherAllInfo = await fetchWeather();
			const unixTimestamp = weatherAllInfo.data.dt;
			const date = getDate(unixTimestamp);
			const humidity = weatherAllInfo.data.main.humidity;
			const temp = weatherAllInfo.data.main.temp;
			const infoObject = {
				date,
				humidity,
				temp,
			};
			console.log('ustawiam weather info:');
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
		const hour = a.getHours();
		const min = a.getMinutes();
		const sec = a.getSeconds();
		const time =
			year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec;
		return time;
	};

	return (
		<div className={`${styles.resultSection}`}>
			<TitleSection section='result' />
			<ResultTable
				weatherInfo={weatherInfo}
				onHanldeWeatherInfo={getWeatherInfo}
			/>
		</div>
	);
}

export default ResultSection;
