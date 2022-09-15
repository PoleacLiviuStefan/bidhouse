/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('/public/logo.jpg)",
        'wave': "url('/public/wave.png)",
        'about': "url('/public/About.png)'"
      },
      boxShadow: {
        'xl': '0px 0px 15px -1px rgba(246,255,76,0.54)',
        '2xl': ' 0px 0px 15px -1px rgba(255,255,255,0.54)',
        'sm': ' 0px 0px 35px -1px rgba(246,255,76,0.54)',
        'md': '0px 10px 13px -7px #000000, 0px 5px 0px 1px #000000;'
      }
    },
    keyframes: {
      mouseover: {
        '0%': {
          border: '2px solid white',
          color: 'white'
        },
        '100%': {
          border: '2px solid yellow',
          color: 'yellow'
        }
      },
      mouseleft: {
        '0%': {
          border: '2px solid yellow',
          color: 'yellow'
        },
        '100%': {
          border: '2px solid white',
          color: 'white'
        }
      },
      arrowsanim: {
        '0%': {
          top: '1rem',
          opacity: '1'
        },
        '100%': {
          top: '1.5rem',
          opacity: '0'
        }
      },
      slidetext: {
        '0%': {
          left: '55rem'
        },
        '100%': {

          left: '-55rem'
        }
      },
      wave: {
        '0%': {
          transform: 'translateX(0)'
        },
        '50%': {
          transform: 'translateX(-30%)'
        },
        '100%': {

          transform: 'translateX(-50%)'
        }
      },
      changelt: {
        '0%': {
          top: '0'
        },
        '15%': {
          top: '-19rem'
        },
        '20%': {
          left: '0'
        },
        '35%': {
          left: '17.6rem'
        },
        '40%': {
          top: '-19rem'
        },
        '55%': {
          top: '0'
        }
      },
      changert: {
        '40%': {
          right: '0'
        },
        '55%': {
          right: '17.6rem'
        }
      },
      changelb: {

        '40%': {
          left: '0'
        },
        '55%': {
          left: '17.6rem'
        }
      },
      changerb: {
        '0%': {
          bottom: '0'
        },
        '15%': {
          bottom: '-19rem'
        },
        '20%': {
          right: '0'
        },
        '35%': {
          right: '17.6rem'
        },
        '40%': {
          bottom: '-19rem'
        },
        '55%': {
          bottom: '0'
        }
      },
      appear: {
        '0%': {
          opacity: '0'
        },
        '100%': {
          opacity: '1'
        }
      },
      dissappear: {
        '0%': {
          opacity: '0'
        },

        '100%': {
          opacity: '1'
        }
      },
      extendanim: {
        '0%': {
          height: '4rem'
        },

        '100%': {
          height: '13rem'
        }
      },
      retractanim: {
        '0%': {
          height: '13rem'
        },

        '100%': {
          height: '4rem'
        }
      },
      rotatearrow: {
        '0%': {
          transform: 'rotate(0deg)'
        },

        '100%': {
          transform: 'rotate(180deg)'
        }
      },
      rotatearrowback: {
        '0%': {
          transform: 'rotate(180deg)'
        },

        '100%': {
          transform: 'rotate(0deg)'
        }
      },
      logoloading: {
        '0%': {
          top: '0',
          opacity: '0'
        },

        '100%': {
          top: '2rem',
          opacity: '1'
        }
      },
      logoloadingback: {
        '0%': {
          top: '2rem',
          opacity: '1'

        },

        '100%': {
          top: '0',
          opacity: '0'
        }
      },
      loadingline: {
        '0%': {
          width: '0'
        },
        '100%': {
          width: '100%'
        }
      },
      loadingline2: {
        '0%': {
          width: '100%'
        },
        '100%': {
          width: '0'
        }
      },

      line: {
        '0%': {
          width: '100%'
        },
        '100%': {
          width: '0'
        }
      },
      textloading: {
        '0%': {
          bottom: '-3rem',
          opacity: '0'
        },
        '100%': {
          bottom: '-1.5rem',
          opacity: '1'
        }

      },
      textloadingback: {
        '0%': {
          bottom: '-1.5rem',
          opacity: '1'

        },
        '100%': {
          bottom: '-3rem',
          opacity: '0'
        }

      },
      loadingopen: {
        '0%': {
          width: '0%'
        },
        '100%': {
          width: '100%'
        }
      },
      loadingshow: {
        '0%': {
          width: '100%'
        },
        '100%': {
          width: '0'
        }
      }
    }
  },
  plugins: [],
}
