import React, { useState, useContext, useReducer } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, StatusBar, TouchableOpacity, ActivityIndicator, ToastAndroid, Dimensions } from 'react-native';
import { Alert } from 'react-native';
import { AppContext } from '../navigation/AppContext';
import AxiosIntance from '../utils/AxiosIntance';
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const Register = (props) => {
  const { navigation } = props;
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirm_password, setconfirm_password] = useState('');
  const [hide, setHide] = useState(true);
  const [hide1, setHide1] = useState(true);
  const [isLoading, setisLoading] = useState(false);
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const showAlert = (mess) => {
    Alert.alert('Thông báo', mess);
  };

  let number = 'cc';

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const Login = () => {
    navigation.navigate('Login');
  };

  const onForget = () => {
    navigation.navigate('ForgetPass');
  };

  const dangKyNe = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email == '') {
      showAlert('Email không được để trống');
    }
    if (name == '') {
      showAlert('Tên không được để trống');
    } else if (emailRegex.test(email) == false) {
      showAlert('Vui lòng nhập email hợp lệ');
    } else if (password == '') {
      showAlert('Mật khẩu không được để trống');
    } else if (password.length < 6) {
      showAlert('Mật khẩu phải hơn 6 ký tự');
    } else if (confirm_password == '') {
      showAlert('Vui lòng nhập lại mật khẩu');
    } else if (password != confirm_password) {
      showAlert('Mật khẩu không trùng khớp');
    } else {
      try {
        setisLoading(true);
        handleFindUser(email);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleFindUser = async (email) => {
    try {
      const timeout = 10000; // 10 giây
      const res = await AxiosIntance().post('/user/findUser', { email: email });
      if (res.result == false) {
        try {
          const subject = "Mã " + number + " là mã OTP của bạn, xin vui lòng không chia sẻ mã này cho bất kỳ ai, mã sẽ có hiệu lực trong 10 phút.";
          const res = await AxiosIntance().post('/user/sendmail', { email: email, subject: subject });
          console.log(res);
          if (res.result == true) {
            showAlert('Mã OTP đã gửi đến email của bạn, xin vui lòng kiểm tra');
            navigation.navigate('OTPValidate', { email: email, OTP: number, name: name, password: password, ROLE: 'REGISTER' });
            setisLoading(false);
          } else {
            showAlert('Đã xuất hiện lỗi bất ngờ và chúng tôi đang cố gắng khắc phục');
            setisLoading(false);
          }
        } catch (error) {
          showAlert('Email không tồn tại');
          setisLoading(false);
        }
      } else if (res.result == true) {
        showAlert('Tài khoản đã tồn tại');
        setisLoading(false);
      }
    } catch (error) {
      showAlert("Có vẻ như server chưa được bật, vui lòng liên hệ nhà phát triển (Mã lỗi 4521)");
      setisLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      {
        isLoading == true ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size='large' color='#fff00' />
            <Text style={styles.loadingText}>Đang đăng ký...</Text>
          </View>
        ) : (
          <View>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={true} />
            <Image style={styles.image} source={require('../assets/image/Group.png')} />
            <TextInput style={styles.input} placeholder='Email' onChangeText={setemail} />
            <TextInput style={styles.input} placeholder='Tên' onChangeText={setName} />
            <View style={styles.passwordContainer}>
              <TextInput secureTextEntry={hide} style={styles.input} placeholder='Mật khẩu' onChangeText={setPassword} />
              <TouchableOpacity onPress={() => setHide(!hide)} style={styles.showHideIcon}>
                {hide ?
                  <Image style={styles.showHideIconImage} source={require('../assets/image/eye.png')} />
                  :
                  <Image style={styles.showHideIconImage} source={require('../assets/image/hide.png')} />
                }
              </TouchableOpacity>
            </View>
            <View style={styles.passwordContainer}>
              <TextInput secureTextEntry={hide1} style={styles.input} placeholder='Nhập lại mật khẩu' onChangeText={setconfirm_password} />
              <TouchableOpacity onPress={() => setHide1(!hide1)} style={styles.showHideIcon}>
                {hide1 ?
                  <Image style={styles.showHideIconImage} source={require('../assets/image/eye.png')} />
                  :
                  <Image style={styles.showHideIconImage} source={require('../assets/image/hide.png')} />
                }
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => dangKyNe()} style={styles.signUpButton}>
              <Text style={styles.signUpButtonText}>Đăng ký</Text>
            </TouchableOpacity>
            <View style={styles.orContainer}>
              <Text style={styles.orText}>- Hoặc tiếp tục bằng -</Text>
              <View style={styles.socialIconsContainer}>
                <Image style={styles.socialIcon} source={require('../assets/image/Google.png')} />
                <Image style={styles.socialIcon} source={require('../assets/image/Facebook.png')} />
              </View>
            </View>
            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>Đã có tài khoản?</Text>
              <TouchableOpacity onPress={() => Login()}>
                <Text style={styles.signInLink}> Đăng nhập</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }

    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: windowsWidth / 1.5,
    height: 210,
    marginTop: '18%',
  },
  input: {
    width: windowsWidth - 100,
    borderWidth: 1,
    borderRadius: 18,
    marginTop: 15,
    paddingLeft: 18,
    fontSize: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
  }, loadingContainer: {
    marginTop: '100%',
  },
  showHideIcon: {
    position: 'absolute',
    right: 0,
    top: '41%',
    marginRight: 10,
  },
  showHideIconImage: {
    width: 35,
    height: 25,
  },
  signUpButton: {
    backgroundColor: '#5B5D8B',
    width: windowsWidth - 100,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    marginTop: 18,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    marginTop: 10,
    textAlign: 'center'
  },
  orContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  socialIconsContainer: {
    flexDirection: 'row',
    width: 60,
    marginTop: 10,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  signInText: {
    fontSize: 14,
  },
  signInLink: {
    color: '#5B5D8B',
    fontSize: 14,
    fontWeight: 'bold',
  },

});

