import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextStyle,
  Pressable,
} from 'react-native';
import { Fonts } from '../styles';
import { ITransaction } from '../types';

import { GlobalContext } from '../context/GlobalState';

export const Transaction: React.FC<{ transaction: ITransaction }> = ({
  transaction,
}) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const transactionSign = transaction.type === 'expense' ? '- ' : '+ ';
  const transactionStyle =
    transaction.type === 'expense'
      ? styles.transactionMinus
      : styles.transactionPlus;

  return (
    <View style={styles.listItem}>
      <Text style={styles.transactionNote}>{transaction.note}</Text>
      <Text style={[styles.transactionValue, transactionStyle]}>
        {transactionSign}
        {transaction.value}
      </Text>
      <Pressable
        style={styles.deleteButton}
        onPress={() => deleteTransaction(transaction.id)}
      >
        <Text style={styles.deleteButtonText}>X</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    color: '#333',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    marginVertical: 2,
    paddingRight: 20,
  },
  transactionNote: {
    margin: 0,
    fontSize: 20,
    ...Fonts.poppinsRegular[Platform.OS],
  } as TextStyle,
  transactionValue: {
    ...Fonts.poppinsSemiBold[Platform.OS],
    fontSize: 20,
    letterSpacing: 1,
    marginTop: 5,
    marginHorizontal: 0,
  } as TextStyle,
  transactionPlus: {
    color: '#2ecc71',
  },
  transactionMinus: {
    color: '#c0392b',
  },
  deleteButton: {
    position: 'absolute',
    right: 0,
    paddingTop: 2,
    paddingHorizontal: 5,
  },
  deleteButtonText: {
    ...Fonts.poppinsLight[Platform.OS],
  } as TextStyle,
});
