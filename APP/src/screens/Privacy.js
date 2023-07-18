import { ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

const Privacy = () => {
  return (
    <ScrollView style={{ margin: 10, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={true} />
      <View style={{ marginTop: 50, }}>
        <Text style={{fontSize:25,textAlign:'center',color:'black',marginTop:5,fontWeight:700,marginBottom:10}} >Privacy</Text>
        <Text style={{ color: '#5B5D8B', fontSize: 21, fontWeight: 'bold' }}>Collection of Information {'\n'}</Text>
        <Text style={{ color: '#000000', fontSize: 21 }} >

          If you browse through this site without providing us with any personal information, we will gather and store some information about your visit, such as IP address, type of browser and{'\n'} operating system used, date and time you access our site, pages you visit, and{'\n'} if you linked to our website from{'\n'} another website, the address of that website. This information will not{'\n'} identify you personally and will not be linked back to you.{'\n'}{'\n'}{'\n'}{'\n'}



          <Text style={{ color: '#5B5D8B', fontSize: 21, fontWeight: 'bold' }}>Use and Sharing of Information{'\n'}{'\n'}{'\n'}</Text>


          We do not share, sell, trade or rent your personal information to third parties for unknown reasons.

          Cookies

          From time to time, we may place "cookies" on your personal computer. "Cookies" are small identifiers sent from a web server and stored on your computer's hard drive, that help us to recognize you if you visit our website again. Also, our site uses cookies to track how you found our site. To protect your privacy we do not use cookies to store or transmit any personal information about you on the Internet. You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies certain features of the site may not function property or at all as a result.

          Links

          Our website contains links to other sites. Such other sites may use information about your visit to this website. Our Privacy Policy does not apply to practices of such sites that we do not own or control or to people we do not employ. Therefore, we are not responsible for the privacy practices or the accuracy or the integrity of the content included on such other sites. We encourage you to read the individual privacy statements of such websites.


          Security

          We safeguard your privacy using known security standards and procedures and comply with applicable privacy laws. Our websites combine industry-approved physical, electronic and procedural safeguards to ensure that your information is well protected though it's life cycle in our infrastructure.

          Sensitive data is hashed or encrypted when it is stored in our infrastructure. Sensitive data is decrypted, processed and immediately re-encrypted or discarded when no longer necessary. We host web services in audited data centers, with restricted access to the data processing servers. Controlled access, recorded and live-monitored video feeds, 24/7 staffed security and biometrics provided in such data centers ensure that we provide secure hosting.
        </Text>
      </View>
    </ScrollView>
  )
}

export default Privacy

const styles = StyleSheet.create({})