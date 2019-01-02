import React, {Component} from 'react';
import {
  StyleSheet, 
  View,
  Text
} from 'react-native';

type Props = {};
export default class TbPopular extends Component<Props>{
  render() {
    return (
      <View style={styles.page}>
        <Text>
            asd
        </Text>
      </View>  
    );
  }
  
}

const styles = StyleSheet.create({
    page: {
        flex:1,
        backgroundColor:'red'
    },
});
