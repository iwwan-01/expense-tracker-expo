import React, { useContext } from 'react';
import { View, Text, StyleSheet, Platform, TextStyle } from 'react-native';
import { Fonts, Typography } from '../styles';

import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses: React.FC = () => {
  const { state } = useContext(GlobalContext);
  const { transactions } = state;

  const income = transactions
    .filter((transaction) => transaction.type === 'income')
    .map((transaction) => transaction.value)
    .reduce((total, value) => (total += value), 0)
    .toFixed(2);

  const expenses = transactions
    .filter((transaction) => transaction.type === 'expense')
    .map((transaction) => transaction.value)
    .reduce((total, value) => (total += value), 0)
    .toFixed(2);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.incomeLabel}>Income</Text>
        <Text style={[styles.money, styles.moneyPlus]}>+{income} BGN</Text>
      </View>
      <View>
        <Text style={styles.expenseLabel}>Expense</Text>
        <Text style={[styles.money, styles.moneyMinus]}>-{expenses} BGN</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  money: {
    ...Fonts.poppinsSemiBold[Platform.OS],
    fontSize: 20,
    letterSpacing: 1,
    marginTop: 5,
    marginHorizontal: 0,
  } as TextStyle,
  incomeLabel: {
    ...Typography.h4,
    color: 'white',
  } as TextStyle,
  moneyPlus: {
    color: '#2ecc71',
  },
  expenseLabel: {
    ...Typography.h4,
    color: 'white',
  } as TextStyle,
  moneyMinus: {
    color: '#c0392b',
  },
});
