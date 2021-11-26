import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import Modal from 'react-modal'
import {NewTransactionModal} from './components/NewTransactionModal'
import {  TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root')


export function App() {
  

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); //inicia como false pois o modal por padrão vem fechado
 
  
  function handleOpenNewTransactionModal(){ //sempre que a função inicia com handle quer dizer que será executado quando o usuário clicar em um botão
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose = {handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </TransactionsProvider>
  );
}

export default App;
