const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    cssnano({ preset: 'default' }),
    purgecss({
      content: ['./public/*.html'],
      defaultExtractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
      safelist: [
        'bg-[url(./assets/images/resort.png)]',
        'bg-[url(./assets/images/aerial.png)]',
        'bg-[url(./assets/images/bean-plot8.png)]',
      ],
    }),
  ],
};
