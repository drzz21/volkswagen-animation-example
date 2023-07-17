import {
	ViewerApp,
	AssetManagerPlugin,
	GBufferPlugin,
	ProgressivePlugin,
	TonemapPlugin,
	SSRPlugin,
	SSAOPlugin,
	BloomPlugin,
	GammaCorrectionPlugin,
	Vector3,
} from 'webgi';

import gsap from 'gsap';

import { useEffect, useState } from 'react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const WebgiCanvas = () => {
	const [position, setPosition] = useState<Vector3>();
	const [target, setTarget] = useState<Vector3>();
	const [globalViewer, setGlobalViewer] = useState<ViewerApp>();

	const setupViewer = async () => {
		// Initialize the viewer
		const viewer = new ViewerApp({
			canvas: document.getElementById(
				'webgi-canvas'
			) as HTMLCanvasElement,
		});

		// Add some plugins
		// console.log(typeof AssetManagerPlugin);
		const manager = await viewer.addPlugin(AssetManagerPlugin);

		await viewer.addPlugin(GBufferPlugin);
		await viewer.addPlugin(new ProgressivePlugin(32));
		await viewer.addPlugin(new TonemapPlugin(true));
		await viewer.addPlugin(GammaCorrectionPlugin);
		await viewer.addPlugin(SSRPlugin);
		await viewer.addPlugin(SSAOPlugin);

		await viewer.addPlugin(BloomPlugin);

		viewer.renderer.refreshPipeline();

		// Import and add a GLB file.
		await viewer.load('./assets/car_model.glb');

		const plugin = viewer.getPlugin(TonemapPlugin);
		if (plugin && plugin.config) {
			plugin.config.clipBackground = true;
		}

		const position = viewer.scene.activeCamera.position;
		const target = viewer.scene.activeCamera.target;
		// const viewer = viewer;

		setPosition(position);
		setTarget(target);
		setGlobalViewer(viewer)

		viewer.scene.activeCamera.controls!.enabled = false;
		position.set(-6.96, 0.85, 4.55);
		target.set(0.7, -0.39, 1.54);

		viewer.addEventListener('preFrame', () => {
			viewer.scene.activeCamera.positionUpdated(true);
		});

		// console.log(viewer);

	};


	useEffect(() => {
		void setupViewer();
	},[]);

	return <canvas id="webgi-canvas">WebgiCanvas</canvas>;
};