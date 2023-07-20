import { Navbar } from './components/Navbar';
import './App.scss';
import { Jumbotron } from './components/Jumbotron';
import { Racing } from './components/Racing';
import { WebgiCanvas } from './components/WebgiCanvas';
import { ABitOfEverything } from './components/ABitOfEverything';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { scrollAnimation } from './lib/animate-scroll';

gsap.registerPlugin(ScrollTrigger);

function App() {


	useEffect(() => {
		scrollAnimation();
	}, []);

	return (
		<>
			<Navbar />
			<Jumbotron />
			<Racing />
			<ABitOfEverything />
			<WebgiCanvas />
		</>
	);
}

export default App;

