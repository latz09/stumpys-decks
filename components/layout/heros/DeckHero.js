import Image from 'next/image';
import deck from '../../../public/images/heros/deckhero.jpg';
import ButtonLink from '../../utils/ButtonLink';

const DeckHero = () => {
	return (
		<div className='relative w-full h-[85vh]'>
			<Image
				src={deck}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='top'
				placeholder='blur'
			/>

			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-50'>
				<div className='max-w-6xl mx-auto text-center text-white  tracking-widest  '>
					<div className='grid gap-3'>
						<h1 className='text-6xl md:text-6xl text-yellow-400 font-bold'>{`Stumpy's Deck Restoration, Inc.`}</h1>
						<h2 className='text-2xl md:text-3xl text-gray-50'>
							The Twin Cities most respected decking company for over two
							decades
						</h2>
					</div>
					<div className='text-3xl mt-12 text-gray-50'>
						<ButtonLink to={'/'} title={'Contact'} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default DeckHero;
