import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import PhoneInput from 'react-native-phone-number-input';
import { colorConstants } from '../utils/constants';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export const CustomPhoneNumber = (props) => {
  return (

    <View style={{flexDirection:"row"}}>
         
              <PhoneInput
          // defaultValue={props?.defaultValue}
          value={props.value}
          defaultCode={props.defaultCode ? props.defaultCode :"US"}
          onChangeCountry={props.onChangeCountry}
          layout="first"
          onChangeText={props.onChangeText}
          placeholder='Mobile Number'
          
          
          //  onChangeFormattedText={(text) => {
          //    // setFormattedValue(text);
          //  }}
          withDarkTheme
          textInputProps={{placeholderTextColor:colorConstants.placeholder,fontSize:18,maxLength:12}}
          textInputStyle={{
            paddingVertical: 0,  
            fontSize:24,
          }}
          
          containerStyle={styles.phoneContainer}
          flagButtonStyle={styles.flag}
          codeTextStyle={{ height:23, width: 50}}
          textContainerStyle={styles.textContainer}
        />
          {/* </View> */}

    </View>

  )
}


const styles = StyleSheet.create({
    buttonView:{
        width:"90%",
        borderWidth:1.5,
        borderRadius:15,
        borderColor:'rgba(41, 97, 215, 0.2)',
        alignSelf:"center",
        paddingVertical:6,
        paddingHorizontal:15
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
    },
    img:{
        width:22,
        height:20,
    },
    input:{
        width:"70%",
        height:38,

    },
    phoneContainer: {
        marginTop: 0,
        borderWidth: 2,
        borderColor: colorConstants.border,
        borderRadius: 8,
        width: responsiveWidth(90),
        alignSelf:'center',
        height: responsiveHeight(8),
    
      },
      flag: {
        borderColor:'#EFEFF4',
        height: responsiveHeight(8),
        borderRightWidth:1,
        width:responsiveWidth(20),
        alignSelf:"center",

      },
      textContainer: {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        color:colorConstants.black,
        paddingLeft:10,
        backgroundColor:colorConstants.white
        
      },
      
})