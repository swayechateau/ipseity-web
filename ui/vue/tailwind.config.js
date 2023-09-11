module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fade-bottom':
          'linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)',
        'fade-top':
          'linear-gradient(360deg, transparent, rgba(37, 37, 37, 0.61), #111)',
      },
      animation: {
        glow: 'glow 4s infinite',
        blink: 'blink 1s infinite'
      },
      keyframes: {
        blink: {
          'from, to': {
            color: 'transparent',
          },
          '50%': {
            color: 'inherit',
          },
        },
        glow: {
          '0%': {
            'text-shadow': '0 0 10px inherit',
          },
          '15%': {
            'text-shadow':
              '2px 2px 10px rgba(0, 255, 0, 1), -2px -2px 10px rgba(0, 255, 0, 1)',
          },
          '30%': {
            'text-shadow':
              '2px 2px 4px rgba(0, 255, 0, .7), -2px -2px 4px rgba(0, 255, 0, .7)',
          },
          '50%': {
            'text-shadow':
              '20px 20px 50px rgba(255, 255, 255, .5), -20px -20px 50px rgba(255, 255, 255, .5)',
          },
        },
      },
    },
  },
  plugins: [],
}