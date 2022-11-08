import FollowUs from './FollowUs';
import FooterContact from './footerContact';

const Footer = () => {
	return (
		<div className='bg-yellow-600 py-20 tracking-widest'>
			<div className='max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 justify-center items-center px-2'>
				<FooterContact />
				<div className='justify-self-center lg:justify-self-end md:justify-self-center'>
					<FollowUs />
				</div>
			</div>
		</div>
	);
};

export default Footer;
