import ReviewItem from './ReviewItem';
import { motion } from 'framer-motion';

const Reviews = ({ reviews }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ delay: 0.8, duration: 1 }}
			className='max-w-7xl mx-auto grid lg:grid-cols-3 gap-4  my-12'
		>
			{reviews.map((review) => (
				<div
					key={review.name}
					
				>
					<ReviewItem name={review.name} review={review.review} />
				</div>
			))}
		</motion.div>
	);
};

export default Reviews;
