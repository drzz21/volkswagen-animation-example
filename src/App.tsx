import { Navbar } from './components/Navbar';
import './App.scss';
import { Jumbotron } from './components/Jumbotron';
import { Racing } from './components/Intro';
import { WebgiCanvas } from './components/WebgiCanvas';
import { ABitOfEverything } from './components/Design';
import { Summary } from './components/Summary';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {

	return (
		<>
			<Navbar />
			<Jumbotron />
			<Racing />
			<ABitOfEverything />
			<WebgiCanvas />
			<Summary/>
		</>
	);
}

export default App;

