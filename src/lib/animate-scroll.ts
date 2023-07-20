import gsap from 'gsap';
import { useCoordinatesStore } from '../store/coordinates';
import { Vector3 } from 'three';
import { ViewerApp } from 'webgi';


export const scrollAnimation = (target:Vector3,position:Vector3,viewer:ViewerApp) => {
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

			endTrigger: '#jumbotron',
			end: 'bottom top',
			// end: '+=300 top',
			// markers: true,
			scrub: true,

			immediateRender: false,
		},
	}).to(position, {
		x: 0.818,
		y: 0.4220,
		z: 5.02257,

		scrollTrigger: {
			trigger: '#bitEverything',
			start: 'top bottom',
			end: 'top top',
			scrub: 2,
			immediateRender: false,
		},
	
	}).to(target, {
		x: -0.2024,
		y: 0.04947,
		z: 1.710599,

		scrollTrigger: {
			trigger: '#bitEverything',
			start: 'top bottom',
			end: 'top top',
			scrub: 2,
			immediateRender: false,
		},

	});
};
