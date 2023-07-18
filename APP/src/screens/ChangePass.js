import { StyleSheet, Text, View, Image, Pressable, TextInput, ToastAndroid, Dimensions,TouchableOpacity, Alert,StatusBar } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../navigation/AppContext';
import AxiosIntance from '../utils/AxiosIntance';
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;
const ChangePass = (props) => {

  const { navigation } = props;
  const [newPassword, setNewPassword] = useState("")
  const { route } = props;
  const { params } = route;
  const {_id} = route.params;
  const [cNewPassword, setcNewPassword] = useState("")
  const { infoUser, setinfoUser } = useContext(AppContext);
  const { isLogin, setIsLogin } = useContext(AppContext);
  const onClickNe = async () => {
    if (newPassword == "") {
      Alert.alert('Thông Báo', 'Mật khẩu mới không được để trống ', [
        {
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
    else if (newPassword.length<6) {
      Alert.alert('Thông Báo', 'Mật khẩu phải trên 6 kí tự ', [
        {
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
    else if (cNewPassword == "") {
      Alert.alert('Thông Báo', 'Vui lòng nhập lại mật khẩu ', [
        {
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    } 
    else if (cNewPassword != newPassword) {
      Alert.alert('Thông Báo', 'Mật khẩu không khớp ', [
        { 
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }else {
      console.log(_id, newPassword);
      const response = await AxiosIntance().post("/user/changepass/", { _id: _id, new_password: newPassword });
      console.log(response)
      if (response.result == true) {
        setIsLogin(false);
        setIsLogin(true);
        // navigation.navigate("DangNhap");
        ToastAndroid.show("Đổi mật khẩu thành công", ToastAndroid.SHORT);
      } else {
        ToastAndroid.show("Đổi mật khẩu thất bại", ToastAndroid.SHORT);
      }
    }
  }
  return (
    <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={true} />
      <Text style={{fontSize:28,margin:'10%',fontWeight:700,}}>Reset password</Text>
      <TextInput onChangeText={setNewPassword} placeholder='New password' style={styles.textInput}>
        <Text />
      </TextInput>
      <TextInput onChangeText={setcNewPassword} placeholder='Confirm password' style={styles.textInput}>
        <Text />
      </TextInput>
      <Pressable onPress={() => onClickNe()} style={{ backgroundColor: '#5B5D8B', width: windowsWidth - 100, height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: 18, marginTop: 18 }}>
        <Text style={styles.TextNut}>Update</Text>
      </Pressable>
    </View>
  )
}

export default ChangePass

const styles = StyleSheet.create({
  textInput:{
      width: windowsWidth - 100, borderWidth: 1, borderRadius: 18,
      marginTop: 15,
      paddingStart: 18,
      fontSize: 18
  },
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