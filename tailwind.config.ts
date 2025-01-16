import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

import typographyStyles from './typography';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)', 'sans-serif'],
        galmuri11: ['var(--font-galmuri11)', 'sans-serif'],
      },
      colors: {
        'cotam-red': {
          5: '#FFF1F0',
          10: '#FFE0DD',
          20: '#FFC6C1',
          30: '#FF9E95',
          40: '#FF6759',
          50: '#FF3E2C',
          60: '#FD230F',
          70: '#D51200',
          80: '#B01204',
          90: '#91160B',
          95: '#500700',
        },
        'cotam-blue': {
          5: '#ECEFFF',
          10: '#DDE1FF',
          20: '#C2C8FF',
          30: '#9CA3FF',
          40: '#7775FF',
          50: '#6051FF',
          60: '#5636F5',
          70: '#4A2AD8',
          80: '#3C25AE',
          90: '#342689',
          95: '#201650',
          100: '#08072D',
        },
        'cotam-gray': {
          5: '#F6F6F9',
          10: '#ECEDF3',
          20: '#D6D7E1',
          30: '#B2B5C7',
          40: '#888EA8',
          50: '#69708E',
          60: '#545975',
          70: '#45495F',
          80: '#3B3E51',
          90: '#353745',
          95: '#23242E',
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(typographyStyles);
      const newUtilities = {
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.flex-col-center': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.bg-pixel-gradient': {
          backgroundImage: "url('/assets/background/PixelGradient.png')",
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
export default config;
