const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit', // ⚠ Make sure to have this
	purge: ['./src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
			serif: ['Playfair Display', 'serif']
		},
		container: {
			center: true
		},
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
