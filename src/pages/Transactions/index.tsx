import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/searchForm";
import {
    PriceHighlight,
    TransactionsContainer,
    TransactionsTable,
} from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: 'incone' | 'outcone';
  price: number;
  category: string;
  createdAT: string;
}

export const Transactions = () => {
    const [Transactions, setTransactions] = useState<Transaction[]>([])

    async function loadTransactions() {
        const response = await fetch("http://localhost:3000/transactions");
        const data = await response.json();

        setTransactions(data);
    }
    useEffect(() => {
        loadTransactions();
    }, []);

    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />

                <TransactionsTable>
                    <tbody>
                      {Transactions.map(transaction => {
                        return (
                          <tr key={transaction.id}>
                            <td width="50%">{transaction.description}</td>
                            <td>
                                <PriceHighlight variant={transaction.type}>
                                    {transaction.price}
                                </PriceHighlight>
                            </td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAT}</td>
                        </tr>
                        )
                      } )}                        
                       
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    );
};
