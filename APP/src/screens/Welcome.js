import { Image, StyleSheet, Text, View, Pressable, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';

const Welcome = (props) => {
  const { navigation } = props;

  const onLogin = () => {
    navigation.navigate('Login');
  };

  const onRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#5B5D8B" translucent={true} />
      <Image style={styles.logo} source={require('../assets/image/Book.png')} />
      <Text style={styles.text1}>Welcome</Text>

      <Text style={styles.text2}>read without limits</Text>

      <TouchableOpacity onPress={() => onLogin(navigation)} style={styles.button}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onRegister} style={styles.button}>
        <Text style={styles.buttonText}>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5B5D8B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '80%', // Kích thước của hình ảnh được thiết lập theo tỷ lệ phần trăm của màn hình
    aspectRatio: 1, // Giữ cho hình ảnh tỷ lệ 1:1
  },
  text1: {
    fontFamily: 'Hind Siliguri',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 38,
    lineHeight: 52,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 20,
  },
  text2: {
    fontFamily: 'Hind Siliguri',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 10,
  },
  button: {
    height: 50,
    width: '60%', // Kích thước của nút được thiết lập theo tỷ lệ phần trăm của màn hình
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#2E2C9CBA',
    fontSize: 17,
    fontFamily: 'Hind Siliguri',
  },
});

export default Welcome;
