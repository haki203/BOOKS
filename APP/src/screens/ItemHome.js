import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, StatusBar } from 'react-native'
import React from 'react'
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;
const ItemHome = (props) => {
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
    <TouchableOpacity onPress={() => ClickDetail()}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={true} />
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.container}>
          <Image style={styles.images} source={{ uri: products.image }}></Image>
          <Text style={styles.name}>{products.title}</Text>
          <Text numberOfLines={3} style={styles.mota}>{products.description}</Text>
          <Text style={styles.createAt}>Ngày đăng: {formatDate(products.createAt)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

}

export default ItemHome

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eff4fb',
    width: (windowsWidth / 2) - 13,
    height: windowsHeight/2,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    borderRadius: 20
  },
  name: {
    fontWeight: '800',
    fontSize: 16,
    color: '#000000',
    height: 40,
    marginTop: 6,
    textAlign: 'center'
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
    width: '96%',
    fontWeight: '400',
    fontStyle: 'normal',
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  images: {
    width: 160,
    height: 232,
    borderRadius: 17,
  },
  createAt:{
    fontSize:14,
    fontWeight:'bold'
  }
})