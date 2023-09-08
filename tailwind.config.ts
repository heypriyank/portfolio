import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    boxShadow: {
      card: '0px 35px 120px -15px #1f1f1f',
      cardLight: '0px 19px 38px #eaeaec, 0px 15px 12px #eaeaec',
    },
    screens: {
      xs: '450px',
      sm: '640px',
      md: '768px',
      xmd: '900px',
      lg: '1025px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1800px',
    },
    colors: {
      // primary: '#050816',
      // secondary: '#aaa6c3',
      // tertiary: '#151030',
      // 'black-100': '#100d25',
      // 'black-200': '#090325',
      // 'white-100': '#f3f3f3',
      // flashWhite: '#f4f4f6',
      // platinum: '#e6e6e9',
      // platinumLight: '#f4f4f5',
      // timberWolf: '#d4d4d8',
      // taupe: '#9999a1',
      // silver: '#d6d6d6',
      // dim: '#66666e',
      battleGray: '#858585',
      french: '#b5b5ba',
      night: '#141414',
      jet: '#292929',
      jetLight: '#333333',
      jetGray: '#6d6d74',
      richBlack: '#2e2e2e',
      eerieBlack: '#1f1f1f',
      onyx: '#5b5b5b',
    },
  },
  plugins: [],
}
export default config
