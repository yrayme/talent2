import { createContext, useState } from 'react'

//Here are declared the colors to be used in the frontend
const themes = {
  light: {
    colorPrimary: '#ABCD00',
    colorWhite: "#FFFFFF",
    colorGrayFondo: "#F8F8F8",
    colorBlue2: "#2A66BC",
    colorLabel: "#595959",
    grayInput: '#D9D9D9',
    colorError: '#c62828',
    colorDivider: "#BFBFBF",
    colorIconRed: "#8C8C8C",
    colorBlueAdd: "#1890FF",
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
