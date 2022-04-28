import React, { Component } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import { LineChart, Path } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import * as theme from '../theme';
import { Block, Text } from '../components';
import mocks from '../settings';

class Dashboard extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    const { navigation, settings } = this.props;
    const LightIcon = settings['light'].icon;
    const ACIcon = settings['ac'].icon;
    const TempIcon = settings['temperature'].icon;
    const FanIcon = settings['fan'].icon;
    const WiFiIcon = settings['wi-fi'].icon;
    const ElectricityIcon = settings['electricity'].icon;
    const GasIcon = settings['gas'].icon

   
    const screenWidth = Dimensions.get("window").width;


    return (
      <Block style={styles.dashboard}>
        <Block column style={{ marginVertical: theme.sizes.base * 2, }}>
          <Text welcome>Hello</Text>
          <Text name>John Doe</Text>
        </Block>
        
        <Block row style={{ paddingVertical: 10 }}>
          <Block flex={1.5} row style={{ alignItems: 'flex-end', }}>
            <Text h1>34</Text>
            <Text h1 size={34} height={80} weight='600' spacing={0.1}>°C</Text>
          </Block>
          <Block flex={1} column>
            <Text caption>Humidity(in 24h)</Text>
           

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
            
          ]
        }
      ]
    }}
    width={160} // from react-native
    height={100}
    
    yAxisInterval={1} // optional, defaults to 1
    // withHorizontalLabels={false}
    
    chartConfig={{
      backgroundColor: "white",
      
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

        <ScrollView contentContainerStyle={styles.buttons} showsVerticalScrollIndicator={false}>
          <Block column space="between">
            <Block row space="around" style={{ marginVertical: theme.sizes.base }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Gas', { name: 'gas' })}
              >
                <Block center middle style={styles.button}>
                  <GasIcon size={38} />
                  <Text
                    button
                    style={{ marginTop: theme.sizes.base * 0.5 }}
                  >
                    {settings['gas'].name}
                  </Text>
                </Block>
              </TouchableOpacity>
              
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Settings', { name: 'ac' })}
              >
                <Block center middle style={styles.button}>
                  <ACIcon size={38} />
                  <Text
                    button
                    style={{ marginTop: theme.sizes.base * 0.5 }}
                  >
                    {settings['ac'].name}
                  </Text>
                </Block>
              </TouchableOpacity>
            </Block>
            
            <Block row space="around" style={{ marginVertical: theme.sizes.base }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Settings', { name: 'temperature' })}
              >
                <Block center middle style={styles.button}>
                  <TempIcon size={38} />
                  <Text
                    button
                    style={{ marginTop: theme.sizes.base * 0.5 }}
                  >
                    {settings['temperature'].name}
                  </Text>
                </Block>
              </TouchableOpacity>
              
              {/* <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Settings', { name: 'fan' })}
              >
                <Block center middle style={styles.button}>
                  <FanIcon size={38} />
                  <Text
                    button
                    style={{ marginTop: theme.sizes.base * 0.5 }}
                  >
                    {settings['fan'].name}
                  </Text>
                </Block>
              </TouchableOpacity>
            </Block>

            <Block row space="around" style={{ marginVertical: theme.sizes.base }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Settings', { name: 'wi-fi' })}
              >
                <Block center middle style={styles.button}>
                  <WiFiIcon size={38} />
                  <Text
                    button
                    style={{ marginTop: theme.sizes.base * 0.5 }}
                  >
                    {settings['wi-fi'].name}
                  </Text>
                </Block>
              </TouchableOpacity>
              
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Settings', { name: 'electricity' })}
              >
                <Block center middle style={styles.button}>
                  <ElectricityIcon size={38} />
                  <Text
                    button
                    style={{ marginTop: theme.sizes.base * 0.5 }}
                  >
                    {settings['electricity'].name}
                  </Text>
                </Block>
              </TouchableOpacity>*/}
            </Block>
          </Block> 
        </ScrollView>
      </Block>
    )
  }
}

Dashboard.defaultProps = {
  settings: mocks,
}

export default Dashboard;

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    padding: theme.sizes.base * 2,
    marginBottom: -theme.sizes.base * 6,
  },
  buttons: {
    flex: 1,
    marginBottom: -theme.sizes.base * 6,
  },
  button: {
    backgroundColor: theme.colors.button,
    width: 151,
    height: 151,
    borderRadius: 151 / 2,
  }
})
