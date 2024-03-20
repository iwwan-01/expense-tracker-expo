import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/HomeScreen';
import { AddTransactionScreen } from '../screens/AddTransactionScreen';

const Stack = createNativeStackNavigator();

export const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home1' component={HomeScreen}></Stack.Screen>
      <Stack.Screen
        name='AddTransaction'
        component={AddTransactionScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
