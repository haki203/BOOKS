import React from 'react';
import {View, Text, StyleSheet, Image,textDecorationLine} from 'react-native';

const ContactUs = () => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.img}
          source={require('../icon/ic_book.png')}></Image>
        <Text style={styles.text1}>Online Store</Text>
      </View>
      <Text style={styles.text2}>
        Kizhakemuri Edam, Good Shepherd Street, Kottayam, Kerala 686001.
      </Text>
      <Text style={styles.text3}>Phone: <Text style={{color:'#4B87F1', textDecorationLine:'underline'}}>+91-9846 221 331</Text>,</Text>
      <Text style={styles.text4}>+91 481 2563114 <Text style={{color:'#000000'}}>,</Text>  </Text>
      <Text style={styles.text4}>+91 481 2301614<Text style={{color:'#000000'}}>.</Text></Text>
      <Text style={styles.text3}>Email:</Text>
      <Text style={styles.text4}>customercare@dcbookshop.net,</Text>
      <Text style={styles.text4}>support@dcbookshop.net,</Text>
      <Text style={styles.text4}>onlinesales@dcbookshop.net</Text>


    </View>
  );
};

export default ContactUs;
const styles = StyleSheet.create({
  img: {
    marginLeft: 31,
    marginTop: 32,
  },
  text1: {
    marginTop: 50,
    marginLeft: 20,
    overflow: 'hidden',
    fontSize: 24,
    fontFamily:'Hind Siliguri',
    fontWeight: '100',
    lineHeight: 39,
    color:'#000000'
  },
  text2:{
    marginLeft:10,
    overflow: 'hidden',
    fontSize: 24,
    fontFamily:'Hind Siliguri',
    fontWeight: '100',
    lineHeight: 39,
    color:'#000000'
  },
  text3:{
    marginTop:40,
    marginLeft:10,
    overflow: 'hidden',
    fontSize: 24,
    fontFamily:'Hind Siliguri',
    fontWeight: '100',
    lineHeight: 39,
    color:'#000000'
  },
  text4:{
    marginLeft:10,
    overflow: 'hidden',
    fontSize: 24,
    fontFamily:'Hind Siliguri',
    fontWeight: '100',
    lineHeight: 39,
    color:'#4B87F1',
    textDecorationLine:'underline'
  }
});
