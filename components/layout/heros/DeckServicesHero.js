import Image from 'next/image';
import deck from '../../../public/images/heros/deckhero2.jpg';
import { IoIosArrowDown } from 'react-icons/io';
import { motion } from 'framer-motion';

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
					<div className='grid gap-3 mx-3  text-gray-100 '>
						<motion.div
							initial={{ opacity: 0, scale: 0.2 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: 1, duration: 1.2 }}
							className='text-5xl font-bold'
						>
							We got you covered
						</motion.div>
						<div className='text-3xl '>
							From full deck builds to deck repair and maintenance
						</div>
						<span className='place-self-center text-5xl text-orange animate-pulse'>
							<IoIosArrowDown />{' '}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeckServicesHero;
