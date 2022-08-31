import Image from 'next/image';
import deck from '../../../public/images/heros/deckhero2.jpg';


const DeckServicesHero = () => {
	return (
		<div className='relative w-full h-[60vh]'>
			<Image
				src={deck}
				alt=''			
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-70'>
				<div className='max-w-6xl mx-auto  text-white  tracking-widest  '>
					<div className='grid gap-3 mx-3 text-center text-gray-100 '>
						<span className='text-5xl font-bold'>We got you covered</span>
						<span className='text-3xl '>
							From full deck builds to deck repair and maintenance
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeckServicesHero;
