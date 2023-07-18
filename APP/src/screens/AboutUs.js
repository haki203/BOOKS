import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const AboutUs = () => {
  return (
    <View>
      <Text style={styles.text1}>
        We started in 1974 by Dominic Chacko Kizhakemuri [popularly known as DC,
        doyen of publishing in India] is considered as one of the top five
        prestigious literary publishing houses in India. It is the first ISO
        certified book industry in India. DC Books is considered to have the
        highest pool of intellectual property /content suited for the Indian
        market. Strong editorial team ensures experiments with new formations,
        new areas, and encourages budding writers. Translation program of DC
        books is the largest in India. 90% of the authors of the region publish
        their works through DC Books. DC Books publishes about 1500 books a
        year, making it one of the largest literary publishers of India. DC
        Books corporate office is in Kottayam, Kerala, the publishing hub of
        South India. DC Books publishes books in all genres. English English
        Malayalam Dictionary published by DC Books is the largest selling
        bilingual dictionary in India and the second largest selling dictionary
        of India. DC Books has received the maximum number of awards among the
        Indian publishers for excellence from Federation of Indian Publishers,
        the apex body of publishers in India. DC Books started its Middle East
        operations in 2009 with outlets in Dubai, Muscat, Sharjah, and Ajman. DC
        Books conducts DC International Book Fair, one of the largest
        international book fairs in the region with participation from over 300
        publishers of the world. This is an annual event conducted in two of the
        major cities of South India as a 12 day Book Fair as well as a Literary
        Festival.International authors and well known authors of India attend
        these events and it is a part of the festival calendar of the respective
        cities. The exhibition so far has attracted more than 2 million
        visitors. The Group has also ventured into eBooks through a Group
        promoted Company EC Media, the first in India with complete eco-system
        in digital books. 'The Week' Magazine, (Issue June 24, 2012) has made a
        special mention about DC's eBooks in "30 Life Changers" from 1982-2012.
        It is now, one of the biggest aggregator of Indian books DC Media, the
        magazine publishing wing of DC Books publishes Education Insider, a Pan
        Asian B2B Magazine for the education sector, News'n' More, a current
        affairs and GK focused magazine for students, Emerging Kerala, a
        magazine which focuses on the socio-economic development of Kerala and
        Pachakuthira, a magazine which intervene in the socio-political space.
        Mango, Children's Imprint of DC Books has a strong focus on Indian
        content. Many of the originally developed contents of Mango have been
        licensed to publishers in UK and elsewhere. Mango also works with
        publishers abroad on co-creating content. Current Books, started in
        1952, with over 60 years of expertise in book sales, is the sister
        concern of DC Books. It is one of the top 3 retail bookstore chains in
        India with close to 50 retail outlets. Retail formats include
        destination stores, tourist bookshops, and academic books in small,
        medium and large sizes. Many innovative marketing and promotional
        methods successfully implemented by Current Books has inculcated reading
        habits among the public. Current Books is present in every nook
        andcorner of Kerala, the 100% literate state of India.
      </Text>
    </View>
  )
}

export default AboutUs
const styles = StyleSheet.create({
  text1:{
    fontSize:24,
    marginTop:18,
    lineHeight:39,
    fontFamily:"Hind Siliguri",
    fontWeight:"100",
    color: "#000000",
    fontStyle:"normal",
    display:"flex",
    alignItems:"center"

  }
});
