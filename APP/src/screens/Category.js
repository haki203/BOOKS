import { StyleSheet, Text, View, Image, ScrollView, Dimensions, ActivityIndicator, FlatList, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import AxiosIntance from '../utils/AxiosIntance'
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;
const Category = (props) => {
    const { navigation } = props;
    const { route } = props;
    const { categoryId, category } = route.params;
    const [product, setProduct] = useState({});
    const [isLoading, setisLoading] = useState(false);

    const fetchData = async () => {
        try {
            const response = await AxiosIntance().get("/product/get-by-category/" + categoryId);
            if (response.result === true) {
                setProduct(response.product);
                setisLoading(false);
            }
        } catch (error) {
            console.log("Error while fetching data:", error);
        }
    };
    useEffect(() => {
        console.log(category);
        setisLoading(true);
        fetchData();
    }, [categoryId]);
    const renderItemList = ({ item }) => <ItemCategory products={item} navigation={navigation} />;
    const onBack = () => {
        navigation.goBack();
    }

    return (
        <View style={{  justifyContent: 'center', marginTop: windowsHeight * 0.065, }}>
            {
                isLoading == true ? (
                    <View style={{ marginTop: "80%" }}>
                        <ActivityIndicator size='super-large' color='#fff00' />
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '600', textAlign: 'center', marginTop: 10 }}>Loading...</Text>
                    </View>
                )
                    :
                    (
                        <View style={{width:windowsWidth}}>
                            <TouchableOpacity onPress={() => onBack()} style={styles.backButton}>
                                <Image style={{ width: 35, height: 35 }} source={require('../assets/image/back.png')} />
                            </TouchableOpacity>
                            <View style={{ marginTop: windowsHeight * 0.01, alignItems: 'center',width:'100%' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'brown' }}>Các sách có thể loại {category}</Text>
                                <FlatList
                                    style={{width:'100%'}}
                                    data={product}
                                    renderItem={renderItemList}
                                    keyExtractor={item => item._id}
                                    showsVerticalScrollIndicator={false}
                                />
                            </View>
                        </View>
                    )
            }

        </View>
    )
}
const ItemCategory = (props) => {
    const { products, navigation } = props;
    const ClickDetail = () => {
        navigation.navigate('HomeDetails', { id: products._id });
    }
    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const formattedDate = `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`;
        return formattedDate;
    }
    return (
        <TouchableOpacity style={{ marginTop: windowsHeight * 0.03, alignItems: 'center',height: windowsHeight / 2,width:'100%' }} onPress={ClickDetail}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={true} />
            <View style={styles.container}>
                <Image style={styles.images} source={{ uri: products.image }} />
                <Text style={styles.name}>{products.title}</Text>
                <Text numberOfLines={3} style={styles.mota}>{products.description}</Text>
                <Text style={styles.dateCreate}>Ngày đăng: {formatDate(products.createAt)}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default Category

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        left: 0,
        width: 27,
        height: 27,
        top: 0, width: 35, height: 35,
    },
    introduce: {
        fontSize: 16,
        color: 'black'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eff4fb',
        width:'90%',
        height:'100%',
        margin: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    images: {
        width: '45%',
        height: '66%',
        borderRadius: 17,
    },
    name: {
        fontWeight: '800',
        fontSize: 16,
        color: '#000000',
        marginTop: 6,
        textAlign: 'center',

    },
    tacgia: {
        color: '#000000B8',
        fontWeight: '600',
        height: 20,
        fontSize: 14,
        fontStyle: 'normal',
        marginTop: 4,
        marginLeft: 2
    },
    mota: {
        color: '#000000B8',
        fontSize: 14,
        width: '98%',
        fontWeight: '400',
        fontStyle: 'normal',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    dateCreate:{
        marginTop:4
    }

})