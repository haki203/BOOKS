import { FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View ,StatusBar} from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';

const data =
    [
        {
            "_id": "123",
            "name": "Nguyễn Long Vũ đã ra sách mới ",
            "content": "Kivu đang đi trên đường thì bị chó cắn alo alo",
            "time": "5m ago.",
            "image": "https://cdn-icons-png.flaticon.com/512/8297/8297354.png"
        },
        {
            "_id": "234",
            "name": "Nguyễn Trần Thức đã ra sách mới",
            "content": "Kivu đang đi trên đường thì bị chó cắn alo alo",
            "time": "5m ago.",
            "image": "https://cdn-icons-png.flaticon.com/512/8297/8297354.png"
        },
        {
            "_id": "345",
            "name": "Trần Thiện Chiến đã ra sách mới",
            "content": "Kivu đang đi trên đường thì bị chó cắn alo alo",
            "time": "5m ago.",
            "image": "https://cdn-icons-png.flaticon.com/512/8297/8297354.png"
        },
        {
            "_id": "456",
            "name": "Bùi Văn Việt đã ra sách mới",
            "content": "Kivu đang đi trên đường thì bị chó cắn alo alo",
            "time": "5m ago.",
            "image": "https://cdn-icons-png.flaticon.com/512/8297/8297354.png"
        },
    ]
const PAGE1 = 'PAGE1';
const PAGE2 = 'PAGE2';

const Notifications = () => {
    const [page, setPage] = useState(PAGE1);

    return (
        <View style={{backgroundColor:'white',marginTop:46}}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={true} />
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 10,backgroundColor:'white' }}>
                <Text style={{ fontSize: 25, color: '#000000', fontWeight: '700', textAlign: 'center', }}>Notifications</Text>
                <TouchableOpacity style={{ position: 'absolute', end: 0, margin: 10 }}>
                    <Image style={{ width: 30, height: 30, }} source={require('../assets/image/setting.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row',backgroundColor:'white' }}>

                <FlatList
                
                    data={data}
                    renderItem={({ item }) => <ItemNof data={item} />}
                    keyExtractor={item => item._id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}
const ItemNof = (props) => {
    const { data, } = props;
    return (
        <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 20, marginTop: 20,backgroundColor:'white' }}>
            <Image style={{ width: 50, height: 50, backgroundColor: 'black', borderRadius: 22 }} source={{ uri: data.image }} />
            <View style={{ flexDirection: 'column', marginLeft: 5, width: '70%' }}>
                <Text style={{ fontSize: 16, fontWeight: 700, color: 'black' }}>{data.name}</Text>
                <Text style={{ fontSize: 13, fontWeight: 500, }}>{data.content}</Text>
            </View>
            <Text style={{ width: '20%', textAlign: 'center', marginRight: 5 }}>{data.time}</Text>
        </View>
    )
}
export default Notifications

const styles = StyleSheet.create({})
