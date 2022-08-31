import Form from '../components/contact/ContactForm';

const Contact = () => {
	return (
		<div className='bg-gray-50 py-12'>
			<div className='max-w-7xl mx-auto grid py-12 px-1 '>
				<div className='grid md:grid-cols-2 gap-4 place-items-center'>
					<div className='grid justify-items-center gap-3 text-3xl md:text-5xl tracking-wide text-orange pb-7 text-center mx-1'>
						<h1>We Look Forward to hearing from you!</h1>
						<span className='text-xl md:text-3xl'>
							Please fill out this form and we will get back to you.
						</span>
					</div>
					<Form />
				</div>
			</div>
		</div>
	);
};

export default Contact;
