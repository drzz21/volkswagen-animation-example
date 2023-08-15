import { useState, useRef } from 'react';
import { WebgiCanvas } from './WebgiCanvas';
export const Gallery = () => {
	const baseURL = 'assets/img/gallery/';
	const [options, setOptions] = useState([
		{ imgUrl: 'front.png', selected: true },
		{ imgUrl: 'side.png', selected: false },
		{ imgUrl: 'back.png', selected: false },
		{ imgUrl: '3d-view.jpg', selected: false },
	]);

	const [image, setImage] = useState<string>(options[0].imgUrl);
	const [show3d, setShow3d] = useState<boolean>(false);

	const containerRef = useRef<HTMLDivElement>(null);
	const [timeoutId, setTimeoutId] = useState<number | null>(null);
	// const timeoutId = useRef<number>(null); 

	const changeImage = (imgUrl: string, i: number) => {
		containerRef.current!.classList.remove('animate');
		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		setTimeout(() => {
			containerRef.current!.classList.add('animate');
		}, 10);

		const timeout = window.setTimeout(() => {
			containerRef.current!.classList.remove('animate');
		}, 800);
		// timeoutId.current = timeout;
		setTimeoutId(timeout);

		setOptions((prev) =>
			prev.map((el, ind) =>
				i === ind
					? { ...el, selected: true }
					: { ...el, selected: false }
			)
		);

		if (i == options.length - 1) {
			setShow3d(true);
			return;
		}
		setImage(imgUrl);
		setShow3d(false);
		// console.log(i);
	};

	return (
		<>
			<span className="title">Gallery</span>
			<div className="gallery-container">
				<div className="gallery-main-img" ref={containerRef}>
					{show3d ? (
						<div>
							<WebgiCanvas />
						</div>
					) : (
						<div>
							<img src={`${baseURL}${image}`} alt="" />
						</div>
					)}
				</div>
				<div className="gallery-img-list">
					{options.map(({ imgUrl, selected }, i) => (
						<div
							key={imgUrl}
							onClick={() => changeImage(imgUrl, i)}
						>
							<img
								className={selected ? 'active' : ''}
								src={`${baseURL}${imgUrl}`}
								alt={imgUrl}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
