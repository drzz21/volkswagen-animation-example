export const MoreInfo = () => {
	const baseURL = 'assets/img/';
	const options = [
		{
			title: 'Locate your dealer',
			subtitle: 'Dealer search',
			imgRoute: 'dealer.webp',
		},
		{
			title: 'Promotions and offers',
			subtitle: 'See offers',
			imgRoute: 'promos.webp',
		},
		{
			title: 'Financing and leasing',
			subtitle: 'Learn about the plans',
			imgRoute: 'look.webp',
		},
	];

	return (
		<section className="more-info-main">
			<h1>More information</h1>
			<div className="more-info-container">
				{options.map(({ title, subtitle, imgRoute }) => (
					<div className="more-info-item" key={imgRoute}>
						<img src={`${baseURL}${imgRoute}`} alt="" />
						<h3>{title}</h3>
						<a>
							{subtitle} {'>'}
						</a>
					</div>
				))}
			</div>
		</section>
	);
};
