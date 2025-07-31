module.exports = {
  darkMode: 'class',
  safelist: [
    'dark',
    'dark:bg-black',
    'dark:bg-gray-950',
    'dark:text-gray-100',
  ],  
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../**/*.{js,ts,jsx,tsx}",
  ],
  theme: { /* ... */ },
  plugins: [],
}