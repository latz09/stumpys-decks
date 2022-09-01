import DeckServicePageHero from '../components/layout/heros/DeckServicePageHero';
import ToggleServices from '../components/services/decks/ToggleServices';
import { services } from '../data/services';
import { useState, useEffect } from 'react';
import ServiceDisplay from '../components/services/decks/ServiceDisplay';

const DeckServices = () => {
	const [toggle, setToggle] = useState('deck-building');
    const [data, setData] = useState(toggle);
    useEffect(() => {
       setData(toggle)
    }, [toggle]);    

	return (
		<>
			{/* <DeckServicePageHero /> */}
            <h1 className="text-center text-orange  text-5xl pt-4 md:pt-8">Deck Services</h1>
			<ToggleServices setToggle={setToggle} toggle={toggle} />
            <ServiceDisplay services={services.filter(service => service.category === data)} />

		</>
	);
};

export default DeckServices;
