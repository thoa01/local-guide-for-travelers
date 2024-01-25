import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Edit this file for custom theme
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#1b6bbd'
        },
        secondary: {
          main: '#ff532c'
        }
      }
    },
    dark: {
      palette: {}
    }
  },
  typography: {
    fontFamily: 'GT Eesti, sans-serif'
  }
})

export default theme
