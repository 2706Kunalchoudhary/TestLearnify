import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { colorConstants } from '../utils/constants'

export const CustomButton = (props) => {
  return (
    <Pressable style={[styles.container1,props.btnStyle]} onPress={props.onPress}>
        <Text style={styles.btnTxt}>{props.btnText}</Text>
    </Pressable>
  )
}


const styles = StyleSheet.create({
    container1:{
        width:responsiveWidth(90),
        height:responsiveHeight(5),
        backgroundColor:colorConstants.orange,
        alignSelf:"center",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },
    btnTxt:{
        fontSize:16,
        color:colorConstants.white,
        fontWeight:"500"
    }
})