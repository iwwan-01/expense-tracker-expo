import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AddTransaction } from '../components/AddTransaction';

export const AddTransactionScreen: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efeff5',
      }}
    >
      {/* Close Button */}
      <View
        style={{
          marginTop: 15,
          borderRadius: 30,
          backgroundColor: '#29304e',
          width: 60,
          height: 5,
        }}
      ></View>
      <AddTransaction />
    </View>
  );
};
