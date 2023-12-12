import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { colorConstants, images } from '../utils/constants'

export const CustomHeader = (props) => {
  return (
    <View style={styles.container1}>
        <View style={styles.container2}>
      <Text style={styles.text1}>{props.headerText}</Text>
      </View>
      <Image source={props.source} style={props.imgStyle}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container1:{
        width:"100%",
        height:responsiveHeight(38),

        
    },
    container2:{
        width:"100%",
        height:responsiveHeight(30),
        backgroundColor:colorConstants.violet,
        borderBottomRightRadius:25,
        borderBottomLeftRadius:25
    },
    text1:{
        fontSize:28,
        color:colorConstants.white,
        fontWeight:"700",
        marginLeft:responsiveWidth(5),
        marginTop:responsiveHeight(2)
    }
})