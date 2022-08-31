import ButtonLink from '../../utils/ButtonLink';
import FeaturedItem from './FeaturedItem';

const FeaturedServices = ({ services }) => {
	return (
		<div className='py-12 bg-gray-100 text-gray-700 '>
			<div className='grid md:grid-cols-4 place-items-center max-w-7xl mx-auto'>
				<div className='md:col-span-2 grid gap-6 justify-items-center  tracking-wider '>
					<h1 className='text-4xl md:text-6xl text-orange font-bold tracking-wider text-center'>Deck Services</h1>
					<div className='text-lg md:text-3xl mt-4 text-white'>
						<ButtonLink to={'/'} title={'Request Quote'} />
					</div>
				</div>

				<div className='md:col-start-3 md:col-span-2 grid  gap-2 mt-12'>
					{services.map((service) => (
						<div key={service.title}>
							<FeaturedItem
								description={service.description}
								title={service.title}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FeaturedServices;
