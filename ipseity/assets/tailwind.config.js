// See the Tailwind configuration guide for advanced usage
// https://tailwindcss.com/docs/configuration

const plugin = require("tailwindcss/plugin")
const fs = require("fs")
const path = require("path")

module.exports = {
  content: [
    "./js/**/*.js",
    "../lib/*_web.ex",
    "../lib/*_web/**/*.*ex"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fade-bottom':
          'linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)',
        'fade-top':
          'linear-gradient(360deg, transparent, rgba(37, 37, 37, 0.61), #111)',
        'radial-green':'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,121,96,1) 35%, rgba(0,0,0,1) 100%)',
        'main': 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)'
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
      colors: {
        brand: "#FD4F00",
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // Allows prefixing tailwind classes with LiveView classes to add rules
    // only when LiveView classes are applied, for example:
    //
    //     <div class="phx-click-loading:animate-ping">
    //
    plugin(({addVariant}) => addVariant("phx-no-feedback", [".phx-no-feedback&", ".phx-no-feedback &"])),
    plugin(({addVariant}) => addVariant("phx-click-loading", [".phx-click-loading&", ".phx-click-loading &"])),
    plugin(({addVariant}) => addVariant("phx-submit-loading", [".phx-submit-loading&", ".phx-submit-loading &"])),
    plugin(({addVariant}) => addVariant("phx-change-loading", [".phx-change-loading&", ".phx-change-loading &"])),

    // Embeds Heroicons (https://heroicons.com) into your app.css bundle
    // See your `CoreComponents.icon/1` for more information.
    //
    plugin(function({matchComponents, theme}) {
      let iconsDir = path.join(__dirname, "./vendor/heroicons/optimized")
      let values = {}
      let icons = [
        ["", "/24/outline"],
        ["-solid", "/24/solid"],
        ["-mini", "/20/solid"]
      ]
      icons.forEach(([suffix, dir]) => {
        fs.readdirSync(path.join(iconsDir, dir)).map(file => {
          let name = path.basename(file, ".svg") + suffix
          values[name] = {name, fullPath: path.join(iconsDir, dir, file)}
        })
      })
      matchComponents({
        "hero": ({name, fullPath}) => {
          let content = fs.readFileSync(fullPath).toString().replace(/\r?\n|\r/g, "")
          return {
            [`--hero-${name}`]: `url('data:image/svg+xml;utf8,${content}')`,
            "-webkit-mask": `var(--hero-${name})`,
            "mask": `var(--hero-${name})`,
            "mask-repeat": "no-repeat",
            "background-color": "currentColor",
            "vertical-align": "middle",
            "display": "inline-block",
            "width": theme("spacing.5"),
            "height": theme("spacing.5")
          }
        }
      }, {values})
    })
  ]
}
