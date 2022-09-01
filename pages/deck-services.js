import DeckServicePageHero from '../components/layout/heros/DeckServicePageHero';
import ToggleServices from '../components/services/decks/ToggleServices';
import { services } from '../data/services';
import ButtonLink from '../components/utils/ButtonLink';
import { useState } from 'react';
import Build from '../components/services/decks/Build';
import Repair from '../components/services/decks/Repair';
import Maintenance from '../components/services/decks/Maintenance';

const DeckServices = () => {
	const [toggle, setToggle] = useState(1);

	return (
		<>
			<DeckServicePageHero />
			<ToggleServices setToggle={setToggle} toggle={toggle} />
			{toggle === 1 && (
				<Build
					services={services.filter(
						(service) => service.category === 'deck-building'
					)}
				/>
			)}
			{toggle === 2 && (
				<Repair
					services={services.filter(
						(service) => service.category === 'deck-repair'
					)}
				/>
			)}
			{toggle === 3 && (
				<Maintenance
					services={services.filter(
						(service) =>
							service.category !== 'deck-building' &&
							service.category !== 'deck-repair'
					)}
				/>
			)}

			<div className='text-white py-24 grid justify-center'>
				<ButtonLink to={'/contact-us'} title='Request a quote' />
			</div>
		</>
	);
};

export default DeckServices;
