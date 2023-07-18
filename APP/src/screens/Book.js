import { ScrollView, StyleSheet, Text, View, FlatList, numColumns } from 'react-native'
import React, { useState } from 'react'
import ItemBook from './ItemBook'

const Book = () => {

    return (
        <ScrollView>
            <View style={{flexDirection: 'column', marginTop: 152}}>
                <FlatList
                    data={dataNe}
                    renderItem={({ item }) => <ItemBook products={item} />}
                    keyExtractor={item => item._id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </ScrollView>
    )
}

export default Book

const styles = StyleSheet.create({})
const dataNe = [{
    "image": "https://cdn0.fahasa.com/media/catalog/product/6/0/6000chuyen-sinh-lam-nguoi-soi---tap-3.jpg",
    "name": "Spring Creek Bladderpod",
    "price": "$1.75"
}, {
    "image": "https://cdn0.fahasa.com/media/catalog/product/b/i/bia-ao-sao-13.jpg",
    "name": "Sort Art Online",
    "price": "$3.13"
}]