/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./src/**/*.{js,jsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDFDFE',
          100: '#FAFAFB',
          200: '#EAEFFA',
          300: '#CEE1F7',
          400: '#A4B7EE',
          500: '#7D90E4',
          600: '#6372D9',
          700: '#4C5BC0',
          800: '#3945A1',
          900: '#2B3683',
        },
        secondary: {
          50: '#FBFCFE',
          100: '#F8FAFF',
          200: '#E6EEFB',
          300: '#C7DDED',
          400: '#9EB8D8',
          500: '#7890C5',
          600: '#5F72B5',
          700: '#4A58A0',
          800: '#38447E',
          900: '#2B3561',
        },
        accent: {
          50: '#FEFCFD',
          100: '#FEF9FB',
          200: '#FCEAF7',
          300: '#F8D2EB',
          400: '#EEA8D7',
          500: '#E17EBE',
          600: '#CE5B9E',
          700: '#A7437D',
          800: '#82325D',
          900: '#642848',
        },
      },
    },
},
plugins: [],
}

