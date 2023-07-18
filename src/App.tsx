import { Navbar } from './components/Navbar';
import './App.scss';
import { Jumbotron } from './components/Jumbotron';
import { Racing } from './components/Racing';
import { WebgiCanvas } from './components/WebgiCanvas';
import { ABitOfEverything } from './components/ABitOfEverything';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function App() {
	function scrollAnimate() {
		const tl = gsap.timeline();

		// empezamos la animacion de nuestro timeline
		//enviamos como primer argumento lo que queremos modificar, en este caso es la posicion de la cámara,
		// seguido del objeto con las propiedades que queremos modificar, en este caso son las coordenadas de la cámara

		tl.to(document.getElementById('webgi-canvas'), {
			// estos son los valores que cambiaremos
			//agregamos un ternario para verificar que nos encontramos en un dispositivo movil
			//y en caso afirmativo asignar unos valores, y en caso contrario asignar otros
			//para que el modelo se vea bien dentro de la ventana del navegador
			top: 0,
			// creamos nuestro scrolltrigger para configurarlo como el disparador de esta animación
			scrollTrigger: {
				trigger: '#top-container',

				start: 'top top',

				endTrigger:'#jumbotron',
				end:'bottom top',
				// end: '+=300 top',
				markers:true,
				scrub: true,

				immediateRender: false,
			},
		});
	}

	useEffect(() => {
		scrollAnimate();
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

