/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    colors: {
      'white': '#f4f4f5',
      'gray': '#d4d4d8',
      'primary':'#1d4ed8',
      'primary-hover': '#1e3a8a',
      'whatsapp': '#22c55e'
    },
		extend: {},
	},
	plugins: [],
}
