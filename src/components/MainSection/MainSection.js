import React from "react";
import styles from "./MainSection.module.css";
import SelectSection from "./SelectSection/SelectSection"
import ResultSection from "./ResultSection/ResultSection";

function MainSection( { onHandleTown, selectedTown }){
    return (
        <div className={`${styles.mainSection}`}>
            <SelectSection onHandleTown={onHandleTown} />
            <ResultSection selectedTown={selectedTown} />
        </div>
    )
}

export default MainSection;