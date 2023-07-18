import { StyleSheet, Text, View, Image, TextInput, Pressable,StatusBar } from 'react-native'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const ChangeProfile = () => {
  return (
    <View style={{height:'100%',backgroundColor:'white'}}>
      <StatusBar barStyle="dark-content" hidden={false}  translucent={true} />
      < Image style={styles.image} source={require('../assets/image/avt.png')} />
      < Image style={styles.image2} source={require('../assets/image/avt2.png')} />
      < Image style={styles.image3} source={require('../assets/image/camera.png')} />
      <Text style={styles.fn} >First name</Text>
      <TextInput style={styles.txt} placeholder='Ross'></TextInput>
      <View style={styles.chi}></View>
      <Text style={styles.fn} >Last name</Text>
      <TextInput style={styles.txt} placeholder='Galler'></TextInput>
      <View style={styles.chi}></View>
      <Text style={styles.fn} >Email</Text>
      <TextInput style={styles.txt} placeholder='ross_galler10@gmail.com'></TextInput>
      <View style={styles.chi}></View>
      <Text style={styles.fn} >Mobile number</Text>
      <TextInput style={styles.txt} placeholder='null'></TextInput>
      <View style={styles.chi}></View>
      <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
        <BouncyCheckbox
          size={30}
          fillColor="black"
          unfillColor="#FFFFFF"
          text="Male"
          iconStyle={{ borderColor: "black" }} />
        <BouncyCheckbox style={{ marginLeft: 20 }}
          size={30}
          fillColor="black"
          unfillColor="#FFFFFF"
          text="Female"
          iconStyle={{ borderColor: "black" }} />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.txtbtn}>Update</Text>
      </Pressable>


    </View>
  )
}

export default ChangeProfile

const styles = StyleSheet.create({
  image: {
    marginLeft: 150,
    marginTop: 90
  },
  image2: {
    marginLeft: 180,
    marginTop: -65
  }, image3: {
    marginLeft: 230
  }, fn: {
    fontSize: 19,
    color: '#000000',
    marginLeft: 11,
    marginTop: 10,
  }, txt: {
    fontSize: 20,
    marginLeft: 30,

  }, chi: {
    backgroundColor: '#2E4756',
    height: 1.87,
    marginLeft: 3

  }, button: {
    backgroundColor: '#5B5D8B',
    width: 299,
    height: 56,
    borderRadius: 50,
    marginLeft: 45,
    marginTop: 35
  }, txtbtn: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 24
  }
})