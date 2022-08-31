import { SiHouzz, SiHomeadvisor } from 'react-icons/si';

const FollowUs = () => {
	return (
		<div className='grid gap-3 text-md md:text-lg text-gray-100'>
			<h1 className='text-white ml-1 text-xl '>Find Us On</h1>
			<a
				href='https://www.houzz.com/professionals/decks-patios-and-outdoor-enclosures/stumpy-s-deck-restoration-inc-pfvwus-pf~941637815'
				target='_blank.'
				rel='noreferrer'
				className='flex space-x-3 items-center'
			>
				<span className=' md:text-xl ml-1 text-gray-800'>
					<SiHouzz />{' '}
				</span>
				<span>Houzz</span>
			</a>
			<a
				href='https://www.homeadvisor.com/rated.StumpysDeckRenewal.33537883.html'
				target='_blank.'
				rel='noreferrer'
				className='flex space-x-3 items-center'
			>
				<span className='text-xl md:text-2xl text-gray-800'>
					<SiHomeadvisor />{' '}
				</span>
				<span>Home Advisor</span>
			</a>
		</div>
	);
};

export default FollowUs;
