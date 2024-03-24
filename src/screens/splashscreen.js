import React ,{useEffect} from 'react'
import { View, Text, StyleSheet, StatusBar,Image} from 'react-native'
import images from '../constan/images'
import colors from '../constan/colors'
import fonts from '../constan/fonts'
import display from '../../utils/display'



const SplashScreen = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('welcomscreen')
    },3000)
  })
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.MAIN_RED}/>
    <Image source={images.LOGO}
    resizeMode='contain'
    style={styles.image}
    
    />
 

     
      <Text style = {styles.text}>Get My Pg</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.MAIN_RED
  },
  image:{
    height:display.setheight(30),
    width:display.setwidth(70)
  },
  text:{
color:colors.MAIN_GREY,
fontSize:20,
fontFamily:fonts.POPPINS_BOLD,
paddingLeft:15,
paddingTop:20,


  }

})

export default SplashScreen;
