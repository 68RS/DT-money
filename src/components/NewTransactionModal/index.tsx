import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import {
    CloseButton,
    Content,
    Overley,
    TransactionType,
    TransactionTypeButton,
} from "./styles";

export const NewTransactionModal = () => {
    return (
        <Dialog.Portal>
            <Overley />

            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>

                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form action="">
                    <input type="text" placeholder="Descrição" required />
                    <input type="number" placeholder="Preço" required />
                    <input type="text" placeholder="Categoria" required />

                    <TransactionType>
                        <TransactionTypeButton variant="incone" value="incone">
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TransactionTypeButton>

                        <TransactionTypeButton variant="outcone" value="outcone">
                            <ArrowCircleDown size={24} />
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type="submit">Cadastrar</button>
                </form>
            </Content>
        </Dialog.Portal>
    );
};
