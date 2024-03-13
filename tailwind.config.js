/** @type {import('tailwindcss').Config} */

const {join} = require('path');

import { spacingValues } from './src/assets/tailwind_config/unit-conversion';
const variables = require('./src/assets/tailwind_config/variables');
const breakpoints = require('./src/assets/tailwind_config/breakpoints');

module.exports = {
  content: [
    join(__dirname, './src/**/!(*.stories|*.spec).{ts,html}'),
    "./src/**/*.{html,ts}"
  ],
  theme: {
    screens: {
      ...breakpoints
    },
    spacing: spacingValues,
    extent : {
      colors: {
        ...variables
      }
    }
  },
  plugins: [
    require('./src/assets/tailwind_config/typography')
  ],
}

