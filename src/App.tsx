import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaul'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/Transactions'
import { TransactionProvider } from './contexts/TransactionContext'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionProvider>
       <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  )
}
