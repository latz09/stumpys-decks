const ToggleServices = ({ setToggle, toggle }) => {
	return (
		<div className='max-w-5xl mx-auto'>
			<div className='flex justify-evenly items-center my-7 space-x-1 mx-1'>
				<button
					className={`btn-toggle ${toggle === 1 && 'btn-toggle-active'}`}
					onClick={() => {
						setToggle(1);
					}}
				>
					Build
				</button>
				<button
					className={`btn-toggle ${toggle === 2 && 'btn-toggle-active'}`}
					onClick={() => {
						setToggle(2);
					}}
				>
					Repair
				</button>
				<button
					className={`btn-toggle ${toggle === 3 && 'btn-toggle-active'}`}
					onClick={() => {
						setToggle(3);
					}}
				>
					Maintenance
				</button>
			</div>
		</div>
	);
};

export default ToggleServices;
