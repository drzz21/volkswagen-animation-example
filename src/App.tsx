import { Navbar } from './components/Navbar';
import './App.scss';
import { Jumbotron } from './components/Jumbotron';
import { Racing } from './components/Racing';
import { WebgiCanvas } from './components/WebgiCanvas';
import { ABitOfEverything } from './components/ABitOfEverything';

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
		</>
	);
}

export default App;

