import Image from 'next/image';
import fence from '../../../public/images/heros/fence.jpg';
import ButtonLink from '../../utils/ButtonLink';
import { motion } from 'framer-motion';
const FenceHero = () => {
	return (
		<div className='relative w-full h-[60vh]'>
			<Image
				src={fence}
				alt=''
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-50'>
				<div className='max-w-7xl mx-auto  text-gray-200  tracking-widest  '>
					<div className='grid gap-10 mx-2 text-center  '>
						<motion.div
							className='grid gap-2'
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.3, duration: 1 }}
						>
							<span className='text-5xl font-bold'>Fences and Railings</span>
							<span className='text-3xl '>Installation and repairs</span>
						</motion.div>
						<motion.div
							className=' text-lg md:text-2xl'
							initial={{ scale: 0.99 }}
							whileInView={{ scale: 1.04 }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: 'reverse',
							}}
						>
							<ButtonLink title={'Learn more'} to={'/fences-railings'} />
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FenceHero;


