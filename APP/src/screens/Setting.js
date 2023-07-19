import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, Image, Switch } from 'react-native'
import React, { useState,useEffect } from 'react'

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

    // luu setting ----------------------

    useEffect(() => {
        // Lấy giá trị từ AsyncStorage khi component mount
        getSettings();
    }, []);
    useEffect(() => {
        // Lưu giá trị vào AsyncStorage khi giá trị thay đổi
        saveSettings();
    }, [mode, fontSize]);
    const getSettings = async () => {
        try {
            const storedMode = await AsyncStorage.getItem('mode'); // Thay đổi key lưu giá trị thành 'mode'
            const storedFontSize = await AsyncStorage.getItem('fontSize');

            if (storedMode !== null) {
                setMode(JSON.parse(storedMode));
            }

            if (storedFontSize !== null) {
                setFontSize(parseInt(storedFontSize));
            }
        } catch (error) {
            console.log('Error retrieving settings from AsyncStorage:', error);
        }
    };
    const saveSettings = async () => {
        try {
          await AsyncStorage.setItem('mode', JSON.stringify(mode)); // Thay đổi key lưu giá trị thành 'mode'
          await AsyncStorage.setItem('fontSize', fontSize.toString());
        } catch (error) {
          console.log('Error saving settings to AsyncStorage:', error);
        }
      };



    const onChangeMode = () => {
        dispatch(toggleMode());
        setIsEnabled(previousState => !previousState);
    };
    const onBack = () => {
        navigation.goBack();
    }
    return (
        <View style={{ flex: 1, backgroundColor: backgroundColor, alignItems: 'center', }}>
            <StatusBar backgroundColor={backgroundColor} translucent={true} />
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
                <Text style={[styles.headerTitle, { color: textColor }]}>Setting</Text>
            </View>
            <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: textColor }}>Dark Mode</Text>
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
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: textColor }}>Phông chữ</Text>
                    {
                        isDarkMode ?
                        <
                    }
                <TextInput style={{width:50,height:40, color:textColor}} keyboardType="numeric" defaultValue={fontSize} />
                <TouchableOpacity>

                </TouchableOpacity>
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
        width: 30,
        height: 30,
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
});

