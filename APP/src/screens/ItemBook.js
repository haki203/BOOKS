import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import ItemDetails from './HomeDetails';

const ItemBook = (props) => {
    const { products, navigation } = props;
    const ClickDetail = () =>{
        navigation.navigate('ItemDetails')
    }
  return (
    <View >
      <View style={styles.container}>
        <TouchableOpacity onPress={ClickDetail}>
            <Image style={{
                width: 116.98,
                height: 200,
                marginTop: 17,
                borderColor: '#ADB3BC',
                marginLeft: 11
            }} source={{ uri: products.image}}></Image>
            </TouchableOpacity>
            <Text style={{
                fontSize: 18,
                fontWeight: '600',
                fontStyle: 'normal',
                display: 'flex',
                color: '#000000',
                marginTop: 39,
                marginLeft: 24.02
            }}>{products.name}</Text>
            <Text style={{
                position: 'absolute',
                marginTop: 77,
                marginLeft: 182,
                fontSize: 20,
                fontStyle: 'normal',
                fontWeight: '600',
                color: '#2E4756'
            }}>{products.price}</Text>
            <Image style={{
                position: 'absolute',
                marginLeft: 266,
                marginTop: 183
            }} source={require('../assets/image/tym.png')}></Image>

      </View>
    </View>
  )
}

export default ItemBook

const styles = StyleSheet.create({
    container:{
        width: 500,
        height: 240,
        borderWidth: 1,
        borderColor: '#ADB3BC',
        marginTop: 10,
        flexDirection: 'row'
    }
})