import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TextStyle,
  Pressable,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Fonts, Typography } from '../styles';

import { GlobalContext } from '../context/GlobalState';

export const AddTransaction: React.FC = () => {
  const [transactionNote, setTransactionNote] = useState('');
  const [transactionValue, setTransactionValue] = useState('');
  const [transactionType, setTransactionType] = useState('expense');

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = () => {
    const newTransaction = {
      id: uuidv4(),
      type: transactionType.toLowerCase(),
      value: parseFloat(transactionValue.replace(/,/g, '.')),
      note: transactionNote,
    };

    addTransaction(newTransaction);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.addTransactionLabel}>Add new transaction</Text>
      <View>
        <Text style={styles.transactionFieldLabel}>Transaction Note</Text>
        <TextInput
          style={styles.transactionFieldTextInput}
          placeholder='Please enter a transaction note'
          onChangeText={setTransactionNote}
          value={transactionNote}
        />
      </View>
      <View>
        <Text style={styles.transactionFieldLabel}>Transaction Value</Text>
        <TextInput
          style={styles.transactionFieldTextInput}
          placeholder='Please enter a transaction value'
          onChangeText={setTransactionValue}
          value={transactionValue}
        />
      </View>
      <View>
        <Text style={styles.transactionFieldLabel}>Transaction Type</Text>
        <RNPickerSelect
          style={{
            inputWeb: styles.transactionFieldTextInput,
            inputIOS: styles.transactionFieldTextInput,
            inputAndroid: styles.transactionFieldTextInput,
          }}
          placeholder={{}}
          value={transactionType}
          onValueChange={(value: string) => setTransactionType(value)}
          items={[
            { label: 'Expense', value: 'expense' },
            { label: 'Income', value: 'income' },
          ]}
        ></RNPickerSelect>
      </View>
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add a transaction</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
  },
  addTransactionLabel: {
    ...Typography.h3,
  } as TextStyle,
  transactionFieldLabel: {
    marginTop: 10,
    marginHorizontal: 0,
    fontSize: 18,
    ...Fonts.poppinsRegular[Platform.OS],
  } as TextStyle,
  transactionFieldTextInput: {
    marginTop: 10,
    marginHorizontal: 0,
    fontSize: 14,
    ...Fonts.poppinsLight[Platform.OS],
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#dedede',
    paddingVertical: 5,
    paddingLeft: 15,
  } as TextStyle,

  button: {
    marginTop: 20,
    paddingVertical: 5,
    borderRadius: 40,
    backgroundColor: '#ff7f41',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    ...Fonts.poppinsSemiBold[Platform.OS],
    color: 'white',
  } as TextStyle,
});
