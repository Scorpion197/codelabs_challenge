module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {

      'display': ['Tahoma'], 
      'body': ['Tahoma'],
    }, 

    screens: {

      'sx': {'max': '648px'},
      'sl': {'min': '648px', 'max': '1024px'},
      'sg': {'min': '1024px', 'max': '1280px'}
    },
    extend: {
      backgroundImage: {

        'home-pattern': "url('/assets/background.jpg')",
      }
    }
  },
  plugins: [],
}
