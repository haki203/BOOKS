import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const ItemCart = () => {
  return (
    <View>
      <View style={{
        width: '100%',
        height: 190,
        borderWidth: 1,
        borderColor: '#F5F5F5',
        marginTop: 120
      }}>
        <View style={{flexDirection: 'row'}}>
        <Image style={{
          width: 114,
          height: 178,
          marginTop: 6,
          marginLeft: 2
        }} source={require('./images/cover.png')}></Image>
        <Text style={{
          color: '#000000',
          fontStyle: 'normal',
          fontSize: 18,
          fontWeight: '600',
          marginTop: 11,
          marginLeft: 8
        }}>Sherlock Holmes</Text>
        <View>
          
        </View>
        <Text style={{
          position: 'absolute',
          color: '#2E4756',
          fontStyle: 'normal',
          fontSize: 20,
          fontWeight: '600',
          marginTop: 152,
          marginLeft: 149
        }}>$ 29.39</Text>
        <Image style={{
          position: 'absolute',
          marginTop: 152,
          marginLeft: 345,
          width: 30,
          height: 36
        }} source={require('./images/rac.png')}></Image>
        </View>
      </View>
        <View style={{
          flexDirection: 'row'
        }}>
      <Text style={{
        color: '#31516D',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        marginTop: 11,
        marginLeft: 2
      }}>Total: </Text>
      <Text style={{
        color: '#31516D',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        marginTop: 11
      }}>$29.39</Text>
      </View>
    </View>
  )
}

export default ItemCart

const styles = StyleSheet.create({})