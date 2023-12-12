import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'
import { CustomButton, CustomHeader } from '../../customs'
import { colorConstants, images } from '../../utils/constants'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import toastShow from '../../utils/toast'

const Otp = () => {
  const [otpCode,setOtpCode] = useState("")

  const handleSubmit =()=>{
    toastShow("Your details has been submitted", colorConstants.error)
  }
  return (
    <View style={styles.mainContainer}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{paddingBottom:responsiveHeight(5)}}
      >
        <CustomHeader
          headerText="Verify OTP"
          source={images.EnterOTP}
          imgStyle={styles.image1}
        />
        <Text style={styles.text1}>OTP Sent to</Text>
        <Text style={styles.text2}>+919876543210</Text>
        <OTPInputView
                style={styles.otpView}
                pinCount={4}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                onCodeChanged = {(txt) => {setOtpCode(txt) }}
                autoFocusOnLoad={false}
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code => {
                    console.log(`Code is ${code}, you are good to go!`)
                })}
            />
            <CustomButton
            btnText="Verify OTP"
            btnStyle={styles.btn}
            onPress={handleSubmit}
            />
            <Text style={styles.text3}>By signing up, you agree with our Terms{"\n"} and Conditions</Text>
      </KeyboardAwareScrollView>
    </View>
  )
}

export default Otp

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:colorConstants.background
  },
  image1: {
    width: responsiveWidth(70),
    height: responsiveHeight(30),
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: responsiveHeight(-20)
  },
  text1:{
    fontSize:18,
    color:colorConstants.txtGrey,
    fontWeight:"600",
    alignSelf:"center",
    marginTop:responsiveHeight(6)
  },
  text2:{
    fontSize:18,
    color:colorConstants.black,
    fontWeight:"600",
    alignSelf:"center",
    marginTop:responsiveHeight(1)
  },
  otpView:{
    width:responsiveWidth(80),
    height:responsiveHeight(10),
    alignSelf:"center",
    marginTop:responsiveHeight(3)
},
borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: responsiveWidth(15),
    height: responsiveHeight(7),
    borderWidth: 2,
    color:colorConstants.lightBlack,
    fontSize:34,
    borderRadius:8
    
  },

  underlineStyleHighLighted: {
    borderColor: colorConstants.violet,
  },
  btn:{
    marginTop:responsiveHeight(5)
  },
  text3:{
    alignSelf:"center",
    textAlign:"center",
    fontSize:14,
    color:colorConstants.greytext,
    marginTop:responsiveHeight(15),
    marginBottom:responsiveHeight(5)
  }
})