import { StyleSheet, Text, TouchableOpacity, View, Image ,Dimensions,StatusBar} from 'react-native'
import React from 'react'
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;
const ItemHome = (props) => {
  const { products,navigation } = props;
  const ClickDetail = () =>{
    navigation.navigate('HomeDetails', { id: products._id });
}

  return (
    <TouchableOpacity onPress={()=>ClickDetail()}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={true} />
        <View style={{ flexDirection: 'row'}}>
          <View style={styles.container}>
            <Image style={styles.images}  source={{ uri: products.image }}></Image>
            <Text style={styles.name}>{products.name}</Text>
            <Text style={styles.tacgia}>{products.author}</Text>
            <Text  style={styles.mota}>{products.content}</Text>
            <Text style={styles.price}>{products.price}</Text>
          </View>
        </View>
    </TouchableOpacity>
  )

}

export default ItemHome

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#eff4fb',
    width:(windowsWidth/2)-13,
    height: 420,
    margin:3,

    marginBottom:0,
    
    justifyContent:'center',
    alignItems:'center',
    paddingTop:10,
    borderRadius:20
  },
  name: {
    fontWeight: '800',
    fontSize: 16,
    color: '#000000',
    height:40,
    marginTop: 6,  
    textAlign:'center'
  },
  tacgia: {
    color: '#000000B8',
    fontWeight: '600',
    height:20,
    fontSize: 14,
    fontStyle: 'normal',
    marginTop: 4,
    marginLeft: 2
  },
  mota: {
    color: '#000000B8',
    fontSize: 14,
    width:'90%',
    fontWeight: '400',
    height:84,
    fontStyle: 'normal',
    marginTop: 2,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center'
  },
  images: {
    width: 160,
    height: 232,
    borderRadius: 17,
  }
})