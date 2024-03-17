import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faCreditCard,
  faCalendarDays,
  faPiggyBank,
} from '@fortawesome/free-solid-svg-icons';

import { Home } from '../screens/Home';
import { Accounts } from '../screens/Accounts';
import { Subscriptions } from '../screens/Subscriptions';
import { Budgeting } from '../screens/Budgeting';

const Tab = createBottomTabNavigator();

library.add(faHome, faCreditCard, faCalendarDays, faPiggyBank);

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          display: 'flex',
          backgroundColor: '#29304e',
        },
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'Home':
              return <FontAwesomeIcon icon='home' color={color} size={size} />;
            case 'Accounts':
              return (
                <FontAwesomeIcon icon='credit-card' color={color} size={size} />
              );
            case 'Subscriptions':
              return (
                <FontAwesomeIcon
                  icon='calendar-days'
                  color={color}
                  size={size}
                />
              );
            case 'Budgeting':
              return (
                <FontAwesomeIcon icon='piggy-bank' color={color} size={size} />
              );
          }
        },
        tabBarActiveTintColor: '#ff7f41',
        tabBarInactiveTintColor: '#f0ecf4',
      })}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Accounts' component={Accounts} />
      {/* Global Modal (Add Button) */}
      <Tab.Screen name='Subscriptions' component={Subscriptions} />
      <Tab.Screen name='Budgeting' component={Budgeting} />
    </Tab.Navigator>
  );
};
