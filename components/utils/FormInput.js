const FormInput = ({ type, placeholder }) => {
	return (
		<div className="text-black">
			<input type={type} placeholder={placeholder} className="inputs" />
		</div>
	);
};

export default FormInput;
