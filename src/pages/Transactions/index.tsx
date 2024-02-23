import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/searchForm"
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles"

export const Transactions = () => {
  return (
    <div>
        <Header />
        <Summary />

       <TransactionsContainer>
          <SearchForm />

        <TransactionsTable>
            <tbody>
              <tr>
                <td width="50%">Desenvolvimento de site</td>
                <td>
                  <PriceHighlight variant="incone">
                    R$ 12.000,00 
                  </PriceHighlight>               
                </td>
                <td>Venda</td>
                <td>13/04/2023</td>
              </tr>
              <tr>
                <td width="50%">Hanburger</td>
                <td>
                <PriceHighlight variant="outcone">
                  - R$ 59,00
                </PriceHighlight>                
                </td>
                <td>Alimentação</td>
                <td>10/04/2023</td>
              </tr>          
            </tbody>
          </TransactionsTable>
       </TransactionsContainer>
    </div>
  )
}

 