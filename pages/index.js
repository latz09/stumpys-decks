import { services } from '../data/services';
import { reviews } from '../data/reviews';
import AboutBlurb from '../components/about/AboutBlurb';
import DeckHero from '../components/layout/heros/DeckHero';
import DeckServicesHero from '../components/layout/heros/DeckServicesHero';
import FeaturedServices from '../components/services/decks/FeaturedServices';
import FenceHero from '../components/layout/heros/FenceHero';
import Reviews from '../components/reviews/Reviews';
import ButtonLink from '../components/utils/ButtonLink';

export default function Home() {
	return (
		<div>
			<DeckHero />
			<AboutBlurb />
			<DeckServicesHero />
			<FeaturedServices services={services} />
			<FenceHero />
			<Reviews reviews={reviews.slice(2)} />
			<div className="pb-8 grid justify-center text-white text-2xl">
				<ButtonLink to={'/contact-us'} title={'Contact us!'} />
			</div>
		</div>
	);
}
