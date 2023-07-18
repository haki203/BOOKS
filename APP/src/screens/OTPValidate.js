import { StyleSheet, Text, View, TextInput, Image, Dimensions, TouchableOpacity, ToastAndroid, Alert, StatusBar } from 'react-native'
import React, { useRef, useState, useContext } from 'react'
import { AppContext } from '../navigation/AppContext';
import AxiosIntance from '../utils/AxiosIntance';
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;
const OTPValidate = (props) => {
    const { infoUser, setinfoUser } = useContext(AppContext)
    const [input, setInput] = useState("");
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const { route } = props;
    const { navigation } = props;
    const { params } = route;
    const { email, OTP, name, password, ROLE } = route.params;
    //console.log("OTP ne: ", OTP);
    console.log("Email ne: ", email);
    const showAlert = (mess) => {
        Alert.alert(
            'Thông báo',
            mess,
        );
    }
    const onCheckOTP = async () => {
        console.log("cl ne");

        if (parseInt(input) === parseInt(OTP)) {
            try {
                const res = await AxiosIntance().post("/user/register", { email: email, name: name, password: password, confirm_password: password });
                if (res.result == true) {
                    showAlert("Đăng ký thành công")
                    navigation.navigate('Login')
                }
                else {
                    showAlert("Đăng ký thất bại")
                    navigation.navigate('Register')
                }
            } catch (error) {

            }
        }

    }
    const onCheckOTPLogin = async (input, OTP) => {
        navigation.navigate('ChangePass', { _id: infoUser._id })

    }
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={true} />

            <Image style={{ width: windowsWidth / 1.5, height: 210, marginTop: '25%' }} source={require('../assets/image/Group.png')} />
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
                        <TouchableOpacity disabled={true} style={{ backgroundColor: '#5B5D8B', width: windowsWidth - 100, height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: 18, marginTop: 18 }} >
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 700 }}> Kiểm tra</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View>
                        {
                            (ROLE == 'LOGIN') ?
                                <View>
                                    <TouchableOpacity style={{ backgroundColor: '#5B5D8B', width: windowsWidth - 100, height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: 18, marginTop: 18 }} onPress={() => onCheckOTPLogin(input, OTP)}>
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 700 }}> Kiểm tra</Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                <View>
                                    <TouchableOpacity style={{ backgroundColor: '#5B5D8B', width: windowsWidth - 100, height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: 18, marginTop: 18 }} onPress={() => onCheckOTP(input, OTP)}>
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 700 }}> Kiểm tra</Text>
                                    </TouchableOpacity>
                                </View>
                        }
                    </View>

            }
        </View>
    )
}

export default OTPValidate

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