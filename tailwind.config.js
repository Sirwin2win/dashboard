/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1536px'
    },
    extend: {
      colors : {
        brightRed : 'hsl(12, 88%, 59%)',
        brightRedLight : 'hsl(12, 88%, 68%)',
        brighRedSupLight : 'hsl(12, 88%, 95%)',
        brightOrange : 'hsl(31, 100%, 48%)',
        darkBlue : 'hsl(228, 39%, 23%)',
        lightGreen: 'hsl(120, 100%, 50%)',
        leftDivColor:'hsla(44, 73%, 93%, 1)',
        burlywood: 'rgb(222,184,135)',
        resenderGreen : '#586449',
        productOrange: '#FFE5CA'
      }
    },
  },
  plugins: [],
}

