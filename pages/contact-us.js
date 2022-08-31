import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
	return (
		<div className='bg-gray-50 '>
			<div className='max-w-7xl mx-auto grid py-12 px-1 '>
				<div className='grid md:grid-cols-2 gap-4 place-items-center'>
					<ContactForm />
					<div className="bg-yellow-400 p-2">
						<div className='grid justify-items-center gap-3 text-3xl md:text-5xl tracking-wide  text-center bg-yellow-600 text-white p-12  shadow-lg '>
							<h1 className=''>We Look Forward to hearing from you!</h1>
							<span className='text-xl md:text-3xl'>
								Please fill out this form and we will get back to you.
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
