import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';

import { CloseButton, Content, Overley } from './styles';

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
                <input type="text" placeholder='Descrição' required />
                <input type="number" placeholder='Preço' required />
                <input type="text" placeholder='Categoria' required />

                <button type="submit">
                    Cadastrar
                </button>
            </form>
        
        </Content>
    </Dialog.Portal>
  )
}
