import { View, Text, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AddTransaction } from '../components/AddTransaction';

export const AddTransactionScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      {/* Close Button */}
      <Pressable
        onPress={() => navigation.navigate('main')}
        style={{
          alignSelf: 'center',
          marginTop: 15,
          borderRadius: 30,
          backgroundColor: '#29304e',
          width: 60,
          height: 5,
        }}
      ></Pressable>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <AddTransaction />
      </ScrollView>
    </View>
  );
};
