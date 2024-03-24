import React from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import display from '../../utils/display'
import images from '../constan/images'
import colors from '../constan/colors'
import fonts from '../constan/fonts'

 const Floorcontainer=({value,check,onPress})=> {
    const handlePress = () => {
        onPress(value); // Call the onPress function with the value parameter
      };
      const handlePressRoom = () => {
        onPress(value); // Call the onPress function with the value parameter
      };
  
   
  return (
    (check==='Room')?( 
         <View key={value} style={styles.container}>
            <TouchableOpacity onPress={handlePressRoom}>

            <View >
      <Image source={images.ROOM} style={{width:30,height:25}}/>
      
      <Text style={styles.text}>Room{value}</Text>

      </View>
            </TouchableOpacity>
       
         
    </View>):(
        
        
             <View key={value} style={styles.container}>
                <TouchableOpacity onPress={handlePress}>
                <View >
          <Image source={images.LIFT} style={{width:30,height:25}}/>
          <Text style={styles.text}>Floor{value}</Text>
  
          </View>
                </TouchableOpacity>
          
           
      </View>
       
         
    )
  
  
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
       width:display.setwidth(20),
   
      


    },
    text:{
        
        fontSize:9,
       marginLeft:2,
        color:colors.MAIN_BLACK,
        fontFamily:fonts.POPPINS_MEDIUM

    }
})

export default Floorcontainer