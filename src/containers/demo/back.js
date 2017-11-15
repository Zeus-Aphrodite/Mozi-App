import React, { Component } from 'react';
import connect from "store/connect"
import { StyleSheet, Text, View } from 'react-native';
import NavigationButton from 'components/NavigationButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

@connect(state => ({
  routes: state.nav.routes,
}), {})
export default class Back extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Custom Back Demo',
    headerLeft: <NavigationButton
      name="back"
      callback={() => {
        navigation.state.params.goBack && navigation.state.params.goBack()
      }}
    />,
  });

  componentDidMount() {
    this.props.navigation.setParams({
      goBack: this.goBack,
    })
  }

  goBack = () => {
    const { routes } = this.props;
    // 这是入栈的路由数组
    console.log('routes______', routes)
    // 这是返回上上个页面的demo
    this.props.navigation.goBack(routes[1].key);
    // 这是返回上一个页面的demo
    // this.props.navigation.goBack(routes[2].key);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.welcome}
          onPress={() => {
            this.goBack();
          }}
        >
          返回到首页
        </Text>
      </View>
    );
  }
}
