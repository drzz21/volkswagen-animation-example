import { useState } from 'react';
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

	const changeImage = (imgUrl: string, i: number) => {
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
				{show3d ? (
					<div>
						<WebgiCanvas/>
						{/* <span>SE RENDERIZA</span> */}
					</div>
				) : (
					<>
						<div className="gallery-main-img">
							<img src={`${baseURL}${image}`} alt="" />
						</div>
					</>
				)}
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
