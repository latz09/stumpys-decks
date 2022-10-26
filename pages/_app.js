import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { AnimatePresence, motion } from 'framer-motion';
function MyApp({ Component, pageProps, router }) {
	const pageAnimateVariable = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 0.3,
				duration: 0.8,
			},
		},
		exit: { opacity: 0, transition: { duration: 0.3 } },
	};

	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta httpEquiv='Content-Type' content='text/html; charSet=utf-8' />
				<link rel='shortcut icon' href='/images/logos/favicon.jpg' />
			</Head>
			<div>
				<Layout>
					<AnimatePresence mode='wait'>
						<motion.div
							className='font-thin'
							key={router.route}
							variants={pageAnimateVariable}
							initial='hidden'
							animate='visible'
							exit='exit'
						>
							<Component {...pageProps} />
						</motion.div>
					</AnimatePresence>
				</Layout>
			</div>
		</>
	);
}
export default MyApp;
