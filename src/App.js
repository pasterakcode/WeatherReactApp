import React, { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';

function App() {
  const [selectedTown, setSelectedTown] = useState();

  const getTown = (town) => {
    if (selectedTown !== town){
      setSelectedTown(town);
    }
  }
	return (
		<div className={`${styles.App} container`}>
			<Header />
			<MainSection onHandleTown={getTown} selectedTown={selectedTown}/>
      <h1>{selectedTown}</h1>
		</div>
	);
}

export default App;
