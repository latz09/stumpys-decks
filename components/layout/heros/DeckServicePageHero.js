import Image from 'next/image';
import deck from '../../../public/images/heros/servicespage.jpg';
import { IoIosArrowDown } from 'react-icons/io';
const DeckServicePageHero = () => {
	return (
		<div className='relative w-full h-[90vh]'>
			<Image
				src={deck}
				alt=''
				layout='fill'
				objectFit='cover'
				objectPosition='left'
				placeholder='blur'
			/>

			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-50'>
				<div className='max-w-6xl mx-auto text-center  text-white  tracking-widest  '>
					<div className='grid gap-3 mx-3  text-gray-100 '>
						<span className='text-3xl md:text-5xl font-bold'>Deck Services</span>

						<span className='place-self-center text-4xl md:text-5xl text-blue animate-pulse'>
							<IoIosArrowDown />{' '}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeckServicePageHero;
