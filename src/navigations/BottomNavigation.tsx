import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Accounts,
  Categories,
  Transactions,
  Budget,
  Dashboard,
} from '../screens';
import {padding} from 'styled-system';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const tabs = [
    'Accounts',
    'Categories',
    'Transactions',
    'Budget',
    'Dashboard',
  ];

  const renderTabs = () => {
    return tabs.map((tab: string, index: number) => {
      const renderComponent = (): {
        name: string;
        icon: string;
        component: any;
      } => {
        switch (index) {
          case 0:
            return {name: 'Accounts', icon: 'credit-card', component: Accounts};
          case 1:
            return {
              name: 'Categories',
              icon: 'pie-chart',
              component: Categories,
            };
          case 2:
            return {
              name: 'Transactions',
              icon: 'arrow-up',
              component: Transactions,
            };
          case 3:
            return {name: 'Budget', icon: 'bar-chart', component: Budget};
          case 4:
            return {
              name: 'Dashboard',
              icon: 'dashboard',
              component: Dashboard,
            };
          default:
            return {name: 'Accounts', icon: 'credit-card', component: Accounts};
        }
      };
      return (
        <Tab.Screen
          key={renderComponent().name}
          name={renderComponent().name}
          component={renderComponent().component}
          options={{
            tabBarLabel: tab,
            tabBarShowLabel: true,
            tabBarIcon: ({color, size}) => (
              <Icon name={renderComponent().icon} color={color} size={size} />
            ),
          }}
        />
      );
    });
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: false,
        tabBarStyle: {paddingBottom: 10, height: 60},
      }}>
      {renderTabs()}
    </Tab.Navigator>
  );
};

export default BottomNavigation;
