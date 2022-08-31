import ReviewItem from './ReviewItem';

const Reviews = ({ reviews }) => {
	return (
		<div className='max-w-7xl mx-auto grid lg:grid-cols-3 gap-4  py-12'>
			{reviews.map((review) => (
				<div key={review.name}>
					<ReviewItem name={review.name} review={review.review} />
				</div>
			))}
		</div>
	);
};

export default Reviews;
