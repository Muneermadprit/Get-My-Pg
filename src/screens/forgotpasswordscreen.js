import React from 'react'
import {View,Text,StyleSheet,StatusBar,TouchableOpacity,TextInput} from 'react-native'
import colors from '../constan/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import fonts from '../constan/fonts'
import display from '../../utils/display'
import Fontisto from 'react-native-vector-icons/Fontisto'


function Forgotpasswordscreen({navigation}) {
  return (
    <View style={styles.container}>

       <StatusBar barStyle='dark-content' backgroundColor={colors.MAIN_WHAIT}
        translucent />
       <View style={styles.headercontainer}>
        <TouchableOpacity onPress={()=>navigation.goBack()} >
        <Ionicons name='chevron-back-outline' size={30} style={styles.backicon}   />
        </TouchableOpacity>
        <Text style={styles.headertittle}>Forgotpassword</Text>
       
       </View>
       <Text style={styles.content}>Forgotpassword</Text>
      
       <Text style={styles.content1}>we can help you to recover your password </Text>

       <View style={styles.inputcontainer}>
        <View style={styles.inputsubcontainer}>
        <Fontisto name='email'/>
        <TextInput placeholder='Email' placeholderTextColor={colors.MAIN_GREY} selectionColor={colors.MAIN_GREY} style={styles.inputtext}/>
        </View>
        </View>
        <TouchableOpacity style={styles.signinbutton}>
        <Text style={styles.signintext}>Reset Password</Text>
       </TouchableOpacity>
       


    </View>

   
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.MAIN_WHAIT    
        
    },
    headercontainer:{
        flexDirection:'row',
        alignItems:'center',

    paddingVertical:60,
    paddingHorizontal:10
        

    },
    headertittle:{
        fontSize:20,
        fontFamily:fonts.POPPINS_MEDIUM,
        lineHeight:20*1.4,
    
        width:display.setwidth(80),
        textAlign:'center',
        color:colors.MAIN_BLACK


    },
    content:{
        fontSize:17,
        fontFamily:fonts.POPPINS_MEDIUM,
        marginTop:10,
        marginBottom:20,
        marginHorizontal:20,



    },
    content1:{
        fontSize:13,
        fontFamily:fonts.POPPINS_MEDIUM,
     
        marginBottom:20,
        marginHorizontal:20,



    },
    inputcontainer:{
        backgroundColor:colors.SECOND_YELLOW,
        paddingHorizontal:20,
        marginHorizontal:20,
        borderRadius:8,
        borderWidth:0.5,
        color:colors.SECOND_GREY,
        justifyContent:'center',
       marginVertical:15,
       


    },


    inputsubcontainer:{
        flexDirection:'row',
        alignItems:'center',


    },
    inputtext:{
        fontSize:18,
        textAlignVertical:'center',
        padding:0,
        height:display.setheight(6),
        color:colors.MAIN_BLACK,
        flex:1,


    },
    signinbutton:{
        backgroundColor:colors.MAIN_RED,
        borderRadius:8,
        marginHorizontal:20,
        height:display.setheight(6),
        justifyContent:'center',
        alignItems:'center',
        marginTop:20

    },
    signintext:{

        fontSize:18,
        textAlignVertical:'center',
        padding:0,
        height:display.setheight(6),
        color:colors.MAIN_WHAIT,
        flex:1,

    },

})


export default Forgotpasswordscreen