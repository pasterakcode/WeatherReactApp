import React from "react";
import styles from "./TitleSection.module.css"

function TitleSection({ section }){
    return (
        <div className={styles.titleSection}>
            <h3>{section}</h3>
        </div>
    )
}

export default TitleSection;