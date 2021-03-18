import { createContext, useState, ReactNode } from 'react';

interface ModalContextData {
  isNewTransactionModalOpen: boolean;
  handleOpenNewTransactionModal(): void;
  handleCloseNewTransactionModal(): void;
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps) {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false,
  );

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{
        isNewTransactionModalOpen,
        handleOpenNewTransactionModal,
        handleCloseNewTransactionModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
