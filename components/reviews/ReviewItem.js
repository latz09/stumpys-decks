import StarGeneratior from '../utils/StarGenerator';

const ReviewItem = ({ name, review }) => {
	return (
		<div className='grid gap-2 tracking-wider p-8'>
			<span className="text-xl md:text-3xl font-bold text-gray-600 ">{name}</span>
			<span>
				<StarGeneratior />
			</span>
			<span className="text-lg text-gray-800 text-justify mt-3">{review}</span>
		</div>
	);
};

export default ReviewItem;


0

// "We hired this company to rebuild our deck that another company butchered a few years back.  The quality of Stumpy's work was very evident from top to bottom.  Even the city inspector mentioned how impressed he was with the rebuilt deck.   The difference was night and day.  "



