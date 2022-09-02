import { gallery } from '../data/gallery';
import Image from 'next/image';

const Gallery = () => {
	
	return (
		<div className='bg-gray-100 py-9'>
			<div className='max-w-7xl mx-auto grid xl:grid-cols-2 gap-4 place-items-center'>
				{gallery.map((image) => (
					<div key={image.id} className="border grid items-center shadow-lg m-1 md:m-8 hover:scale-105 hover:xl:scale-125 hover:shadow-xl hover:border-2 border-white transition duration-700">
						<Image
							src={image.image}
							alt=''
							layout='intrinsic'
							placeholder='blur'
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Gallery;
