import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaul'
import { GlobalStyle } from './styles/global'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
      <div>App</div>
    </ThemeProvider>
  )
}
