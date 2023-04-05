/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#EFF5F5',
				secondary: '#497174',
				tertiary: '#EB6440',
				quartenary: '#D6E4E5'
			},
			screens: {
				xs: { max: '425px' }
			}
		}
	},
	plugins: []
};
