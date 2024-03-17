import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faCreditCard,
  faCalendarDays,
  faPiggyBank,
  faCircle,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

import { Home } from '../screens/Home';
import { Accounts } from '../screens/Accounts';
import { Subscriptions } from '../screens/Subscriptions';
import { Budgeting } from '../screens/Budgeting';
import { Pressable } from 'react-native';

import { View } from 'react-native';

const Tab = createBottomTabNavigator();

library.add(
  faHome,
  faCreditCard,
  faCalendarDays,
  faPiggyBank,
  faCircle,
  faPlus
);

const CustomTabBarButton = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          width: 60,
          height: 60,
        }}
      >
        <FontAwesomeIcon icon='circle' color='#ff7f41' size={70} />
        <FontAwesomeIcon
          icon='plus'
          color='white'
          size={40}
          style={{ position: 'absolute', zIndex: 99 }}
        />
      </View>
    </Pressable>
  );
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 35,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#29304e',
          borderRadius: 30,
          height: 60,
        },
        tabBarItemStyle: {
          top: 15,
        },
        tabBarActiveTintColor: '#ff7f41',
        tabBarInactiveTintColor: '#f0ecf4',
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
      })}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Accounts' component={Accounts} />
      <Tab.Screen
        name='Transaction'
        // Placeholder component
        component={Home}
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton
              {...props}
              onPress={() => console.log('Button pressed!')}
            />
          ),
        }}
      />
      {/* Global Modal (Add Button) */}
      <Tab.Screen name='Subscriptions' component={Subscriptions} />
      <Tab.Screen name='Budgeting' component={Budgeting} />
    </Tab.Navigator>
  );
};
