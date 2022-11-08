import ButtonLink from '../../utils/ButtonLink';
import FeaturedItem from './FeaturedItem';

const FeaturedServices = ({ services }) => {
	return (
		<div className='text-gray-700 '>
			<div className='grid xl:grid-cols-4 place-items-center max-w-7xl mx-auto'>
				<div className='xl:col-span-2 grid gap-6 justify-items-center  tracking-wider '>
					<h1 className='text-4xl xl:text-6xl text-orange font-bold tracking-wider text-center'>Deck Services</h1>
					<div className='hidden xl:block text-lg xl:text-3xl mt-4 text-white'>
						<ButtonLink to={'/gallery'} title={'Gallery'} />
					</div>
				</div>

				<div className='xl:col-start-3 xl:col-span-2 grid  gap-2 mt-12'>
					{services.map((service) => (
						<div key={service.title}>
							<FeaturedItem
								description={service.description}
								title={service.title}
							/>
						</div>
					))}
				<div className='xl:hidden text-lg xl:text-3xl mt-8 text-white'>
					<div className="text-center">
						<ButtonLink to={'/gallery'} title={'Gallery'} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedServices;
