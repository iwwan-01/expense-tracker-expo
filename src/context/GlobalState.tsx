import React, { createContext, useReducer } from 'react';
import { ITransaction, IState, IStore } from '../types';
import AppReducer from './AppReducer';

// Initial state
const initialState: IState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext<IStore>({
  state: initialState,
  addTransaction: () => {},
  deleteTransaction: () => {},
});

// Provider component
export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function addTransaction(transaction: ITransaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  function deleteTransaction(id: string) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ state, addTransaction, deleteTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
