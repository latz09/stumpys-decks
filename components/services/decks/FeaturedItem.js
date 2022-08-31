import Link from 'next/link';

const FeaturedItem = ({ title, description }) => {
	return (
		<div className='grid gap-2 text-lg hover:shadow onhover p-3'>
			<h1 className='text-4xl text-orange text-center'>{title}</h1>
			<p>{description}</p>
			<Link href={'/deck-services'}>
				<a className='place-self-end mr-3 btn px-2 py-1 bg-orange text-white'>Learn More</a>
			</Link>
		</div>
	);
};

export default FeaturedItem;
