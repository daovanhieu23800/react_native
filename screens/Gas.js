import React, { Component } from 'react'
import {  StyleSheet, TouchableWithoutFeedback, View,  } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as theme from '../theme';
import { Block, Text, PanSlider } from '../components';
import mocks from '../settings';

import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Button from '../components/Buttons';
class Settings extends Component {
  // static navigationOptions = {
  //   headerLeft: ({ onPress }) => (
  //     <TouchableWithoutFeedback onPress={() => onPress()}>
  //       <FontAwesome size={theme.sizes.font * 1.5} color={theme.colors.black} name="arrow-left" />
  //     </TouchableWithoutFeedback>
  //   ),
  //   headerLeftContainerStyle: {
  //     paddingLeft: theme.sizes.base * 2
  //   },
  //   headerStyle: {
  //     borderBottomColor: 'transparent',
  //   }
  // };

  state = {
    direction: 45,
    speed: 12,
  }

  renderController() {
    return (
      <Block flex={1} right style={styles.controller}>
        <Block center style={styles.controllerValue}>
          <Text color="white">34</Text>
        </Block>
        <Block flex={0.8} style={[styles.controllerOverlay]} />
      </Block>
    )
  }

  render() {
    const { navigation, settings } = this.props;
    // const name = navigation.getParam('name');
    const name = this.props.route.params.name
    const Icon = settings[name].icon;
    const screenWidth = Dimensions.get("window").width;

    return (
      <Block flex={1} style={styles.settings}>
        <Block flex={0.5} row>
          <Block column>
          <LineChart
    style={{marginLeft:0,paddingLeft:0}}
    data={{
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
          ]
        }
      ]
    }}
    width={screenWidth/1.2} // from react-native
    height={screenWidth/2}
    
    yAxisInterval={1} // optional, defaults to 1
    // withHorizontalLabels={false}
    
    chartConfig={{
      backgroundGradientFrom: "#ffa726",
      backgroundGradientTo: "#ff3c26",
    decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "1",
        strokeWidth: "1",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
      padding: 5,
      paddingRight: 37,

    }}
  />
        </Block>
    </Block> 
         <Block flex={1} style={{ paddingTop: theme.sizes.base * 2 }}>
          
          
          <View>
            <Button  title="turn off" onPress={()=>{alert('av')}} />
          
          </View>
        </Block>
        
      </Block>
    )
  }
}

Settings.defaultProps = {
  settings: mocks,
}

export default Settings;

const styles = StyleSheet.create({
  settings: {
    padding: theme.sizes.base * 2,
  },
  button:{
      color:'red'
      
  }
})
