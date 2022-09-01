const ToggleServices = ({ setToggle, toggle }) => {
	const toggleButtons = [
		{
			title: 'Build',
			toggleName: 'deck-building',
		},
		{
			title: 'Repair',
			toggleName: 'deck-repair',
		},
		{
			title: 'Cleaning',
			toggleName: 'deck-cleaning',
		},
		{
			title: 'Staining',
			toggleName: 'deck-staining',
		},
		{
			title: 'Refinish',
			toggleName: 'deck-refinishing',
		},
	];

	return (
		<div className='max-w-5xl mx-auto sticky top-0 z-10 mt-4'>
			<div className='grid grid-cols-3 md:grid-cols-5 gap-4 justify-evenly items-center py-3 space-x-1 mx-1 bg-white bg-opacity-70 scrol'>
				{toggleButtons.map((button) => (
					<button
						key={button.toggleName}
						className={`btn-toggle ${
							toggle === button.toggleName && 'btn-toggle-active'
						}`}
						onClick={() => {
							setToggle(button.toggleName);
						}}
					>
						{button.title}
					</button>
				))}
			</div>
		</div>
	);
};

export default ToggleServices;
