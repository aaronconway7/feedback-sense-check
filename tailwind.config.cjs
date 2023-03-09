const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			navy: { DEFAULT: '#202634', 90: '#353A47' },
			orange: '#D59640',
			grey: '#F0F0F0'
		},
		fontFamily: {
			sans: ['Satoshi', ...defaultTheme.fontFamily.sans],
			serif: ['Meriweather', ...defaultTheme.fontFamily.serif]
		}
	},
	plugins: []
};
