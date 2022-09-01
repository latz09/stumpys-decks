import Image from 'next/image';
import mnOutline from '../../public/images/logo.png';
import { awards } from '../../data/awards'; 

const AboutBlurb = () => {
	return (
		<div className='grid gap-8 md:grid-cols-2 place-items-center max-w-7xl mx-auto py-12'>
			<div className='grid grid-cols-4 items-center gap-7 px-8 order-2 '>
				{awards.map(award => (
					<div key={award.title} className="">
						<Image src={award.image} alt={award.title} layout='intrinsic' />
					</div>
				))}
				
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
