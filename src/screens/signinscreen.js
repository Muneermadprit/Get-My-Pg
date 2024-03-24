import React,{useState} from 'react'
import {View,Text,StyleSheet,StatusBar, TextInput, TouchableOpacity,Image}from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../constan/colors'
import fonts from '../constan/fonts'
import display from '../../utils/display'
import images from '../constan/images'
import Navigator from '../navigators'





 

function Signinscreen({navigation}) {
    const [isPasswordShow,setisPasswordShow] = useState(false);
  return (
    <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor={colors.MAIN_WHAIT}
        translucent />
       <View style={styles.headercontainer}>
        <TouchableOpacity onPress={()=>navigation.goBack()} >
        <Ionicons name='chevron-back-outline' size={30} style={styles.backicon}   />
        </TouchableOpacity>
        <Text style={styles.headertittle}>Sign in</Text>

       </View>
       <Text style={styles.tittle}>Welcome</Text>
       <Text style={styles.content}>Enter your youser name and Password</Text>
       <View style={styles.inputcontainer}>
        <View style={styles.inputsubcontainer}>
        <Feather name='user'/>
        <TextInput placeholder='usernsme' placeholderTextColor={colors.MAIN_GREY} selectionColor={colors.MAIN_GREY} style={styles.inputtext}/>
        </View>
       
       </View>

       
       <View style={styles.inputcontainer1}>
       <View style={styles.inputsubcontainer}>
        <Feather name='lock'/>
        <TextInput placeholder='password' placeholderTextColor={colors.MAIN_GREY} selectionColor={colors.MAIN_GREY} style={styles.inputtext} secureTextEntry={isPasswordShow?false:true}/>
        <Feather name={isPasswordShow?'eye':'eye-off'} onPress={()=>setisPasswordShow(!isPasswordShow)}/>
        </View>
       
       
       </View>
       <View>
        <Text></Text>
            <View>

                <View style={styles.forgotpasswordcontainer}>
                    <TouchableOpacity onPress={()=>navigation.navigate('pginputform')}>
                    <View>
                    <Text style={styles.remembermetext}>Remember Me</Text>
                    </View>
                    </TouchableOpacity>
                    
                   <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('forgotpassword')}>
                    <Text style={styles.forgotpassword} > Fogot password</Text>
                    </TouchableOpacity>
                   
                   </View>
                    
                </View>
           
            </View>
        
       </View>
       <TouchableOpacity style={styles.signinbutton}>
        <Text style={styles.signintext}>Sign in</Text>
       </TouchableOpacity>
       <View>
        
        <View style={styles.signupcontainer}>
        <Text style={styles.accounttext}>
            Dont Have an Account
        </Text >

        <Text style={styles.signuptext} onPress={()=>navigation.navigate('signup')}>
            Sign up
        </Text>
        </View>
        
        <Text style={styles.ortext}>OR</Text>
        
        <TouchableOpacity  style={styles.googlebutton}>
         
            <View style={styles.socialbuttoncontainer}>
                
                    <Image source={images.GOOGLE} style={styles.googlelogo}/>
                
                <Text style={styles.googletext}>
                    Connect with Google
                </Text>
                
               
            </View>
        </TouchableOpacity>
       

       
       </View>
    
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
   
         color:colors.MAIN_BLACK,
         marginTop:50

    },
    headercontainer:{
        flexDirection:'row',
        alignItems:'center',

    paddingVertical:10,
    paddingHorizontal:20
        

    },
    headertittle:{
        fontSize:20,
        fontFamily:fonts.POPPINS_MEDIUM,
        lineHeight:20*1.4,
    
        width:display.setwidth(80),
        textAlign:'center',
        color:colors.SECOND_GREY


    },
    tittle:{
        fontSize:20,
        fontFamily:fonts.POPPINS_MEDIUM,
        lineHeight:20*1.4,
        marginTop:50,
        marginBottom:10,
        marginHorizontal:20,



    },
    content:{
        fontSize:17,
        fontFamily:fonts.POPPINS_MEDIUM,
        marginTop:10,
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
       marginVertical:15


    },

    inputcontainer1:{
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
    forgotpasswordcontainer:{
        marginHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',


    },
    remembermetext:{
        marginLeft:10,
        fontSize:12,
        lineHeight:12*1.4,
        color:colors.MAIN_GREY,
        fontFamily:fonts.POPPINS_MEDIUM
    },
    forgotpassword:{
        marginLeft:10,
        fontSize:12,
        lineHeight:12*1.4,
        color:colors.MAIN_RED,
        fontFamily:fonts.POPPINS_MEDIUM

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
    signupcontainer:{
        marginHorizontal:20,
        justifyContent:'center',
        paddingVertical:20,
  flexDirection:'row',

    },
    accounttext:{
        fontSize:13,
        lineHeight:13*1.4,
        color:colors.MAIN_BLACK,
        fontFamily:fonts.POPPINS_MEDIUM,

    },
    signuptext:{
        fontSize:13,
        lineHeight:13*1.4,
        color:colors.MAIN_RED,
        fontFamily:fonts.POPPINS_MEDIUM,
        marginLeft:5,
    },
    ortext:{
        fontSize:15,
        lineHeight:15*1.4,
        color:colors.MAIN_RED,
        fontFamily:fonts.POPPINS_MEDIUM,
        marginLeft:5,
        alignSelf:'center'

    },
    googlebutton:{
        backgroundColor:colors.MAIN_WHAIT,
        paddingVertical:15,
        marginHorizontal:20,
        borderRadius:8,
        justifyContent:'center',
        paddingRight:60

      
       
    },
    googlelogo:{
        height:18,
        width:18,
        
    },
    socialbuttoncontainer:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    googletext:{
        fontSize:13,
        lineHeight:13*1.4,
        color:colors.MAIN_BLACK,
        fontFamily:fonts.POPPINS_MEDIUM,
       

    }

    
})

export default Signinscreen