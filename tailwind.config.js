/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		fontFamily: {
			custom: ['Roboto Slab', 'serif'],
		},
		colors: {
			blue: '#1865B3',
			yellow: {
				400: '#FFD204',
				600: '#D0AA00',
			},
			orange: '#C08000',
			black: '#000000',
			white: '#FFFFFF',
			gray: {
				50: '#f9fafb',
				100: '#f3f4f6',
				200: '#e5e7eb',
				300: '#d1d5db',
				400: '#9ca3af',
				500: '#6b7280',
				600: '#4b5563',
				700: '#374151',
				800: '#1f2937',
				900: '#111827',
			},
		},
	},
	plugins: [],
};
