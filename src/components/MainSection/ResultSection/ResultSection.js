import React, { useState, useEffect } from 'react';
import styles from './ResultSection.module.css';
import TitleSection from '../../GlobalComponents/TitleSection';
import ResultTable from './ResultTable/ResultTable';
import axios from 'axios';

function ResultSection({ selectedTown }) {
	const [weatherInfo, setWeatherInfo] = useState({});
	const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
	const apiKey = '&appid=0f108b745624921d1b3b89f457e80a95';
	const units = '&units=metric';

	useEffect(() => {
		return () => {
			getWeatherInfo();
		};
	}, [selectedTown]);

	const fetchWeather = async () => {
		try {
			const weatherAllInfo = await axios.get(
				apiLink + `" ${selectedTown}"` + apiKey + units
			);
			console.log(weatherAllInfo.data);
			return weatherAllInfo;
		} catch (err) {
			console.log(err);
		}
	};

	const getWeatherInfo = async () => {
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
        setWeatherInfo(infoObject);
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
			<ResultTable weatherInfo={weatherInfo} onHanldeWeatherInfo={getWeatherInfo} />
		</div>
	);
}

export default ResultSection;
