import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity,ScrollView, StatusBar, FlatList, Dimensions, SafeAreaView } from 'react-native';
import { AppContext } from '../navigation/AppContext';
import AxiosIntance from '../utils/AxiosIntance';
import ItemHome from './ItemHome';

const windowsWidth = Dimensions.get('window').width;

const Home = (props) => {
    const { navigation } = props;
    const { infoUser, setinfoUser } = useContext(AppContext);
    const [data, setdata] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
    const [searchText, setSearchText] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    const search = async (searchText) => {
        setisLoading(true);
        setIsSearch(true);
        if (searchText.length < 1) {
            setIsSearch(false);
        }
        const respone = await AxiosIntance().get("/product/search/name?keyword=" + searchText);
        console.log("kq tim kiếm: ", respone);
        console.log("tim kiem: ", searchText);

        if (respone.result == true) {
            setdata(respone.product);
            setisLoading(false);
        } else {
            ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT);
        }
    };

    useEffect(() => {
        const getNews = async () => {
            const respone = await AxiosIntance().get("/product");
            setIsSearch(false);
            if (respone.result == true) {
                console.log("---------------------------");
                setdata(respone.product);
                setisLoading(false);
            } else {
                ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT);
            }
        };

        getNews();

        return () => {};
    }, []);

    const renderItemList = ({ item }) => <ItemHome products={item} navigation={navigation} />;
    const renderSectionHeader = ({ section }) => (
        // Render tiêu đề cho mỗi section
        <View style={{ backgroundColor: '#f0f0f0', padding: 5 }}>
          <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>
        </View>
      );
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white', marginTop: 45 }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={true} />

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginHorizontal: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: '700', color: '#5747BA' }}>
                    Xin chào, {infoUser.name}
                </Text>
                <Image style={{ marginLeft: 10 }} source={require('../assets/image/hello.png')} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <TextInput
                    placeholder='Tìm kiếm'
                    onChangeText={setSearchText}
                    style={{
                        width: windowsWidth - 60,
                        fontSize: 18,
                        borderWidth: 1,
                        paddingStart: 20,
                        borderColor: '#000000',
                        borderRadius: 45,
                    }}
                />
                <TouchableOpacity onPress={() => search(searchText)} style={{ marginLeft: -35 }}>
                    <Image source={require('../assets/image/search.png')} />
                </TouchableOpacity>
            </View>
            {!isSearch ? (
                <View>
                    <Text style={{ fontWeight: '500', fontSize: 20, color: '#000000', marginLeft: 10, marginTop: 20 }}>
                        Dành cho bạn
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <FlatList
                            numColumns={5}
                            data={data}
                            renderItem={renderItemList}
                            keyExtractor={item => item._id}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                    <Text style={{ fontWeight: '500', fontSize: 20, color: '#000000', marginLeft: 10, marginTop: 10, paddingBottom: 50 }}>
                        Tất cả sách
                    </Text>
                    <SafeAreaView style={{ flexDirection: 'row', marginTop: -40 }}>
                        <FlatList
                            numColumns={2}
                            data={data}
                            renderItem={renderItemList}
                            keyExtractor={item => item._id}
                            showsVerticalScrollIndicator={false}
                        />
                    </SafeAreaView>
                </View>
            ) : (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ width: 20, height: 60, position: 'absolute' }}>
                        <Image source={require('../assets/image/back.png')} />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: '500', textAlign: 'center', fontSize: 20, color: '#000000', marginLeft: 10, marginTop: 20 }}>
                        Kết quả tìm kiếm
                    </Text>
                    <SafeAreaView style={{ flexDirection: 'row', marginTop: 20 }}>
                        <FlatList
                            numColumns={2}
                            data={data}
                            renderItem={renderItemList}
                            keyExtractor={item => item._id}
                            showsVerticalScrollIndicator={false}
                        />
                    </SafeAreaView>
                </View>
            )}
        </ScrollView>
    );
};

export default Home;
