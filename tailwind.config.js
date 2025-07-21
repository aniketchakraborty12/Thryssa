/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./src/**/*.{astro,js,ts,jsx,tsx,md,mdx}'],
    theme: {
        extend: {},
    },
    plugins: [
    require('@tailwindcss/typography'),
    ],
};
