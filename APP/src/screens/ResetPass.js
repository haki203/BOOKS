import { StyleSheet, Text, View, Image, Pressable, TextInput, ToastAndroid, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../src/navigation/AppContext';
import AxiosIntance from '../src/utils/AxiosIntance';
const ResetPass = async (props) => {
  const { navigation } = props;
  const [newPassword, setnewPassword] = useState("")
  const [cNewPassword, setcNewPassword] = useState("")
  const { setIsLogin, setinfoUser } = useContext(AppContext)
  // const [setisRegister] = useState(AppContext)
  const [newPass, setnewPass] = useState(AppContext);
  const onClickNe = async () => {
    if (newPass == "") {
      Alert.alert('Thông Báo', 'Tài khoản không được để trống ', [
        {
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    } else if (newPass == "") {
      Alert.alert('Thông Báo', 'Mật khẩu không được để trống ', [
        {
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
    else if (passwordnew == "") {
      console.log("asd:" + newPass)
      Alert.alert('Thông Báo', 'Mật khẩu mới không được để trống ', [
        {
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    } else {
      const response = await AxiosIntance().post("/api/user/changepass", { password: newPassword });
      console.log(response)
      if (response.result == true) {
        setIsLogin(true);
        // navigation.navigate("DangNhap");
        ToastAndroid.show("Đổi mật khẩu thành công", ToastAndroid.SHORT);
      } else {
        ToastAndroid.show("Đổi mật khẩu thất bại", ToastAndroid.SHORT);
      }
    }
  }
  return (
    <View>
      <Text style={styles.Text1}>Reset password</Text>

      <TextInput placeholder='Password' style={styles.Text2}>
        <Text />
      </TextInput>

      <Image style={styles.Line1} source={require('../TranThuc/images/Line23.png')} />

      <TextInput placeholder='Newpassword' style={styles.Text3}>
        <Text />
      </TextInput>

      <Image style={styles.Line2} source={require('../TranThuc/images/Line23.png')} />

      <TextInput placeholder='Confirmpassword' style={styles.Text4}>
        <Text />
      </TextInput>

      <Image style={styles.Line3} source={require('../TranThuc/images/Line23.png')} />

      <Pressable onPress={() => onClickNe()} style={styles.Press}>
        <Text style={styles.TextNut}>Update</Text>
      </Pressable>
    </View>
  )
}

export default ResetPass

const styles = StyleSheet.create({
  Text1: {
    position: 'absolute',
    marginTop: 128,
    marginStart: 5,
    fontFamily: 'Hind Siliguri',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 39,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#000000',
  },
  Text2: {
    position: 'absolute',
    marginTop: 250,
    marginStart: 22,
    fontFamily: 'Hind Siliguri',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 32,
    display: 'flex',
    color: '#000000',
  },
  Text3: {
    position: 'absolute',
    marginTop: 308,
    marginStart: 22,
    fontFamily: 'Hind Siliguri',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 32,
    display: 'flex',
    color: '#000000',
  },
  Text4: {
    position: 'absolute',
    marginTop: 375,
    marginStart: 22,
    fontFamily: 'Hind Siliguri',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 32,
    display: 'flex',
    color: '#000000',
  },
  Line1: {
    position: 'absolute',
    marginTop: 290,
    width: 400,
  },
  Line2: {
    position: 'absolute',
    marginTop: 350,
    width: 400,
  },
  Line3: {
    position: 'absolute',
    marginTop: 420,
    width: 400,
  },
  Press: {
    position: 'absolute',
    marginTop: 484,
    marginStart: 40,
    height: 44,
    width: 299,
    backgroundColor: '#5B5D8B',
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextNut: {
    position: 'absolute',
    color: '#FFFFFF',
    fontSize: 32,
    fontFamily: 'Hind Siliguri',
  },
})