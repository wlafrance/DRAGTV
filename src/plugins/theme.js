// src/plugins/vuetify/theme.js

import colors from 'vuetify/lib/util/colors'

export default {
  primary: {
    base: colors.deepPurple.base,
    darken1: colors.deepPurple.darken2,
  },
  secondary: colors.indigo,
  // All keys will generate theme styles,
  // Here we add a custom `tertiary` color
  tertiary: colors.pink.base,
}