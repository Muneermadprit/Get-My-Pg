import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import colors from '../constan/colors'
import display from '../../utils/display'
import fonts from '../constan/fonts'
import images from '../constan/images'


const  Welcomcard = ({ tittle,content,image})=> {
  return (
  <View style={styles.container}>
    <Image style={styles.image} source={images[image]} resizeMode='contain'/>

    <Text style={styles.tittleText}>
  {tittle}
    </Text>
    
    <Text style={styles.contentText}>
  {content}
    </Text>

  </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:display.setwidth(100)
      
    },
    image:{
        height:display.setheight(30),
        width:display.setwidth(70)
    },
    tittleText:{
        fontSize:20,
        textAlign:'center',
        fontFamily:fonts.POPPINS_BOLD,
        color:colors.MAIN_YELLOW
    },
    contentText:{
        fontSize:18,
        fontFamily:fonts.POPPINS_LIGHT,
       color:colors.MAIN_GREY,
        marginHorizontal:20,
        textAlign:'center'
       
    }
    
})

export default Welcomcard