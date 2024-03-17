import React, { useContext } from 'react';
import { View, Text, StyleSheet, Platform, TextStyle } from 'react-native';
import { Fonts, Typography } from '../styles';

import { GlobalContext } from '../context/GlobalState';

export const Balance: React.FC = () => {
  const { state } = useContext(GlobalContext);

  const { transactions } = state;

  const income = transactions
    .filter((transaction) => transaction.type === 'income')
    .map((transaction) => transaction.value)
    .reduce((total, value) => (total += value), 0);

  const expenses = transactions
    .filter((transaction) => transaction.type === 'expense')
    .map((transaction) => transaction.value)
    .reduce((total, value) => (total += value), 0);

  const total = (income - expenses).toFixed(2);
  // Replace with ExchangeRate-API 👇🏻
  const totalEUR = (parseFloat(total) / 1.95).toFixed(2);

  return (
    <View>
      <Text style={styles.balanceLabel}>Your Balance</Text>
      <Text style={styles.balance}>{total} BGN</Text>
      <Text style={styles.balanceEur}>€{totalEUR}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceLabel: {
    ...Typography.h4,
    color: 'white',
  } as TextStyle,
  balance: {
    letterSpacing: 1,
    margin: 0,
    fontSize: 34,
    ...Fonts.poppinsSemiBold[Platform.OS],
    color: 'white',
  } as TextStyle,
  balanceEur: {
    letterSpacing: 1,
    margin: 0,
    fontSize: 18,
    ...Fonts.poppinsRegular[Platform.OS],
    color: 'white',
  } as TextStyle,
});
