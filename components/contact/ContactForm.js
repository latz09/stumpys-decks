import FormInput from '../utils/FormInput';

const Form = () => {
	return (
		<form className='grid gap-6 place-items-center tracking-wider shadow-lg px-3 py-8'>
			<h1 className='text-3xl md:text-4xl text-orange'>Contact us</h1>
			<div className='grid grid-cols-2 gap-5 place-items-center px-2'>
				<FormInput type='text' placeholder='Name...' />
				<FormInput type='email' placeholder='Email...' />
				<FormInput type='tel' placeholder='Phone Number...' />
				<FormInput type='text' placeholder='Zipcode...' />
			</div>
			<div className="w-full text-center grid gap-4">
				<h1 className="text-2xl text-gray-600">Tell us a little bit about your project</h1>
				<textarea className='w-full resize-none' rows='8'></textarea>
			</div>
			<div>
				<button className='btn px-4 py-2 text-2xl bg-orange text-white tracking-widest '>
					Submit
				</button>
			</div>
		</form>
	);
};

export default Form;
