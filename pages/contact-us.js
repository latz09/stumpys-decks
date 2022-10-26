import ContactForm from '../components/contact/ContactForm';
import { motion } from 'framer-motion';

const Contact = () => {
	return (
		<div className=' my-7 '>
			{/* <div className='bg-blue text-white text-center  text-2xl md:text-4xl font-bold tracking-wider flex justify-center pt-12 pb-20'>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2, duration: 1.4 }}
				>
					We look forward to hearing from you!
				</motion.p>
			</div> */}
			<div className='text-blue tracking-widest text-center  text-2xl md:text-4xl font-semibold flex justify-center md:py-12 px-2'>
				<motion.p
					initial={{ opacity: 1 }}
					animate={{ opacity: .5 }}
					transition={{ delay: 1.2, duration: 4 }}
				>
					Please fill out our form and you will get back to you
				</motion.p>
			</div>
			<div className='grid gap-4 mx-[6px] md:w-1/2 md:mx-auto'>
				<motion.div
					className='bg-white '
					initial={{ y: '100vh' }}
					animate={{ y: 0 }}
					transition={{ delay: 1, duration: 1.6 }}
				>
					<div className="">
						<ContactForm />
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;
// <div className='bg-gray-50 '>
// 	<div className='max-w-7xl mx-auto grid py-12 px-1 '>
// 		<div className='grid md:grid-cols-2 gap-4 place-items-center'>
// 			<ContactForm />
// 			<div className="bg-yellow-400 p-2">
// 				<div className='grid justify-items-center gap-3 text-3xl md:text-5xl tracking-wide  text-center bg-yellow-600 text-white p-12  shadow-lg '>
// 					<h1 className=''>We Look Forward to hearing from you!</h1>
// 					<span className='text-xl md:text-3xl'>
// 						Please fill out this form and we will get back to you.
// 					</span>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
