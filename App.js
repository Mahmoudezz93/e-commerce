import React, {Component} from 'react';
import { Text, View,TouchableHighlight, StyleSheet } from 'react-native';
// import styles from './styles.js'



const styles = StyleSheet.create({
    headerStyle:{color: 'black',
                 fontWeight:'bold',
                fontSize:10,
    },
    InScreenStyle:{color:'black',
                   fontWeight: 'bold',
                  fontSize:15,
               
    },

    cube :{width: 500, height: 50, backgroundColor: 'powderblue'},
   
})





 
class Header extends Component {
  render(){

    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={{flex: 4,flexDirection: 'column',justifyContent: 'space-between',}}>
        <View style={styles.cube} />
        <View style={{ flex: 1 , width: 500, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 2, width: 500, height: 50, backgroundColor: 'steelblue' }} />
      </View>
      );

  }
}

export default Header ; 