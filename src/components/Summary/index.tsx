import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'
// import { useContext } from 'react'
// import { TransactionsContext } from '../../contexts/TransactionContext'

export const Summary = () => {
    // const {transactions} = useContext(TransactionsContext)

  return (
    <SummaryContainer>
        <SummaryCard>
            <header>
                <span>Entradas</span>
                <ArrowCircleUp size={32} color='#00b37e' />
            </header>

            <strong>R$ 17.400,00</strong>
        </SummaryCard>

        <SummaryCard>
            <header>
                <span>Saídas</span>
                <ArrowCircleDown size={32} color='#f75a68' />
            </header>

            <strong>- R$ 7.400,00</strong>
        </SummaryCard>

        <SummaryCard variant='green'>
            <header>
                <span>Total</span>
                <CurrencyDollar size={32} color='#ffff' />
            </header>

            <strong>R$ 10.000,00</strong>
        </SummaryCard>
    </SummaryContainer>
  )
}
