import deckBuild from '../public/images/decks/build-a-deck.jpg';
import deckClean from '../public/images/decks/deck-cleaning.jpg';
import deckRepair from '../public/images/decks/deck-repair.webp';
import deckStain from '../public/images/decks/deck-staining.jpg';
import deckRefinish from '../public/images/decks/deck-refinishing.jpg';

export const services = [
	{
		category: 'deck-building',
		title: 'Full Build',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Accumsan sit amet nulla facilisi.',
		featuredImage: deckBuild,
		images: [
			{
				title: 'Build a deck',
				image: deckBuild,
			},
			{
				title: '',
				image: '',
			},
		],
	},
	{
		category: 'deck-cleaning',
		title: 'Cleaning',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Accumsan sit amet nulla facilisi.',
		featuredImage: deckClean,
		images: [
			{
				title: 'Clean a deck',
				image: deckClean,
			},
			{
				title: '',
				image: '',
			},
		],
	},
	{
		category: 'deck-repair',
		title: 'Repair',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Accumsan sit amet nulla facilisi.',
		featuredImage: deckRepair,
		images: [
			{
				title: 'Repair a deck',
				image: deckRepair,
			},
			{
				title: '',
				image: '',
			},
		],
	},
	{
		category: 'deck-staining',
		title: 'Staining',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Accumsan sit amet nulla facilisi..',
		featuredImage: deckStain,
		images: [
			{
				title: 'Stain a deck',
				image: deckStain,
			},
			{
				title: '',
				image: '',
			},
		],
	},
	{
		category: 'deck-refinishing',
		title: 'Refinishing',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Accumsan sit amet nulla facilisi.',
		featuredImage: deckRefinish,
		images: [
			{
				title: 'Refinish a deck',
				image: deckRefinish,
			},
			{
				title: '',
				image: '',
			},
		],
	},
];

//
// {
//     category: '',
//     title: '',
//     description: '',
//     images: [
//         {
//             title: '',
//             image: '',
//         },
//         {
//             title: '',
//             image: '',
//         },
//     ],
// },
