import Image from 'next/image';
import ButtonLink from '../../utils/ButtonLink';

const ServiceDisplay = ({ services }) => {	

	return (
		<div className='grid gap-4 md:grid-cols-2 max-w-6xl mx-auto py-12'>
			<div className='grid items-center '>
				<div className="grid items-center shadow-lg">
					<Image
						src={services[0].featuredImage}
						alt={services[0].category}
						layout='intrinsic'
					/>
				</div>
			</div>
			<div className='grid tracking-widest leading-6'>
				<h1 className='text-center text-4xl py-3 text-orange font-bold'>{services[0].title}</h1>
				<div className='px-3 lg:text-xl'>{services[0].description}</div>
				<div className='px-3 lg:text-xl mt-4 lg:mt-8'>{services[0].description}</div>
				<div className='text-white mt-8 grid justify-center text-xl'>
					<ButtonLink to={'/contact-us'} title='Request a quote' />
				</div>
			</div>
		</div>
	);
};

export default ServiceDisplay;