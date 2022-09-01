import { SiHouzz, SiHomeadvisor } from 'react-icons/si';
import NewWindowLink from '../../utils/NewWindowLink';

const FollowUs = () => {
	const houzzLink =
		'https://www.houzz.com/professionals/decks-patios-and-outdoor-enclosures/stumpy-s-deck-restoration-inc-pfvwus-pf~941637815';

	const homeAdvisorLink =
		'https://www.homeadvisor.com/rated.StumpysDeckRenewal.33537883.html';

	return (
		<div className='grid gap-3 text-md md:text-lg text-gray-100'>
			<h1 className='text-white ml-1 text-xl '>Find Us On</h1>
			<NewWindowLink to={houzzLink}>
				<div className='flex space-x-3 items-center'>
					<span className=' md:text-xl ml-1 text-gray-800'>
						<SiHouzz />{' '}
					</span>
					<span>Houzz</span>
				</div>
			</NewWindowLink>
			<NewWindowLink to={homeAdvisorLink}>
				<div className='flex space-x-3 items-center'>
					<span className=' md:text-2xl ml-1 text-gray-800'>
						<SiHomeadvisor />{' '}
					</span>
					<span>Home Advisor</span>
				</div>
			</NewWindowLink>
		</div>
	);
};

export default FollowUs;
