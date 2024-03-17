import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextStyle,
  Platform,
} from 'react-native';
import { Fonts, Typography } from '../styles';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList: React.FC = () => {
  const { state } = useContext(GlobalContext);
  const { transactions } = state;

  return (
    <View style={styles.container}>
      <Text style={styles.transactionsLabel}>Transactions</Text>
      {transactions.length === 0 ? (
        <View style={styles.emptyListContainer}>
          <Text style={styles.emptyListText}>
            You have not added any transactions yet.
          </Text>
        </View>
      ) : (
        <View>
          <FlatList
            style={styles.flatListContainer}
            data={transactions}
            renderItem={({ item: transaction }) => (
              <Transaction transaction={transaction} />
            )}
          ></FlatList>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 350,
    marginBottom: 40,
  },
  flatListContainer: {
    height: 120,
    width: 350,
  },
  transactionsLabel: {
    ...Typography.h3,
  } as TextStyle,
  emptyListContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: 40,
  },
  emptyListText: {
    ...Fonts.poppinsLight[Platform.OS],
  } as TextStyle,
});
