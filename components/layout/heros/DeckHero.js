import Image from 'next/image';
import deck from '../../../public/images/heros/servicespage.jpg';
import ButtonLink from '../../utils/ButtonLink';
import FadeInContainer from '../../utils/animations/FadeInContainer';
import { motion } from 'framer-motion';

const DeckHero = () => {
	return (
		<div className='relative w-full h-[85vh]'>
			<Image
				src={deck}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='bottom'
				placeholder='blur'
			/>

			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-50'>
				<div className='max-w-6xl mx-auto text-center text-white  tracking-widest  '>
					<div className='grid gap-3'>
						<h1 className='text-6xl md:text-6xl text-yellow-400 font-bold'>{`Stumpy's Deck Restoration, Inc.`}</h1>
						<FadeInContainer duration='1' delay='2'>
							<h2 className='text-2xl md:text-3xl text-gray-50'>
								The Twin Cities most respected decking company for over two
								decades
							</h2>
						</FadeInContainer>
					</div>
					<motion.div
						className='text-3xl mt-12 text-gray-50'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.7, duration: 2 }}
					>
						<ButtonLink to={'/contact-us'} title={'Contact'} />
					</motion.div>
				</div>
			</div>
		</div>
	);
};
export default DeckHero;
