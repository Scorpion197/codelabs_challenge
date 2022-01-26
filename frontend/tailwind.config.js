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
    }
  },
  plugins: [],
}
