import Image from 'next/image';
import fence from '../../../public/images/heros/fence.jpg';
import ButtonLink from '../../utils/ButtonLink';

const FenceHero = () => {
	return (
		<div className='relative w-full h-[80vh]'>
			<Image
				src={fence}
				alt=''		
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-50'>
				<div className='max-w-6xl mx-auto  text-white  tracking-widest  '>
					<div className='grid gap-3 mx-3 text-center text-gray-100 '>
						<span className='text-5xl font-bold'>Fences and Railings</span>
						<span className='text-3xl '>Installation and repairs</span>
						<div className='mt-3 text-3xl'>
							<ButtonLink title={'Learn more'} to={'/'} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FenceHero;
