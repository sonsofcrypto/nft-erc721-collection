const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: `#211E3D`,
          to_bg: `#130B22`,
        },
        titles: `#E7379580`,
        links: {
          txt: colors.white,
          hover_txt: `#83CEFF`,
        },
        loading_spinner: `#E7379580`,
        popups: {
          bg: `#211E3D`,
          txt: `#fff`,
          internal_border: `#E7379580`,
          border: `#E7379580`,
        },
        warning: {
          txt: `#fff`,
          bg: `#211E3D`,
          border: `#E7379580`,
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },
        // Inputs
        btn: {
          txt: `#fff`,
          bg: `#211E3D`,
          border: `#211E3D`,
          hover_txt: `#83CEFF`,
          hover_bg: `#211E3D`,
          hover_border: `#E73795`,
        },
        btn_primary: {
          txt: `#fff`,
          bg: `#E73795`,
          border: `#211E3D`,
          hover_txt: `#83CEFF`,
          hover_bg: `#E73795`,
          hover_border: `#E73795`,
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: `#E73795`,
        txt_input: {
          txt: `#83CEFF`,
          bg: `#211E3D`,
          border: colors.slate[200],
          focus_txt: colors.indigo[600],
          focus_bg: colors.slate[50],
          focus_border: colors.indigo[300],
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.white,
          bg: `#211E3D`,
        },

        // Mint widget
        token_preview: `#211E3D`,
      },
    },
  },
  variants: {},
  plugins: [],
};

// neon pink: #E73795
// neon blue #83CEFF
// bg gradient #211E3D #130B22