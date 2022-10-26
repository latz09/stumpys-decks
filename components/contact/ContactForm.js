import FormInput from '../utils/FormInput';

const ContactForm = () => {
	return (
		<form className='grid gap-6 place-items-center tracking-wider py-8 shadow-lg px-1 md:px-4'>
			<h1 className='text-3xl md:text-4xl text-center text-gray-500 font-normal mb-2'>We look forward to hearing from you!</h1>
			<div className='grid lg:grid-cols-2 gap-5 place-items-center px-2'>
				<FormInput type='text' placeholder='Name...' />
				<FormInput type='email' placeholder='Email...' />
				<FormInput type='tel' placeholder='Phone Number...' />
				<FormInput type='text' placeholder='Zipcode...' />
			</div>
			<div className='w-full text-center grid gap-4'>
				<h1 className='text-2xl text-gray-400 font-bold'>
					Tell us a little bit about your project
				</h1>
				<textarea className='w-full resize-none inputs border-gray-200 focus:ring-0 ring-0 focus:border-gray-700' rows='8'></textarea>
			</div>
			<div>
				<button className='btn px-4 py-2 text-2xl bg-blue text-white tracking-widest font-bold'>
					Send
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
