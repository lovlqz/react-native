import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {StyleSheet, View, Image} from 'react-native';
import TbpopularPage from './app/pages/Tbpopular';
import TbtrendingPage from './app/pages/Tbtrending';
import TbfavoritePage from './app/pages/Tbfavorite';
import TbmyPage from './app/pages/Tbmy';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tb_polular'
    }
  }

  _renderTabarItems(selectedTab, tabTitle, tabColor, icon, Component){
    return (<TabNavigator.Item
              selected = {this.state.selectedTab === selectedTab}
              title = {tabTitle}
              selectedTitleStyle={{color:tabColor}}
              renderIcon = {() => <Image style = {styles.botImage} source={icon}/>}
              renderSelectedIcon = {() => <Image style = {[styles.botImage, {tintColor: tabColor}]} source={icon}/>}
              onPress = {() => this.setState({selectedTab: selectedTab})}>
              <Component />
            </TabNavigator.Item>)
  }

  render() {
    return (
      <View style = {styles.container}>
        <TabNavigator>
          {this._renderTabarItems('tb_polular', '新闻', 'red', require('./app/img/ic_polular.png'), TbpopularPage)}
          {this._renderTabarItems('tb_trending', '趋势', 'blue', require('./app/img/ic_trending.png'), TbtrendingPage)}
          {this._renderTabarItems('tb_favorite', '收藏', 'green', require('./app/img/ic_favorite.png'), TbfavoritePage)}
          {this._renderTabarItems('tb_my', '我的', 'yellow', require('./app/img/ic_my.png'), TbmyPage)}
        </TabNavigator>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  page2: {
    flex:1,
    backgroundColor:'blue'
  },
  page3: {
    flex:1,
    backgroundColor:'green'
  },
  page4: {
    flex:1,
    backgroundColor:'yellow'
  },
  botImage: {
    width: 22,
    height: 22
  }
});
