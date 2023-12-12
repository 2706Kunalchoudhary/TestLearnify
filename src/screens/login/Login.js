import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CustomButton, CustomHeader, CustomPhoneNumber } from '../../customs'
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'
import { colorConstants, images } from '../../utils/constants'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'


const Login = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.mainContainer}>
        <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        >
        <CustomHeader
        headerText="Login"
        source={images.Mobilelogin}
        imgStyle={styles.image1}
        />
        <Text style={styles.text1}>Mobile Number</Text>
        <View style={{alignItems:"center",marginTop:responsiveHeight(1)}}>
        <CustomPhoneNumber/>
        </View>
        <CustomButton
        btnText="Get OTP"
        btnStyle={styles.btn}
        onPress={()=>navigation.navigate("Otp")}
        />
        <Text style={styles.text2}>By signing up, you agree with our Terms{"\n"} and Conditions</Text>
        </KeyboardAwareScrollView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:colorConstants.background
    },
    image1:{
        width:responsiveWidth(50),
        height:responsiveHeight(30),
        resizeMode:"contain",
        alignSelf:"center",
        marginTop:responsiveHeight(-20)
    },
    text1:{
        width:responsiveWidth(90),
        alignSelf:"center",
        marginTop:responsiveHeight(5),
        color:colorConstants.black,
        fontSize:18,
        fontWeight:"500"
    },
    btn:{
        marginTop:responsiveHeight(5)
    },
    text2:{
        alignSelf:"center",
        textAlign:"center",
        fontSize:14,
        color:colorConstants.greytext,
        marginTop:responsiveHeight(20),
        marginBottom:responsiveHeight(5)
      }
})