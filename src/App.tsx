import { useState } from 'react';
import { Navbar } from './components/Navbar';
import './App.css';
import { Jumbotron } from './components/Jumbotron';

function App() {
	return (
		<>
			<Navbar />
			<Jumbotron />
		</>
	);
}

export default App;

