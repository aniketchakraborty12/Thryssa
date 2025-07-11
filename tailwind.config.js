/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Important for dark mode toggle
    content: [
        './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    ],
    theme: {
        extend: {},
    },
    plugins: [
    require('@tailwindcss/typography'),
    ],
};
