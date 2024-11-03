/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
  daisyui: {
    themes: [
  "light"
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sen'],
        inter: ['Inter'],
      },
      fontSize: {
        xs: '10px',
        sm: '14px',
        base: '16px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '36px',
        '5xl': '48px',
      },
      colors: {
        'x-black': '#232536',
        'x-blue': '#075EFD',
        'x-yellow': '#FFD050',
        'x-dark-grey': '#4C4C4C',
        'x-medium-grey': '#6D6E76',
        'x-lavender-grey': '#F4F0F8',
        'x-light-yellow': '#FBF6EA',
        'x-light-grey': '#F4F4F4',
      },
      backgroundImage: {
        home: 'url("../assets/images/bg-home.svg")',
        about: 'url("../assets/images/bg-about.svg")',
      },
    },
  },
  plugins: [daisyui],
}
