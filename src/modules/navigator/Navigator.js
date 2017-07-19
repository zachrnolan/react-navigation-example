import React from 'react';
import {Platform} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CounterViewContainer from '../counter/CounterViewContainer';
import ColorViewContainer from '../colors/ColorViewContainer';
import TestViewContainer from '../test/TestViewContainer';

const headerColor = '#39babd';
const activeColor = 'white';

const CounterNavigator = StackNavigator({
  Counter: {screen: CounterViewContainer},
  Color: {screen: ColorViewContainer},
  Test: {screen: TestViewContainer}
}, {
  initialRouteName: 'Counter'
});

const ColorNavigator = StackNavigator({
  Counter: {screen: CounterViewContainer},
  Color: {screen: ColorViewContainer},
  Test: {screen: TestViewContainer}
}, {
  initialRouteName: 'Color'
});

const AppNavigator = TabNavigator({
  CounterNav: {
    screen: CounterNavigator,
    navigationOptions: {
      title: 'Counter',
      tabBarLabel: 'Wooo',
      tabBarIcon: () => (
        <Icon name='plus-one' size={24} color={'blue'} />
      )
    }
  },
  ColorNav: {screen: ColorNavigator}
}, {
  tabBarOptions: {
    ...Platform.select({
      android: {
        activeTintColor: activeColor,
        indicatorStyle: {backgroundColor: activeColor},
        style: {backgroundColor: headerColor}
      }
    })
    // showLabel: false
  }
});

AppNavigator.navigationOptions = {
  title: 'Pepperoni App Template',
  header: {
    titleStyle: {color: 'white'},
    style: {
      backgroundColor: headerColor,
      elevation: 0 // disable header elevation when TabNavigator visible
    }
  }
};

export default AppNavigator;
