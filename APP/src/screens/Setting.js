import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, Image, Switch } from 'react-native'
import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;
import { Dropdown } from 'react-native-element-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { toggleMode } from '../redux/reducer/themeSlice';
import { TextInput } from 'react-native-paper';
const Setting = (props) => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const { navigation } = props;
    const dispatch = useDispatch();
    const backgroundColor = isDarkMode ? '#000000' : '#FFFFFF';
    const textColor = isDarkMode ? '#FFFFFF' : '#000000';
    const [isEnabled, setIsEnabled] = useState(false);
    const [value, setValue] = useState(2);
    const [isFocus, setIsFocus] = useState(false);
    const [mode, setMode] = useState(false);
    const [fontSize, setFontSize] = useState(16);
    const [savedMode, setSavedMode] = useState(false);
    const [savedFontSize, setSavedFontSize] = useState(16);
    // luu setting ----------------------

    useEffect(() => {
        // Lấy giá trị từ AsyncStorage khi component mount
        getSettings();
    }, []);
    // Gọi hàm saveSettings khi một trong hai giá trị mode hoặc fontSize thay đổi
    useEffect(() => {
        if (mode !== savedMode || fontSize !== savedFontSize) {
            saveSettings();
        }
    }, [mode, fontSize]);
    const getSettings = async () => {
        try {
            const storedMode = await AsyncStorage.getItem('mode'); // Thay đổi key lưu giá trị thành 'mode'
            const storedFontSize = await AsyncStorage.getItem('fontSize');
            setMode(storedMode);
            setFontSize(parseInt(storedFontSize));
            setSavedMode(storedMode);
            setSavedFontSize(parseInt(storedFontSize));
        } catch (error) {
            console.log('Error retrieving settings from AsyncStorage:', error);
        }
    };
    const saveSettings = async () => {
        try {
            if (fontSize >= 5) {
                await AsyncStorage.setItem('fontSize', fontSize.toString());
            }
            await AsyncStorage.setItem('mode', mode); // Thay đổi key lưu giá trị thành 'mode'

            console.log("saved");
        } catch (error) {
            console.log('Error saving settings to AsyncStorage:', error);
        }
    };



    // Gọi hàm handleChangeText khi thay đổi nội dung của TextInput
    const handleChangeText = (text) => {
        setFontSize(parseFloat(text));
    };

    const onChangeMode = () => {
        dispatch(toggleMode());
        setIsEnabled(previousState => !previousState);
    };
    const onBack = () => {
        navigation.goBack();
    }
    const giamSize=()=>{
        if(fontSize>10){
            setFontSize(parseInt(fontSize)-1);
        }
    }
    const tangSize=()=>{
        if(fontSize<30){
            setFontSize(parseInt(fontSize)+1);
        }
    }
    
    return (
        <View style={{ flex: 1, backgroundColor: backgroundColor, alignItems: 'center', }}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => onBack()} style={styles.backButton}>
                    {
                        (isDarkMode) ?
                            <View>
                                <Image style={{ width: 35, height: 35 }} source={require('../assets/image/back-white.png')} />
                            </View>
                            :
                            <View>
                                <Image style={{ width: 35, height: 35 }} source={require('../assets/image/back.png')} />
                            </View>
                    }
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: textColor,fontSize: fontSize < 25 ? 25 : fontSize }]}>Setting</Text>
            </View>
            <View>
                <Text style={{ fontSize: fontSize < 10 ? 10 : fontSize, fontWeight: 'bold', color: textColor,textAlign:'center' }}>Dark Mode</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ width: 30, color: textColor, }}>{isEnabled ? 'ON' : 'OFF'}</Text>
                    <Switch
                        style={{ backgroundColor: backgroundColor }}
                        value={isEnabled}
                        onValueChange={() => onChangeMode()}
                    />
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                {/* Phông chữ không thể bé hơn 10 */}
                <Text style={{ fontSize: fontSize < 10 ? 10 : fontSize, fontWeight: 'bold', color: textColor,textAlign:'center' }}>Phông chữ</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {
                        (!isDarkMode) ?
                            <View>
                                <TouchableOpacity onPress={giamSize}>
                                    <Image style={styles.iconFont} source={require('../assets/image/down.png')} />
                                </TouchableOpacity>
                            </View>
                            :
                            <View>
                                <TouchableOpacity onPress={giamSize}>
                                    <Image style={styles.iconFont} source={require('../assets/image/down-white.png')} />
                                </TouchableOpacity>
                            </View>
                    }
                    <TextInput style={{ width: 50, height: 40, color: textColor }} onChangeText={handleChangeText} keyboardType="numeric" value={fontSize.toString()} />
                    {
                        (!isDarkMode) ?
                            <View>
                                <TouchableOpacity onPress={tangSize}>
                                    <Image style={styles.iconFont} source={require('../assets/image/up.png')} />
                                </TouchableOpacity>
                            </View>
                            :
                            <View>
                                <TouchableOpacity onPress={tangSize}>
                                    <Image style={styles.iconFont} source={require('../assets/image/up-white.png')} />
                                </TouchableOpacity>
                            </View>
                    }
                </View>
            </View>
        </View>
    );
}

export default Setting

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 100,
        marginTop: 20,
        width: windowsWidth - 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    backButton: {
        position: 'absolute',
        left: 0,
        width: 27,
        height: 27,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        width: windowsWidth - 40,
        height: 100,
        borderRadius: 10,
        marginTop: 100,
    },
    iconFont: {
        width: 30,
        height: 30,
        margin:5,
    }
});

