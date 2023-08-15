import { useRef } from "react";

export const SideMenu:React.FC<{menuRef:any}> = ({menuRef}) => {
	// const sideMenuRef=useRef(null);
	const options = [
		{ title: 'Deals and promotions' },
		{ title: 'Financing and leasing' },
		{ title: 'Volkswagen experience' },
	];

	const hideMenu = () => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		menuRef.current.classList.remove('show');
		document.body.style.overflow = "auto"; 
	};

	return (
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		<div className="side-menu" ref={menuRef}>
			<button className="side-menu-button" onClick={() => hideMenu()}>
				<svg
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="white"
				>
					<path d="m21.474 3.467-.942-.941L12 11.059 3.466 2.526l-.94.941L11.059 12l-8.533 8.532.94.942L12 12.941l8.532 8.533.942-.942L12.941 12z"></path>
				</svg>
				Close menu
			</button>
			<nav className="side-menu-main-menu">
				<ul>
					{options.map(({ title }) => (
						<li key={title}>
							<span>{title}</span>
							<span>
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="white"
								>
									<path d="M9 6a1.7 1.7 0 0 1-.47 1.18L3.93 12 3 11.06l4.61-4.82a.36.36 0 0 0 0-.48L3 .94 3.93 0l4.6 4.82A1.72 1.72 0 0 1 9 6z"></path>
								</svg>
							</span>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};
