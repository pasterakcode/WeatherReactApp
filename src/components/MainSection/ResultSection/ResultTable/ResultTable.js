import React, {useState, useEffect} from 'react';

function ResultTable( { weatherInfo, onHanldeWeatherInfo }) {
    const [timeToUpdate, setTimeToUpdate] = useState(10)

    useEffect(() => {
        return () => {
            startTimeToUpdate();
        }
    }, [weatherInfo])

    const startTimeToUpdate = () => {
        let sec = 10;
        const counter = setInterval(() => {
            setTimeToUpdate(prev => prev - 1);
            sec--;    
            console.log(sec)
            if ( sec === -1 ){
                clearInterval(counter);
                setTimeToUpdate(10);
                onHanldeWeatherInfo();
            }
        }, 1000);
    }
	return (
		<table className='table'>
			<thead>
				<tr>
					<th scope='col'>First</th>
					<th scope='col'>Last</th>
					<th scope='col'>Handle</th>
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
