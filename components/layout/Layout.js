import Footer from './footer/Footer';
import Navbar from './navigation/Navbar';

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col h-screen'>
			<motion className='z-20'>
				<Navbar />
			</motion>
			<main className='flex-grow'>{children}</main>
			<Footer />
		</div>
	);
};
export default Layout;
