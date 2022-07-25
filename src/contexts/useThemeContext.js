import { createContext, useState } from 'react'

//Here are declared the colors to be used in the frontend
const themes = {
  light: {
    colorPrimary: '#ABCD00',
    colorWhite: "#FFFFFF",
    colorBlue: "#0090D4",
    grayLight: "#8e8e8e",
    // colorSecundary: '#ed2d34',
    // colorSecundaryV2: '#ed3e45',
    // colorSecundaryV3: '#731e21',
    // colorSecundaryV4: '#fbd900',
    // colorText: '#6b6b6b',
    grayInput: '#ced4da',
    // grayDark: '#606060',
    // orangeDark: '#731e21',
    // colorTextMenu: '#FFFFFf',
    graylight1: '#ECECEC',
    colorError: '#c62828',
  },
  dark: {},
}

const ThemeContext = createContext(themes.light)

function ThemeProvider(props) {
  const [theme, setTheme] = useState(themes.light)

  const { children } = props

  const value = { theme }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }
