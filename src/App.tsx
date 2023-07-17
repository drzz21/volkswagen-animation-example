import { useState } from 'react';
import { Navbar } from './components/Navbar';
import './App.scss';
import { Jumbotron } from './components/Jumbotron';
import { Racing } from './components/Racing';
import { WebgiCanvas } from './components/WebgiCanvas';

function App() {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<Racing />
			<WebgiCanvas />
		</>
	);
}

export default App;

