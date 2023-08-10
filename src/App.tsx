import { Navbar } from './components/Navbar';
import './App.scss';
import { Jumbotron } from './components/Jumbotron';

import { WebgiCanvas } from './components/WebgiCanvas';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { MoreInfo } from './components/MoreInfo';
import { SideMenu } from './components/SideMenu';
import { Summary } from './components/Summary';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RefObject, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function App() {

	const sideMenuRef=useRef<RefObject<HTMLDivElement>>(null);
	return (
		<>
			<Navbar menuRef={sideMenuRef}/>
			<Jumbotron />
			
		
			{/* <WebgiCanvas /> */}
			<Summary/>
			<Gallery/>
			<MoreInfo/>
			<SideMenu menuRef={sideMenuRef}/>
			<Footer/>
		</>
	);
}

export default App;

