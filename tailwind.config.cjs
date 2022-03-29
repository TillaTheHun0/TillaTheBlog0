module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,md}'],
  plugins: [require("daisyui")],
  // more options here
};