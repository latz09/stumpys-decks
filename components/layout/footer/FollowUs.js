import { SiHouzz, SiHomeadvisor } from 'react-icons/si';

const FollowUs = () => {
	return (
		<div className='grid gap-3 text-lg md:text-xl text-gray-900'>
			<h1 className='text-white text-center text-2xl '>Find Us On</h1>
			<a
				href='https://www.houzz.com/professionals/decks-patios-and-outdoor-enclosures/stumpy-s-deck-restoration-inc-pfvwus-pf~941637815'
				target='_blank.'
				rel='noreferrer'
				className='flex space-x-3 items-center btn p-1'
			>
				<span className=' md:text-3xl pl-1 text-gray-800'>
					<SiHouzz />{' '}
				</span>
				<span>Houzz</span>
			</a>
			<a
				href='https://www.homeadvisor.com/rated.StumpysDeckRenewal.33537883.html'
				target='_blank.'
				rel='noreferrer'
				className='flex space-x-3 items-center btn p-1'
			>
				<span className='text-2xl md:text-4xl text-gray-800'>
					<SiHomeadvisor />{' '}
				</span>
				<span>Home Advisor</span>
			</a>
		</div>
	);
};

export default FollowUs;
