import { useState } from 'react';
import { Navbar } from './components/Navbar';
import './App.scss';
import { Jumbotron } from './components/Jumbotron';
import { Racing } from './components/Racing';

function App() {
	return (
		<>
			<Navbar />
			<Jumbotron />
      <Racing/>
		</>
	);
}

export default App;

