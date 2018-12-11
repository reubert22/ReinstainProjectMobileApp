//@flow
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Item, Input, Button } from 'native-base'
import Logo from './src/img/login.jpg'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ImageBackground source={Logo} style={{ resizeMode: 'center', flex: 1 }} >
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontFamily: 'Roboto', fontSize: 50, color: "#fff", fontWeight: '600' }}>Reinstain</Text>
          <Text style={{ fontFamily: 'Roboto', fontSize: 50, color: "#fff", fontWeight: '600' }}>App</Text>
        </View>
        <View style={styles.container}>
          <Item rounded style={{
            marginTop: 10,
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderColor: 'rgba(255,255,255,0.5)'
          }}>
            <Input placeholder="Username" />
          </Item>
          <Item rounded style={{
            marginTop: 10,
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderColor: 'rgba(255,255,255,0.5)'
          }}>
            <Input placeholder="Password" />
          </Item>
        </View>
        <View style={{ flex: 1, width: "100%", alignItems: 'flex-end', justifyContent: 'flex-end' }}>
          <Button style={{
            width: "100%",
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "rgba(233, 31, 37, 0.5)"
          }}>
            <Text>Login</Text>
          </Button>
        </View>
      </ImageBackground >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  }
});
