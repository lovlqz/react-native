/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style = {styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected = {this.state.selectedTab === 'tb_polular'}
            title = '最热'
            selectedTitleStyle={{color:'red'}}
            renderIcon = {() => <Image style = {styles.botImage} source={require('./app/img/ic_polular.png')}/>}
            renderSelectedIcon = {() => <Image style = {[styles.botImage, {tintColor: 'red'}]} source={require('./app/img/ic_polular.png')}/>}
            badgeText='1'
            onPress = {() => this.setState({selectedTab: 'tb_polular'})}>
            <View style={styles.page1}>
              
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected = {this.state.selectedTab === 'tb_trending'}
            title = '趋势'
            selectedTitleStyle={{color:'blue'}}
            renderIcon = {() => <Image style = {styles.botImage} source={require('./app/img/ic_trending.png')}/>}
            renderSelectedIcon = {() => <Image style = {[styles.botImage, {tintColor: 'blue'}]} source={require('./app/img/ic_trending.png')}/>}
            onPress = {() => this.setState({selectedTab: 'tb_trending'})}>
            <View style={styles.page2}>

            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected = {this.state.selectedTab === 'tb_favorite'}
            title = '收藏'
            selectedTitleStyle={{color:'green'}}
            renderIcon = {() => <Image style = {styles.botImage} source={require('./app/img/ic_favorite.png')}/>}
            renderSelectedIcon = {() => <Image style = {[styles.botImage, {tintColor: 'green'}]} source={require('./app/img/ic_favorite.png')}/>}
            onPress = {() => this.setState({selectedTab: 'tb_favorite'})}>
            <View style={styles.page3}>

            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected = {this.state.selectedTab === 'tb_my'}
            title = '我的'
            selectedTitleStyle={{color:'yellow'}}
            renderIcon = {() => <Image style = {styles.botImage} source={require('./app/img/ic_my.png')}/>}
            renderSelectedIcon = {() => <Image style = {[styles.botImage, {tintColor: 'yellow'}]} source={require('./app/img/ic_my.png')}/>}
            onPress = {() => this.setState({selectedTab: 'tb_my'})}>
            <View style={styles.page4}>

            </View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
