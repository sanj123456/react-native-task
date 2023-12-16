import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GroceryHome from '../screens/GroceryHome/Index';
import {images, screenName} from '../core';
import Categories from '../screens/Categories/Index';
import Favorite from '../screens/Favourite/Index';
import More from '../screens/More/Index';
import {Icon} from '../components';
import {StyleSheet} from 'react-native';

const tabs = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <tabs.Navigator>
      <tabs.Screen
        component={GroceryHome}
        name={screenName.groceryHome}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon source={images.home} imageStyle={styles.home} />
          ),
        }}
      />
      <tabs.Screen
        component={Categories}
        name={screenName.categories}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon source={images.category} imageStyle={styles.home} />
          ),
        }}
      />
      <tabs.Screen
        component={Favorite}
        name={screenName.favorite}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon source={images.favourite} imageStyle={styles.home} />
          ),
        }}
      />
      <tabs.Screen
        component={More}
        name={screenName.more}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon source={images.menu} imageStyle={styles.home} />
          ),
        }}
      />
    </tabs.Navigator>
  );
};
export default TabNavigator;
export const styles = StyleSheet.create({
  home: {
    width: 20,
    height: 20,
  },
});
