import React from 'react';
import styles from './LoadingPage.module.css'

function LoadingPage() {
	return (
		<div className={`spinner-border text-light ${styles.spinner}`} role='status'></div>
	);
}

export default LoadingPage;
