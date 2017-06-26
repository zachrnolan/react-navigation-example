import {Platform} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

import CounterViewContainer from '../counter/CounterViewContainer';
import ColorViewContainer from '../colors/ColorViewContainer';
import TestViewContainer from '../test/TestViewContainer';

const headerColor = '#39babd';
const activeColor = 'white';

// TabNavigator is nested inside StackNavigator
// export const MainScreenNavigator = TabNavigator({
//   Counter: {screen: CounterViewContainer},
//   Color: {screen: ColorViewContainer},
//   Test: {screen: TestViewContainer}
// }, {
//   tabBarOptions: {
//     ...Platform.select({
//       android: {
//         activeTintColor: activeColor,
//         indicatorStyle: {backgroundColor: activeColor},
//         style: {backgroundColor: headerColor}
//       }
//     })
//   }
// });

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
// MainScreenNavigator.navigationOptions = {
//   title: 'Pepperoni App Template',
//   header: {
//     titleStyle: {color: 'white'},
//     style: {
//       backgroundColor: headerColor,
//       elevation: 0 // disable header elevation when TabNavigator visible
//     }
//   }
// };

// Root navigator is a StackNavigator
// const AppNavigator = StackNavigator({
//   Home: {screen: MainScreenNavigator},
//   InfiniteColorStack: {screen: ColorViewContainer},
//   TestTest: {screen: TestViewContainer}
// });

const AppNavigator = TabNavigator({
  CounterNav: {screen: CounterNavigator},
  ColorNav: {screen: ColorNavigator},
}, {
  tabBarOptions: {
    ...Platform.select({
      android: {
        activeTintColor: activeColor,
        indicatorStyle: {backgroundColor: activeColor},
        style: {backgroundColor: headerColor}
      }
    }),
    // showLabel: false
  }
})

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

// const MessagesNav = StackNavigator({
//     Messages: { screen: Messages },
//     MessageDetail: {
//         screen: MessageDetail,
//         navigationOptions: ({ navigation }) => ({
//              title: 'Message',
//              tabBarVisible: false,
//         )}
//     },
// })
//
// const Tabs = TabBarNavigator({
//     MessagesNav: { screen: MessagesNav },
//     SettingsNav: { screen: SettingsNav },
// })

export default AppNavigator;
