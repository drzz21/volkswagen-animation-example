import { useState, useRef } from 'react';
import { WebgiCanvas } from './WebgiCanvas';
export const Gallery = () => {
	const baseURL = 'assets/img/gallery/';
	const options = [
		{ imgUrl: 'front.png' },
		{ imgUrl: 'side.png' },
		{ imgUrl: 'back.png' },
		{ imgUrl: '3d-view.jpg' },
	];

	const [image, setImage] = useState<string>(options[0].imgUrl);
	const [show3d, setShow3d] = useState<boolean>(false);

	const containerRef = useRef(null);
	const timeoutId = useRef<number>(null); // creamos una referencia para guardar el ID del timeout

	const changeImage = (imgUrl: string, i: number) => {
		containerRef.current.classList.remove("animate");
		if (timeoutId.current) {
			clearTimeout(timeoutId.current);
		}
		
		setTimeout(() => {
			containerRef.current.classList.add("animate");
		  }, 10)
		

		const timeout = setTimeout(() => {
			containerRef.current.classList.remove('animate');
		}, 800);
		timeoutId.current = timeout;

		if (i == options.length - 1) {
			setShow3d(true);
			return;
		}
		setImage(imgUrl);
		setShow3d(false);
	};

	return (
		<>
			<span className="title">Gallery</span>
			<div className="gallery-container">
				<div className="gallery-main-img" ref={containerRef}>
					{show3d ? (
						<div>
							<WebgiCanvas />
							{/* <span>SE RENDERIZA</span> */}
						</div>
					) : (
						<>
							<img src={`${baseURL}${image}`} alt="" />
						</>
					)}
				</div>
				<div className="gallery-img-list">
					{options.map(({ imgUrl }, i) => (
						<div
							key={imgUrl}
							onClick={() => changeImage(imgUrl, i)}
						>
							<img src={`${baseURL}${imgUrl}`} alt={imgUrl} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};
