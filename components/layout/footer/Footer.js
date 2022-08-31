import FollowUs from './FollowUs';
import FooterContact from './footerContact';

const Footer = () => {
	return (
		<div className='bg-yellow-600 py-3 tracking-widest'>
			<div className='max-w-7xl mx-auto grid grid-cols-2 items-center px-2'>
				<FooterContact />
				<div className='justify-self-end md:justify-self-center'>
					<FollowUs />
				</div>
			</div>
		</div>
	);
};

export default Footer;
