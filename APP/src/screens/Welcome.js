import { Image, StyleSheet, Text, View,Pressable, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'

const Welcome = (props) => {
    const {navigation} = props;
    const onLogin=()=>{
        navigation.navigate('Login')
    }
    const onRegister=()=>{
        navigation.navigate('Register')
    }
  return (

    <View style={styles.Nen}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor='#5B5D8B' translucent={true} />
        <Image style={styles.Logo} source={require('../assets/image/Book.png')}></Image>
        <Text style={styles.Text1}>Welcome</Text>
        
        <Text style={styles.Text2}>read without limits</Text>
        <TouchableOpacity onPress={()=>onLogin(navigation)} style={styles.Press1}>
            <Text style={styles.TextNut1}>Đăng nhập</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onRegister}  style={styles.Press2}>
            <Text style={styles.TextNut1}>Đăng ký</Text>
        </TouchableOpacity>


    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    Nen:{
        flex: 1,
        backgroundColor: '#5B5D8B',
        alignItems:'center'
    },
    Logo:{
        position: 'absolute',
        marginTop: 165,
        marginStart: 85,
    },
    Text1:{
        position: 'absolute',
        fontFamily: 'Hind Siliguri',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 38,
        lineHeight: 52,
        textAlign: 'center',
        color: '#FFFFFF',
        marginTop: 380,
        marginStart: 110
    },
    Text2:{
        position: 'absolute',
        fontFamily: 'Hind Siliguri',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 23,
        textAlign: 'center',
        color: '#FFFFFF',
        marginTop: 440,
        marginStart: 125,
        display: 'flex',
        alignItems: 'center',
    },
    Press1: {
        position: 'absolute',
        marginTop: 500,
        marginStart: 90,
        height: 40,
        width: 200,
        backgroundColor: '#5B5D8B',
        borderRadius: 17,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    TextNut1: {
        position: 'absolute',
        color:'#2E2C9CBA',
        fontSize:17,
        fontFamily: 'Hind Siliguri',
    },
    Press2:{
        position: 'absolute',
        marginTop: 555,
        marginStart: 90,
        height: 40,
        width: 200,
        backgroundColor: '#5B5D8B',
        borderRadius: 17,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    TextNut2:{
        position: 'absolute',
        color:'#2E2C9CBA',
        fontSize:17,
        fontFamily: 'Hind Siliguri',
    },
})