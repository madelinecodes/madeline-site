export default {
  nitro: {
    preset: 'vercel-edge',
  },
  css: [
    'assets/css/app.css',
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Righteous&display=swap",
    }
  ],
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
};
