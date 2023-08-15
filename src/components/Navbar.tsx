export const Navbar: React.FC<{ menuRef:any }> = ({ menuRef }) => {
	const showMenu = () => {
		menuRef.current.classList.add('show');
		document.body.style.overflow = "hidden"; 
	};

	return (
		<nav className="menu" id="top-container">
			<div onClick={() => showMenu()} style={{cursor:'pointer'}}>
				<svg
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="25"
					height="25"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path d="M0 4h24v2H0zM0 11h14v2H0zM0 18h20v2H0z"></path>
				</svg>
			</div>
			<div>
				<svg
					role="img"
					aria-label="Volkswagen"
					xmlns="http://www.w3.org/2000/svg"
					width="35"
					height="35"
					viewBox="0 0 24 24"
					fill="#001e50"
				>
					<title>Volkswagen</title>
					<path d="M12 22.586c-5.786 0-10.543-4.8-10.543-10.586 0-1.2.214-2.357.6-3.471l6.172 12c.085.171.171.3.385.3.215 0 .3-.129.386-.3l2.871-6.386c.043-.086.086-.129.129-.129.086 0 .086.086.129.129l2.914 6.386c.086.171.171.3.386.3.214 0 .3-.129.385-.3l6.172-12c.385 1.071.6 2.228.6 3.471-.043 5.786-4.8 10.586-10.586 10.586Zm0-13.329c-.086 0-.086-.086-.129-.128l-3.3-7.115a10.117 10.117 0 0 1 6.858 0l-3.3 7.115c-.043.042-.043.128-.129.128Zm-3.471 7.714c-.086 0-.086-.085-.129-.128L3 6.47c.943-1.542 2.314-2.828 3.9-3.728l3.814 8.228c.086.172.172.215.3.215h1.972c.128 0 .214-.043.3-.215l3.771-8.228c1.586.9 2.957 2.186 3.9 3.728L15.6 16.843c-.043.086-.086.128-.129.128-.085 0-.085-.085-.128-.128L13.286 12.3c-.086-.171-.172-.214-.3-.214h-1.972c-.128 0-.214.043-.3.214l-2.057 4.543c-.043.043-.043.128-.128.128ZM12 24c6.643 0 12-5.357 12-12S18.643 0 12 0 0 5.357 0 12s5.357 12 12 12Z"></path>
				</svg>
			</div>
			<div>
				<svg
					width="25px"
					height="25px"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					role="img"
					aria-hidden="true"
				>
					<path d="M22.771 21.601l-5.591-5.979a9.06 9.06 0 001.837-5.624 8.723 8.723 0 00-9-9 8.699 8.699 0 00-9 9 8.69 8.69 0 009 9 9.18 9.18 0 005.764-1.944l5.53 5.913zm-12.754-4.603a6.697 6.697 0 01-7-7 6.697 6.697 0 017-7 6.697 6.697 0 017 7 6.697 6.697 0 01-7 7z"></path>
				</svg>
			</div>
		</nav>
	);
};
