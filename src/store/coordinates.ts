import { Vector3 } from 'three';
import { ViewerApp } from 'webgi';
import { create } from 'zustand';

interface CoordinateState {
	globalTarget: Vector3 | null;
	globalPosition: Vector3 | null;
	globalViewer: ViewerApp | null;
	onUpdate: () => void;
	setCoordinatesValues: (target: Vector3, position: Vector3, viewer: ViewerApp) => void;
}

export const useCoordinatesStore = create<CoordinateState>((set, get) => ({
	globalTarget: null,
	globalPosition: null,
	globalViewer: null,
	onUpdate: () => {
		get().globalViewer?.setDirty();
	},
	setCoordinatesValues: (target, position, viewer) => {
		set({
			globalTarget: target,
			globalPosition: position,
			globalViewer: viewer,
		});
	},
}));
