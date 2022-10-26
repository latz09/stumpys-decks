import { motion } from 'framer-motion';

const FadeInContainer = ({ children }) => {

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.5, delay: .6 }}
		>
			{children}
		</motion.div>
	);
};

export default FadeInContainer;


