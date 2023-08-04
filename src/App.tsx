import { Navbar } from './components/Navbar';
import './App.scss';
import { Jumbotron } from './components/Jumbotron';

import { WebgiCanvas } from './components/WebgiCanvas';
import { Footer } from './components/Footer';

import { Summary } from './components/Summary';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {

	return (
		<>
			<Navbar />
			<Jumbotron />
			
		
			{/* <WebgiCanvas /> */}
			<Summary/>
			<Footer/>
		</>
	);
}

export default App;

