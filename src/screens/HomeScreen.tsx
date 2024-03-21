import { StatusBar } from 'expo-status-bar';

// This fixes the modal breaking the SafeAreaView! 👇🏻
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet, Dimensions } from 'react-native';

import { Header } from '../components/Header';
import { Balance } from '../components/Balance';
import { IncomeExpenses } from '../components/IncomeExpenses';
import { TransactionList } from '../components/TransactionList';

const windowHeight = Dimensions.get('window').height;

export const HomeScreen: React.FC = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.body}>
        <Header />
        <View style={styles.container}>
          <Balance />
          <IncomeExpenses />
        </View>
        <TransactionList />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: windowHeight,
  },
  container: {
    marginTop: 20,
    marginHorizontal: 'auto',
    paddingTop: 20,
    paddingHorizontal: 30,
    width: 350,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dedede',
    backgroundColor: '#29304e',
  },
});
