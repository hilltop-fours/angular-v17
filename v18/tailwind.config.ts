import type { Config } from 'tailwindcss'

export default {
  // prefix: 'tw',
  // darkMode: [`class`, `[data-mode="dark"]`],
  content: [
    './src.**/*.{html,css,scss,js,ts,jsx,tsx}'
  ],
  important: true,
  presets: [
    // require('@acmecorp/base-tailwind-config')
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/typography'),
    // require('tailwindcss-children'),
  ],
} satisfies Config

