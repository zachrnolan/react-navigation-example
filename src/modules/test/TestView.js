import React, {PropTypes, Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

/**
 * Sample view to demonstrate StackNavigator
 * @TODO remove this module in a live application.
 */
class TestView extends Component {
  static displayName = 'TestView';

  // static navigationOptions = ({ navigation, screenProps }) => ({
  //   title: navigation.state.params.name + "'s Profile!",
  //   headerRight: <Button color={screenProps.tintColor} {...} />,
  // });

  static navigationOptions = {
    title: 'Test',
    tabBar: () => ({
      icon: (props) => (
        <Icon name='color-lens' size={24} color={props.tintColor} />
      )
    }),
    header: {
      tintColor: 'white',
      style: {
        backgroundColor: '#39babd'
      }
    }
  }

  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  componentDidMount() {
    console.log('TestView componentDidMount')
  }

  componentWillUnmount() {
    console.log('TestView componentWillUnmount')
  }

  render() {
    const buttonText = 'Open in Stack Navigator';
    return (
      <View style={styles.container}>
        <Text>Test!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default TestView;
