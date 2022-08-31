import Image from 'next/image';
import mnOutline from '../../public/images/logo.png';
 
const AboutBlurb = () => {
	return (
		<div className='grid gap-4 md:grid-cols-2 place-items-center max-w-7xl mx-auto py-12'>
			<div className=''>
				<Image src={mnOutline} alt='' />
			</div>
			<div className='text-lg md:text-2xl tracking-wider grid gap-2 px-3 '>
				<span>
					Serving the Twin Cities since 1983,{' '}
					<span className=''>
						{`Stumpy's Home Services`}{' '}
					</span>{' '}
					has built a reputation as your go to team for your home improvement
					needs.
				</span>
				<span>
				When you want it done right...{' '}
					<span className='text-blue font-bold '>
						{`Call Stumpy's.`}{' '}
					</span>{' '}
					You will certainly receive the care and attention we have provided to hundreds of local customers.
				</span>
			</div>
		</div>
	);
};

export default AboutBlurb;
