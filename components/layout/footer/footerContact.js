import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';

const FooterContact = () => {
	return (
		<div className='grid gap-2  md:text-lg text-white justify-items-center'>
			<h1 className='text-xl md:text-2xl'>{`Stumpys Deck Restoration, Inc.`}</h1>
			<div className='flex space-x-3 items-center'>
				<span>
					<AiOutlineMail />
				</span>
				<span>{`stumpysrequest@gmail.com`}</span>
			</div>
			<div className='flex space-x-3 items-center'>
				<span>
					<AiFillPhone />{' '}
				</span>
				<span>{`651 208-2371`}</span>
			</div>
		</div>
	);
};

export default FooterContact;
