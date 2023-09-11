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
        'radial-green':'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,121,96,1) 35%, rgba(0,0,0,1) 100%)',
        'main': 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        'trees': `url('https://78.media.tumblr.com/cae86e76225a25b17332dfc9cf8b1121/tumblr_p7n8kqHMuD1uy4lhuo1_540.png'), 
        url('https://78.media.tumblr.com/66445d34fe560351d474af69ef3f2fb0/tumblr_p7n908E1Jb1uy4lhuo1_1280.png'),
        url('https://78.media.tumblr.com/8cd0a12b7d9d5ba2c7d26f42c25de99f/tumblr_p7n8kqHMuD1uy4lhuo2_1280.png'),
        url('https://78.media.tumblr.com/5ecb41b654f4e8878f59445b948ede50/tumblr_p7n8on19cV1uy4lhuo1_1280.png'),
        url('https://78.media.tumblr.com/28bd9a2522fbf8981d680317ccbf4282/tumblr_p7n8kqHMuD1uy4lhuo3_1280.png')`
      },
      animation: {
        glow: 'glow 4s infinite',
        blink: 'blink 1s infinite',
        gradient: 'gradient 15s ease infinite',
        para: 'para 50s linear infinite'
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
        gradient: {
          '0%': {
            'background-position': '0% 50%'
          },
          '50%' : {
            'background-position': '100% 50%'
          },
          '100%' : {
            'background-position': '0% 50%'
          }
        },     
        para: {
          '100%': {
            'background-position': '-5000px 20%, -800px 95%, 500px 50%, 1000px 100%, 400px 0'
            }
          }
      },
    },
  },
  plugins: [],
}