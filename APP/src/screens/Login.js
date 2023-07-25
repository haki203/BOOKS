import { StyleSheet, Text, View, Image, TextInput, FlatList, ScrollView, Dimensions, StatusBar, ActivityIndicator, Pressable, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import { AppContext } from '../navigation/AppContext'
import CheckBox from '@react-native-community/checkbox';
import AxiosIntance from '../utils/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const Login = (props) => {
  const [email, setEmail] = useState("");
  const { setIsLogin, setinfoUser } = useContext(AppContext)
  const [newPass, setnewPass] = useState(AppContext);
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { navigation } = props;
  const [isLoading, setisLoading] = useState(false);
  const [savedAccounts, setSavedAccounts] = useState([]);
  const [filteredAccounts, setFilteredAccounts] = useState([]);
  const [isDropdown, setIsDropDown] = useState(true);
  // hide pass
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const showAlert = (mess) => {
    Alert.alert(
      'Thông báo',
      mess,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );
  }

// Lưu tài khoản (email và password) vào AsyncStorage
const SAVE_ACCOUNT_KEY = "save-account";
const saveAccount = async (email, password) => {
  try {
    const existingAccountsJson = await AsyncStorage.getItem(SAVE_ACCOUNT_KEY);
    const accounts = existingAccountsJson != null ? JSON.parse(existingAccountsJson) : {};
    
    if (accounts[email] && accounts[email] === password) {
      console.log(`Tài khoản với email ${email} đã tồn tại`);
      return;
    } else {
      console.log(`Cập nhật tài khoản với email ${email}`);
    }
    
    accounts[email] = password;
    await AsyncStorage.setItem(SAVE_ACCOUNT_KEY, JSON.stringify(accounts));
    console.log(`Tài khoản ${email} đã được lưu vào AsyncStorage`);
  } catch (error) {
    console.log('Lỗi khi lưu tài khoản vào AsyncStorage:', error);
  }
};



// Lấy mật khẩu của tài khoản từ AsyncStorage
const getSavedAccounts = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const accounts = await AsyncStorage.multiGet(keys);

    // Tìm giá trị tương ứng với khóa "save-account"
    const saveAccountItem = accounts.find(item => item[0] === 'save-account');

    if (saveAccountItem) {
      // Nếu tìm thấy giá trị "save-account", phân tích chuỗi JSON để lấy ra đối tượng tài khoản
      const saveAccountValue = saveAccountItem[1];
      const parsedAccounts = JSON.parse(saveAccountValue);

      // Tiến hành làm việc với đối tượng tài khoản (parsedAccounts) ở đây
      console.log(parsedAccounts);
      setSavedAccounts(parsedAccounts);
    } else {
      console.log('Không tìm thấy giá trị "save-account" trong AsyncStorage');
    }
  } catch (error) {
    console.log('Lỗi khi lấy danh sách tài khoản từ AsyncStorage:', error);
  }
};

  useEffect(() => {
    getSavedAccounts();
  }, []);

  // Hàm gợi ý tài khoản dựa trên email đang nhập
  const filterSavedAccounts = (inputText) => {
    try {
      if (inputText.length > 0) {
        // Chuyển đổi đối tượng savedAccounts thành mảng các mảng con chứa các cặp khóa-giá trị
        const savedAccountsArray = Object.entries(savedAccounts);
        const filteredAccounts = savedAccountsArray.filter(([email, password]) => {
          return email.includes(inputText);
        });
        setFilteredAccounts(filteredAccounts);
      }
      else{
        setFilteredAccounts([])
        return [];

      }
    } catch (error) {
      console.log(error);
    }
  };
  

  // Gọi hàm filterSavedAccounts khi thay đổi nội dung của TextInput
  const handleChangeText = (text) => {
    setEmail(text);
    setIsDropDown(true)
    filterSavedAccounts(text);
  };

  const onClick = async () => {
    if (email.length <= 0) {
      showAlert("Vui lòng nhập username")
    }
    else if (password.length <= 0) {
      showAlert("Vui lòng nhập password")
    }
    else {
      try {
        setisLoading(true);
        console.log(email);
        console.log(password);
        const res = await AxiosIntance().post("/user/login", { email: email, password: password });
        console.log("res ne:", res);

        if (res.result == true) {
          // luu mk 
          try {
            if (rememberPassword) {
              saveAccount(email, password);
              getSavedAccounts();
            }
          } catch (error) {
            console.log(error);
            setisLoading(true);
            setisLoading(false);
          }
          // luu token va qua trang home
          setinfoUser(res.user);
          setisLoading(false);
          setIsLogin(true);

        } else {
          showAlert("Tài khoản hoặc mật khẩu không chính xác")
          setisLoading(true);
          setisLoading(false);
        }
      } catch {
        showAlert("Có vẻ như server đã bị sập hoặc chưa được bật,vui lòng liên hệ nhà phát triển");
      }
    }
  }


  const onRegister = () => {
    navigation.navigate('Register')
  }
  const onForget = () => {
    navigation.navigate('ForgetPass')
  }
  return (
    <View style={styles.container}>
      {
        isLoading == true ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size='large' color='#fff00' />
            <Text style={styles.loadingText}>Đang đăng nhập...</Text>
          </View>
        ) : (
          <View style={styles.mainContainer}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={true} />
            <Image style={styles.loginImage} source={require('../assets/image/Group.png')} />
            <View>
              <TextInput value={email} onChangeText={handleChangeText} style={styles.textInput} placeholder='Email' />
              {
                isDropdown == true && (
                  <View>
                    {filteredAccounts.length > 0 && (
                      <View style={styles.dropdownContainer}>
                        {filteredAccounts.map((account) => (
                          <TouchableOpacity
                            key={account[0]}
                            onPress={() => {
                              setEmail(account[0]);
                              setPassword(account[1]);
                              setIsDropDown(false)
                            }}
                            style={styles.dropdownItem}
                          >
                            <Text style={styles.emailText}>{account[0]}</Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    )}
                  </View>
                )
              }

            </View>

            <View style={styles.passwordContainer}>
              <TextInput value={password} secureTextEntry={!isPasswordVisible} style={styles.textInput} placeholder='Mật khẩu' onChangeText={setPassword} />
              <TouchableOpacity onPress={togglePasswordVisibility} style={styles.hideButton}>
                {isPasswordVisible ?
                  <Image style={styles.hideImage} source={require('../assets/image/hide.png')} />
                  :
                  <Image style={styles.hideImage} source={require('../assets/image/eye.png')} />
                }

              </TouchableOpacity>
            </View>
            <View style={styles.checkBoxContainer}>
              <View style={styles.view1}>
                <CheckBox
                  value={rememberPassword}
                  onValueChange={(newValue) => setRememberPassword(newValue)}
                />
                <Text style={styles.textRememberPassword}>Lưu mật khẩu</Text>
              </View>
              <View style={styles.view2}>
                <TouchableOpacity onPress={() => onForget()}>
                  <Text style={styles.forgetPassword}>Quên mật khẩu?</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity onPress={() => onClick()} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Log in</Text>
            </TouchableOpacity>

            <Text style={styles.orSigninWith}>- Hoặc tiếp tục bằng -</Text>

            <View style={styles.socialIconsContainer}>
              <Image style={styles.socialIcon} source={require('../assets/image/Google.png')} />
              <Image style={styles.socialIcon} source={require('../assets/image/Facebook.png')} />
            </View>

            <View style={styles.noAccountYet}>
              <Text style={styles.noAccountText}>Chưa có tài khoản ?</Text>
              <TouchableOpacity onPress={() => onRegister()}>
                <Text style={styles.signupLink}> Đăng ký</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loadingContainer: {
    marginTop: '100%',
  },
  loadingText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loginImage: {
    width: windowsWidth / 1.5,
    height: 210,
    marginTop: '30%',
  },
  textInput: {
    width: windowsWidth - 100,
    borderWidth: 1,
    borderRadius: 18,
    marginTop: 15,
    paddingLeft: 18,
    fontSize: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  hideButton: {
    position: 'absolute',
    right: 0,
    top: '40%',
    marginRight: 10,
  },
  hideImage: {
    width: 30,
    height: 20,
    marginTop: 4
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    width: windowsWidth - 100,
    justifyContent: 'space-between',
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textRememberPassword: {
    fontSize: 15,
  },
  view2: {},
  forgetPassword: {
    color: '#5B5D8B',
    fontSize: 14,
    fontWeight: '700',
  },
  loginButton: {
    backgroundColor: '#5B5D8B',
    width: windowsWidth - 100,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    marginTop: 5,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  orSigninWith: {
    marginTop: 10,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  socialIcon: {
    width: 35,
    height: 35,
  },
  noAccountYet: {
    flexDirection: 'row',
  },
  noAccountText: {},
  signupLink: {
    color: '#5B5D8B',
    fontSize: 14,
    fontWeight: '700',
  },
  dropdownContainer: {
    position: 'absolute',
    top: 0, // Tùy chỉnh vị trí dropdown theo yêu cầu
    left: 55, // Tùy chỉnh vị trí dropdown theo yêu cầu
    width: 200, // Tùy chỉnh chiều rộng dropdown theo yêu cầu
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    zIndex: 1, // Đảm bảo dropdown hiển thị trên các phần tử khác
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  emailText: {
    fontSize: 16,
    color: '#333',
  },

});

export default Login;
