import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const Thongtin = (props) => {
    const { navigation } = props;

    const Login = () => {
        navigation.navigate('Login')
      }
  return (
    <View>
    <Image style={styles.Logo} source={require('../TranThuc/images/Group.png')} />

    <TextInput placeholder='Full name' style={styles.TextInput1}>
        <Text/>
    </TextInput>

    <TextInput placeholder='E-mail' style={styles.TextInput2}>
        <Text/>
    </TextInput>

    <TextInput placeholder='Pass word' style={styles.TextInput3}>
        <Text/>
    </TextInput>

    <Pressable style={styles.Press}>
        <Text style={styles.TextNut}>Sign up</Text>
    </Pressable>


    <View style={{ flexDirection: 'row' }}>
        <Text style={styles.Text3}>Already have an account?</Text>
        <TouchableOpacity onPress={Login}>
        <Text style={styles.Text4}>Log in</Text>
        </TouchableOpacity>
    </View>

    </View>
  )
}

export default Thongtin

const styles = StyleSheet.create({
    Logo: {
        position: 'absolute',
        marginTop: 180,
        marginStart: 115,
    },
    TextInput1: {
        position: 'absolute',
        height: 45,
        width: 300,
        marginTop: 330,
        borderWidth: 1,
        borderColor: '#00000087',
        borderRadius: 17,
        marginStart: 45

    },
    TextInput2: {
        position: 'absolute',
        height: 45,
        width: 300,
        marginTop: 400,
        borderWidth: 1,
        borderColor: '#00000087',
        borderRadius: 17,
        marginStart: 45

    },
    TextInput3: {
        position: 'absolute',
        height: 45,
        width: 300,
        marginTop: 470,
        borderWidth: 1,
        borderColor: '#00000087',
        borderRadius: 17,
        marginStart: 45
    },
    Press: {
        position: 'absolute',
        marginTop: 540,
        marginStart: 114,
        height: 40,
        width: 150,
        backgroundColor: '#5B5D8B',
        borderRadius: 17,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextNut: {
        position: 'absolute',
        color:'#FFFFFF',
        fontSize:17,
        fontFamily: 'Hind Siliguri',
    },
    Text: {
        position: 'absolute',
        marginTop: 678,
        marginStart: 87,
        fontFamily: 'Hind Siliguri',
        fontSize: 13,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 16,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },
    Text3: {
        position: 'absolute',
        marginTop: 650,
        marginStart: 87,
        fontFamily: 'Hind Siliguri',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 16,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
      },
      Text4: {
        marginTop: 650,
        fontFamily: 'Hind Siliguri',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 16,
        color: '#000000',
        position: 'absolute',
        marginLeft: 265
      },
})