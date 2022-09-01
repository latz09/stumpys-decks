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
			<DeckServicePageHero />
			<ToggleServices setToggle={setToggle} toggle={toggle} />
            <ServiceDisplay services={services.filter(service => service.category === data)} />

		</>
	);
};

export default DeckServices;
