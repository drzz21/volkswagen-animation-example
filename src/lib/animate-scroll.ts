import gsap from 'gsap';

import { Vector3 } from 'three';
import { ViewerApp } from 'webgi';

export const scrollAnimation = (
	target: Vector3,
	position: Vector3,
	viewer: ViewerApp
) => {
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
		onUpdate: () => {
			viewer.setDirty();
		},
	})
		.to(position, {
			// x: 0.818,
			// y: 0.422,
			// z: 5.02257,

			//new
			x: 5.336,
			y: 0.534,
			z: 2.825,
			scrollTrigger: {
				trigger: '#bitEverything',
				start: 'top bottom',
				end: 'center 40%',
				// markers:true,
				scrub: 2,
				immediateRender: false,
				// markers:true
			},
		})
		.to(target, {
			// x: -0.2024,
			// y: 0.04947,
			// z: 1.710599,

			//new
			x: -0.2029,
			y: -0.03117,
			z: 0.48842,
			scrollTrigger: {
				trigger: '#bitEverything',
				start: 'top bottom',
				end: 'center 40%',
				scrub: 2,
				immediateRender: false,
			},
		});
};
