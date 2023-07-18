import {
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useState, useContext } from 'react'
import { AppContext } from '../../src/navigation/AppContext'
const Profile = (props) => {
  const { infoUser, setinfoUser } = useContext(AppContext)
  const { isLogin, setIsLogin } = useContext(AppContext)
  const { navigation } = props;
  const onResetPass = () => {
    navigation.navigate('ChangePass', { _id: infoUser._id });
  }
  const onLogout = () => {
    setinfoUser("")
    setIsLogin(false)
    navigation.navigate('Login');
  }
  const onProfile = () => {
    navigation.navigate('ChangeProfile');
  }
  const onPrivacy = () => {
    navigation.navigate('Privacy');
  }
  return (
    <ScrollView style={{ backgroundColor: 'white',marginTop:'10%' }}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor= 'white' translucent={true} />
      <Pressable style={styles.chien1}>
        <Image
          style={{ width: 90, height: 90, margin: 20 }}
          source={require('../assets/image/icon/ic__profile.png')}></Image>
        <Text style={{ marginTop: 50, fontSize: 30, color: '#000000' }}>
          {infoUser.name}
        </Text>
      </Pressable>

      <TouchableOpacity onPress={() => onProfile()} style={[styles.chien2,]}>
        <Image
          style={{ width: 30, height: 30, margin: 5, marginLeft: 10 }}
          source={require('../assets/image/icon/ic__profile2.png')}></Image>
        <Text style={styles.text1}>Change Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPrivacy()} style={[styles.chien2,]}>
        <Image
          style={{ width: 30, height: 30, margin: 5, marginLeft: 10 }}
          source={require('../assets/image/icon/ic__privacy.png')}></Image>
        <Text style={styles.text1}>Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onLogout()} style={[styles.chien2,]}>
        <Image
          style={{ width: 30, height: 30, margin: 5, marginLeft: 10 }}
          source={require('../assets/image/icon/ic__logout.png')}></Image>
        <Text style={styles.text1}>Log Out</Text>
      </TouchableOpacity>
      <Pressable onPress={() => onResetPass()} style={styles.chien2}>
        <Image
          style={{ width: 30, height: 30, margin: 5, marginLeft: 10 }}
          source={require('../assets/image/icon/ic__key.png')}></Image>
        <Text style={styles.text1}>Manage your password</Text>
      </Pressable>
      <Pressable style={styles.chien2}>
        <Image
          style={{ width: 30, height: 30, margin: 5, marginLeft: 10 }}
          source={require('../assets/image/icon/ic__heart.png')}></Image>
        <Text style={styles.text1}>Your favourite</Text>
      </Pressable>


      <Pressable style={styles.chien2}>
        <Image
          style={{ width: 32, height: 32, margin: 5, marginLeft: 10 }}
          source={require('../assets/image/icon/ic__contact-mail.png')}></Image>
        <Text style={styles.text1}>Contact Us</Text>
      </Pressable>
      <Pressable style={styles.chien2}>
        <Image
          style={{ width: 30, height: 30, margin: 5, marginLeft: 10 }}
          source={require('../assets/image/icon/ic__aboutus.png')}></Image>
        <Text style={styles.text1}>About Us</Text>
      </Pressable>
      <TouchableOpacity onPress={() => onLogout()} style={[styles.chien2,]}>
        <Image
          style={{ width: 30, height: 30, margin: 5, marginLeft: 10 }}
          source={require('../assets/image/icon/ic__logout.png')}></Image>
        <Text style={styles.text1}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  chien1: {
    flexDirection: 'row',
    height: 150,
    width: '100%',
    backgroundColor:'white',
    marginBottom: 5,
  },
  chien2: {
    flexDirection: 'row',
    alignItems:'center',
    margin: 10,
    height:70,
    borderRadius: 10,
    backgroundColor:  '#dfdfdf',
  },
  text1: {
    marginTop: 1,
    marginLeft: 10,
    color: '#110000',
    fontFamily: 'Hind Siliguri',
    fontWeight: '100',
    fontSize: 25,
    lineHeight: 32,
  }
});
