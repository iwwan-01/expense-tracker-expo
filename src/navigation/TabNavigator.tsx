import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './HomeStack';
import { useNavigation } from '@react-navigation/native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faCreditCard,
  faCalendarDays,
  faPiggyBank,
  faCircle,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import { HomeScreen } from '../screens/HomeScreen';
import { AccountsScreen } from '../screens/AccountsScreen';
import { SubscriptionsScreen } from '../screens/SubscriptionsScreen';
import { BudgetingScreen } from '../screens/BudgetingScreen';
import { AddTransactionScreen } from '../screens/AddTransactionScreen';

import { View, Text, StyleSheet, Pressable } from 'react-native';

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
          ...styles.shadow,
        }}
      >
        <FontAwesomeIcon icon='circle' color='#ff7f41' size={70} />
        <FontAwesomeIcon
          icon='plus'
          color='white'
          size={40}
          style={{ position: 'absolute', zIndex: 1 }}
        />
      </View>
    </Pressable>
  );
};

export const TabNavigator = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 40,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#29304e',
          borderRadius: 30,
          height: 60,
        },

        tabBarActiveTintColor: '#ff7f41',
        tabBarInactiveTintColor: '#f0ecf4',
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesomeIcon
                style={styles.icon}
                icon='home'
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name='Accounts'
        component={AccountsScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesomeIcon
                style={styles.icon}
                icon='credit-card'
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      {/* Custom Tab Bar Button */}
      <Tab.Screen
        name='Transaction'
        component={AddTransactionScreen}
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton
              {...props}
              onPress={() => navigation.navigate('AddTransactionScreen')}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Subscriptions'
        component={SubscriptionsScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesomeIcon
                style={styles.icon}
                icon='calendar-days'
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name='Budgeting'
        component={BudgetingScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesomeIcon
                style={styles.icon}
                icon='piggy-bank'
                color={color}
                size={size}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    top: 15,
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
