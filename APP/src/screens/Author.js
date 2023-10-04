import { StyleSheet, Text, View, Image, ScrollView, Dimensions, ActivityIndicator, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import AxiosIntance from '../utils/AxiosIntance'
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;
const Author = (props) => {
    const { navigation } = props;
    const { route } = props;
    const { product } = route.params;
    const [author, setAuthor] = useState({});
    const [isLoading, setisLoading] = useState(false);
    const fetchData = async () => {
        try {
            const response = await AxiosIntance().get("product/author/" + product.authorId);
            if (response.result === true) {
                setAuthor(response.author);
                console.log("fetchData đã chạy xong");
                setisLoading(false);
            }
        } catch (error) {
            console.log("Error while fetching data:", error);
        }
    };
    useEffect(() => {
        setisLoading(true);
        fetchData();
    }, [product.authorId]);

    const onBack = () => {
        navigation.goBack();
    }
    return (
        <ScrollView style={{ width: windowsWidth - 10, marginTop: windowsHeight * 0.065 }}>
            {
                (isLoading) ? (
                    <View style={{ marginTop: "90%" }}>
                        <ActivityIndicator size='super-large' color='#fff00' />
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '600', textAlign: 'center', marginTop: 10 }}>Loading...</Text>
                    </View>
                ) :
                    (
                        <View style={{ justifyContent: 'center',}}>
                            <TouchableOpacity onPress={() => onBack()} style={styles.backButton}>
                                <Image style={{ width: 35, height: 35 }} source={require('../assets/image/back.png')} />
                            </TouchableOpacity>
                            <View style={{ marginTop: windowsHeight * 0.04, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Tác giả:{author.name} </Text>
                                <Image style={{ width: 260, height: 260, borderRadius: 15, margin: 15 }} source={{ uri: author.image }} ></Image>
                                <Text style={styles.introduce}>{author.introduce}{'\n'}</Text>
                                <Text style={styles.introduce}>{author.career}</Text>
                            </View>
                        </View>
                    )
            }
        </ScrollView>
    )
}

export default Author

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        left: 0,
        width: 27,
        height: 27,
        top: 0
    },
    introduce: {
        fontSize: 16,
        color: 'black'
    },
    
})