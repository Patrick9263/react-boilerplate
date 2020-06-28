import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Navigation from '../Navigation.jsx';
import styles from './Home.scss';

const Home = () => (
	<div className={styles.container}>
		<Navigation />
		<Jumbotron>
			<h1>React Boilerplate</h1>
			<p>This is a React-Boostrap Jumbotron.</p>
		</Jumbotron>
	</div>
);

export default Home;
