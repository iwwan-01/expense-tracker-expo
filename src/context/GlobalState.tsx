import React, { createContext, useReducer } from 'react';
import { ITransaction, IState, IStore } from '../types';
import AppReducer from './AppReducer';

// Initial state
const initialState: IState = {
  // Placeholder transactions 👇🏻
  transactions: [
    {
      id: '5',
      type: 'expense',
      value: 25.79,
      note: 'Takeaway',
    },
    {
      id: '4',
      type: 'income',
      value: 1128.91,
      note: 'Supplementary Grant',
    },
    {
      id: '3',
      type: 'expense',
      value: 50.26,
      note: 'Groceries',
    },
    {
      id: '2',
      type: 'expense',
      value: 752.05,
      note: 'Tuition Fee',
    },
    {
      id: '1',
      type: 'income',
      value: 1772.68,
      note: 'Salary',
    },
  ],
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
