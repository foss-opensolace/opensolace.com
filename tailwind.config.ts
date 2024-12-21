import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#2F8F8B',
				secondary: '#B86A40',
				accent: '#171717',
				dark: '#090A0A',
				light: '#D9D9D9'
			}
		}
	},
	plugins: [typography, forms]
} satisfies Config;
