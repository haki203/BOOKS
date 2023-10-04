import { StyleSheet, Text, View, Image, ScrollView, Dimensions, ActivityIndicator, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import AxiosIntance from '../utils/AxiosIntance'
import { Dropdown } from 'react-native-element-dropdown';
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;
const ItemDetails = (props) => {
    //useNavigation 
    const { navigation } = props;
    const { route } = props;
    const { params } = route;
    const [category, setcategory] = useState("");
    const [page, setpage] = useState(1);
    const [author, setauthor] = useState("");
    const [content, setcontent] = useState("");
    const [product, setProduct] = useState("");
    const [isLoading, setisLoading] = useState(false);
    const scrollRef = useRef();
    const data = [
        { label: 'Giới thiệu', value: '1' },
        { label: 'Chương 1', value: '2' },
        { label: 'Chương 2', value: '3' },
        { label: 'Chương 3', value: '4' },
    ];
    const onAuthor =(idAuthor)=>{
        navigation.navigation("Author",{idAuthor})
    }
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };
    const onPressNext = () => {
        if (page > 3) {
            setpage(1)
        }
        else {
            setpage(Number(page) + 1 * 1)
        }
    }
    const onPressBack = () => {
        if (page <= 1) {
            setpage(1)
        }
        else {
            setpage(page - 1)
        }
    }
    const onPressTouch = () => {
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
        });
    }

    useEffect(() => {
        const getDetail = async () => {

            const response = await AxiosIntance().get("product?id=" + params.id);
            if (response.result == true) {    
                setcontent(response.product[0].description);
                setProduct(response.product[0]);

                // get author
                try {
                    const res = await AxiosIntance().get("/product/author/" + response.product[0].authorId);
                    console.log("tac gia ne: ",res);
                    if(res.result){
                        setauthor(res.author.name);
                        console.log("lay author thanh cong");
                    }
                    else{
                        console.log("result: ",res.result);
                        return null;
                    }
                } catch (error) {
                }
                // get category
                try {
                    const res = await AxiosIntance().get("/product/category/" + response.product[0].categoryId);
                    console.log("category ne: ",res);
                    if(res.result){
                        setcategory(res.category.name);
                        console.log("lay category thanh cong");
                        setisLoading(false);
                    }
                    else{
                        console.log("result: ",res.result);
                    }
                } catch (error) {
                }
            }
        }
        setisLoading(true);
        getDetail();

        return () => {

        }
    }, [])
    return (
        <View style={{ flex: 1, paddingBottom: 0, width: '100%', height: windowsHeight - 40, backgroundColor: 'white', }}>
            {
                isLoading == true ? (
                    <View style={{ marginTop: "90%" }}>
                        <ActivityIndicator size='super-large' color='#fff00' />
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '600', textAlign: 'center', marginTop: 10 }}>Loading...</Text>
                    </View>
                ) : (
                    <View style={{ flex: 1, padding: 10, paddingBottom: 0, width: '100%', height: windowsHeight - 40, backgroundColor: 'white', marginTop: 49 }}>
                        {/* navigation chapter */}
                        <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={true} />
                        <View style={{ borderRadius: 10, width: '100%', marginBottom: 5, height: 40, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#e6ede9', }}>
                            <TouchableOpacity onPress={() => { onPressTouch(), onPressBack(); }} style={styles.touch}>
                                <Image style={styles.iconNavigation} source={require('../assets/image/back.png')} />
                            </TouchableOpacity>
                            <View>
                                {
                                    page == 1 ?
                                        <View style={[styles.navView, { flexDirection: 'row', height: 500 }]} >
                                            <DropdownComponent name={'Giới thiệu'} data={data} value={value} setpage={setpage} isFocus={isFocus} setIsFocus={setIsFocus} setValue={setValue} />
                                        </View> :
                                        <View></View>
                                }
                                {
                                    page == 2 ?
                                        <View style={[styles.navView, { flexDirection: 'row', height: 500 }]} >
                                            <DropdownComponent name={'Chương 1'} data={data} value={value} setpage={setpage} isFocus={isFocus} setIsFocus={setIsFocus} setValue={setValue} />
                                        </View> :
                                        <View></View>
                                }
                                {
                                    page == 3 ?
                                        <View style={[styles.navView, { flexDirection: 'row', height: 500 }]} >
                                            <DropdownComponent name={'Chương 2'} data={data} value={value} setpage={setpage} isFocus={isFocus} setIsFocus={setIsFocus} setValue={setValue} />
                                        </View> :
                                        <View></View>
                                }
                                {
                                    page == 4 ?
                                        <View style={[styles.navView, { flexDirection: 'row', height: 500 }]} >
                                            <DropdownComponent name={'Chương 3'} data={data} value={value} setpage={setpage} isFocus={isFocus} setIsFocus={setIsFocus} setValue={setValue} />
                                        </View> :
                                        <View></View>
                                }
                            </View>
                            <TouchableOpacity onPress={() => { onPressTouch(), onPressNext(); }} style={styles.touch}>
                                <Image style={styles.iconNavigation} source={require('../assets/image/back.png')} />
                            </TouchableOpacity>
                        </View>
                        <ScrollView ref={scrollRef} >
                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>

                                {
                                    page == 1 ?
                                        <View style={{ width: '100%', height: windowsHeight / 2.35, }}>
                                            <TopComponent  author={author} category={category} navigation={navigation}  product={product} />
                                        </View> :
                                        <View></View>
                                }
                                {
                                    page == 1 ?
                                        <View style={{ width: '100%', }}>
                                            <BotComponent style={{ fontSize: 16, marginTop: 5, fontWeight: '500' }} content={content} />
                                        </View> :
                                        <View></View>
                                }
                                {
                                    page == 2 ?
                                        <View style={{ width: '100%', }}>
                                            <BotComponent1 style={{ fontSize: 16, marginTop: 5, fontWeight: '500' }} detail={detail} />
                                        </View> :
                                        <View></View>
                                }
                                {
                                    page == 3 ?
                                        <View style={{ width: '100%', }}>
                                            <BotComponent2 style={{ fontSize: 16, marginTop: 5, fontWeight: '500' }} detail={detail} />
                                        </View> :
                                        <View></View>
                                }
                                {
                                    page == 4 ?
                                        <View style={{ width: '100%', }}>
                                            <BotComponent3 style={{ fontSize: 16, marginTop: 5, fontWeight: '500' }} detail={detail} />
                                        </View> :
                                        <View></View>
                                }
                            </View>
                        </ScrollView >

                    </View >
                )
            }
        </View>

    )
}
const DropdownComponent = ({ data, value, setpage, isFocus, setIsFocus, setValue, name }) => {
    return (
        <View style={{}}>
            <Dropdown
                style={[{ width: 200, }, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={[styles.navText, { textAlign: 'center' }]}
                selectedTextStyle={{ textAlign: 'center' }}
                inputSearchStyle={{ height: 0 }}
                iconStyle={{ display: 'none' }}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? name : '...'}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setpage(item.value);
                    setIsFocus(false);
                }}
            />
        </View>
    )
}
const TopComponent = ({ author,navigation, category,product }) => {
    const onAuthor =()=>{
        navigation.navigate("Author",{product:product});
    }
    const onCategory=()=>{
        navigation.navigate("Category",{categoryId:product.categoryId,category:category});
    }
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#000000' }}>{product.title}</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 8, flexDirection: 'row' }}>
                <Text style={{ fontSize: 15, width: 55 }}>Tác giả:</Text>
                <TouchableOpacity onPress={onAuthor}  style={{}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, }}>{author}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 8, flexDirection: 'row' }}>
                <Text style={{ fontSize: 14.4, width: 62 }}>Thể loại:</Text>
                <TouchableOpacity onPress={onCategory} style={{}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, }}>{category}</Text>
                </TouchableOpacity>
            </View>
            <Image style={{ width: 160, height: 220, borderRadius: 15, margin: 10 }} source={{ uri: product.image }} ></Image>
        </View>
    )
}
const BotComponent = ({ content, style }) => {
    return (
        <View style={{ width: '100%', }}>
            <Text style={style}>{content}</Text>
        </View>
    )
}
const BotComponent1 = ({ detail, style }) => {
    return (
        <View style={{ width: '100%', }}>
            <Text style={style}>{detail.chuong1}</Text>
        </View>
    )
}
const BotComponent2 = ({ detail, style }) => {
    return (
        <View style={{ width: '100%', }}>
            <Text style={style}>{detail.chuong2}</Text>
        </View>
    )
}
const BotComponent3 = ({ detail, style }) => {
    return (
        <View style={{ width: '100%', }}>
            <Text style={style}>{detail.chuong3}</Text>
        </View>
    )
}
export default ItemDetails

const styles = StyleSheet.create({
    touch: {
        justifyContent: 'space-between',
    },
    textTouch: {
        fontWeight: 700
    }
    , iconNavigation: {
        width: 30, height: 30
    },
    navView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: '100%'
    },
    navText: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 700
    },
    dropdown: {
        flexDirection: 'row',
        width: 200
    }
})