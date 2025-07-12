/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Important for dark mode toggle
    module.exports = {
  content: ['./src/**/*.{astro,js,ts,jsx,tsx,md,mdx}'],
  theme: { extend: {} },
  plugins: [],
}

    theme: {
        extend: {},
    },
    plugins: [
    require('@tailwindcss/typography'),
    ],
};
