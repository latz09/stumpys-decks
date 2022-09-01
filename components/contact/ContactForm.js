import FormInput from '../utils/FormInput';

const ContactForm = () => {
	return (
		<form className='grid gap-6 place-items-center tracking-wider shadow-lg px-3 py-8  bg-white'>
			<h1 className='text-3xl md:text-4xl text-center text-gray-700 mb-2'>Please fill out this form and we will get back to you.</h1>
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
				<textarea className='w-full resize-none inputs' rows='8'></textarea>
			</div>
			<div>
				<button className='btn px-4 py-2 text-2xl bg-blue text-white tracking-widest '>
					Submit
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
