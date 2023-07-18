import { StyleSheet, Text, View, Image, TextInput, ScrollView, Dimensions, Pressable, TouchableOpacity, Alert,StatusBar, ToastAndroid } from 'react-native'
import React, { useRef } from 'react'
import { useState, useContext } from 'react'
import { AppContext } from '../navigation/AppContext'
import AxiosIntance from '../utils/AxiosIntance'
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;
const ForgetPass = (props) => {
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const [email, setEmail] = useState("");
    let number = "cc";
    const { checkOTP, setCheckOTP } = useContext(AppContext)
    const { infoUser, setinfoUser } = useContext(AppContext)
    const [input, setInput] = useState("");
    const { OTP, setOTP } = useContext(AppContext)
    const [check, setCheck] = useState(false);
    const { navigation } = props;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const showAlert = (mess) => {
        Alert.alert(
            'Thông báo',
            mess,
        );
    }

    const onCheckMail = async () => {
        
        number = await getRandomNumber(1000, 9999);
        setOTP(number)
        console.log("number laa: ", number);
        if (email.length <= 0) {
            showAlert("Bạn chưa nhập email")
        }
        else if (emailRegex.test(email) == false) {
            showAlert("Vui lòng nhập email hợp lệ");
          }
        const res = await AxiosIntance().post("/user/findUser", { email: email });
        console.log(res);
        if (res.result == true) {
            setinfoUser(res.data.kq);
            try {
                const subject = "Mã " + number + " là mã OTP của bạn, xin vui lòng không chia sẻ mã này cho bất kì ai, mã sẽ có hiệu lực trong 10 phút."
                ToastAndroid.show("Dang kiem tra ...", ToastAndroid.SHORT);
                const res = await AxiosIntance().post("/user/sendmail", { email: email, subject: subject });
                console.log(res);
                if (res.result == true) {
                    navigation.navigate('OTPValidate', { email: email, OTP: number,ROLE:'LOGIN' })

                    ToastAndroid.show("Kiểm tra thành công", ToastAndroid.SHORT);

                } else {
                    ToastAndroid.show("Kiểm tra thất bại", ToastAndroid.SHORT);
                }
            } catch (error) {
                ToastAndroid.show("Lỗi", ToastAndroid.SHORT);
            }
        }
        else{
            showAlert("Email không tồn tại")
        }


    }
    const onCheckOTP = async (input,number) => {
        console.log("input la: ", input);
        console.log("number la: ", number);
        console.log("OTP la: ", OTP);
        if (parseInt(input) === parseInt(number)) {
            if (res.result == true) {
                setCheckOTP(true)
                setCheck(false)
            }
        }
        else {

            showAlert("Mã OTP không trùng khớp")

        }
    }

    return (
        <View style={{ alignItems: 'center', flex: 1,backgroundColor:'white' }}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={true} />

            <Image style={{ width: windowsWidth / 1.5, height: 210, marginTop: '30%' }} source={require('../assets/image/Group.png')} />

            {
                check == false ?
                    <View>
                        <Text style={{ fontSize: 22, fontWeight: 700, textAlign: 'center' }}> Quên mật khẩu</Text>
                        <TextInput style={styles.TextInput} placeholder='Vui lòng nhập email' onChangeText={setEmail} >
                        </TextInput>
                        <TouchableOpacity style={{ backgroundColor: '#5B5D8B', width: windowsWidth - 100, height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: 18, marginTop: 18 }} onPress={() => onCheckMail()}>
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 700 }}> Kiểm tra</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View>
                        <Text style={{ fontSize: 22, fontWeight: 700, textAlign: 'center' }}> Nhập OTP</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', textAlign: 'center' }}>
                            <TextInput
                                style={styles.inputOTP}
                                keyboardType='number-pad'
                                maxLength={1}
                                ref={firstInput}
                                onChangeText={text => {
                                    setInput(text)
                                    text && secondInput.current.focus();
                                }} />
                            <TextInput style={styles.inputOTP}
                                keyboardType='number-pad'
                                maxLength={1}
                                ref={secondInput}
                                onChangeText={text => {
                                    setInput(input + text)
                                    text ? thirdInput.current.focus() : firstInput.current.focus() && setInput(input - text)
                                }} />
                            <TextInput style={styles.inputOTP}
                                keyboardType='number-pad'
                                maxLength={1}
                                ref={thirdInput}
                                onChangeText={text => {
                                    setInput(input + text)
                                    text ? fourthInput.current.focus() : secondInput.current.focus() && setInput(input - text)
                                }} />
                            <TextInput
                                style={styles.inputOTP}
                                keyboardType='number-pad'
                                maxLength={1}
                                ref={fourthInput}
                                onChangeText={text => {
                                    setInput(input + text)
                                    !text && thirdInput.current.focus() && setInput(input - text)
                                }} />
                        </View>
                        {
                            (input.length < 4) ?
                                <View>
                                    <TouchableOpacity disabled={false} style={{ backgroundColor: '#5B5D8B', width: windowsWidth - 100, height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: 18, marginTop: 18 }} onPress={() => onCheckOTP()}>
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 700 }}> Kiểm tra</Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                <View>
                                    <TouchableOpacity style={{ backgroundColor: '#5B5D8B', width: windowsWidth - 100, height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: 18, marginTop: 18 }} onPress={() => onCheckOTP(input,number)}>
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 700 }}> Kiểm tra</Text>
                                    </TouchableOpacity>
                                </View>

                        }
                    </View>
            }
        </View>
    )
}
export default ForgetPass

const styles = StyleSheet.create({
    inputOTP: {
        width: 58,
        height: 55,
        marginTop: 15,
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        marginBottom: 0,
        fontSize: 18,
        paddingLeft: 24
    },
    TextInput: {
        width: windowsWidth - 100, borderWidth: 1, borderRadius: 18,
        marginTop: 15,
        paddingStart: 18,
        fontSize: 15
    },
    TextInput1: {
        position: 'absolute',
        height: 40,
        width: 190,
        marginTop: 344,
        borderWidth: 1,
        borderColor: '#00000087',
        borderRadius: 50,
        marginStart: 90,
        marginLeft: 90,
    },
    TextUser: {
        fontFamily: 'Hind Siliguri',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 23,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000'
    },
    TextInput2: {
        position: 'absolute',
        height: 40,
        width: 190,
        marginTop: 396,
        borderColor: '#00000087',
        borderWidth: 1,
        borderRadius: 270,
        marginStart: 90,
    },
    TextPass: {
        fontFamily: 'Hind Siliguri',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 23,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },
    Press: {
        position: 'absolute',
        marginTop: 459,
        marginStart: 88,
        height: 28,
        width: 190,
        backgroundColor: '#5B5D8B',
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextNut: {
        position: 'absolute',
        color: '#FFFFFF',
        fontSize: 17,
        fontFamily: 'Hind Siliguri',
    },

    Text1: {
        position: 'absolute',
        marginTop: 501,
        marginStart: 110,
        fontFamily: 'Hind Siliguri',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 24,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#4A489A',
    },
    Text2: {
        position: 'absolute',
        marginTop: 547,
        marginStart: 132,
        fontFamily: 'Hind Siliguri',
        fontSize: 13,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 21,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },
    Google: {
        position: 'absolute',
        marginTop: 600,
        marginStart: 105,
    },
    Facebook: {
        position: 'absolute',
        marginTop: 600,
        marginStart: 166,
    },
    Twitter: {
        position: 'absolute',
        marginTop: 600,
        marginStart: 226,
    },
    Text3: {
        position: 'absolute',
        marginTop: 680,
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


})