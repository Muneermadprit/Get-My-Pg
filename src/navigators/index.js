// Navigator.js
import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/splashscreen";
import Welcomscreen from "../screens/welcomscreen";
import Signinscreen from "../screens/signinscreen";
import Signupscreen from "../screens/signupscreen";
import Forgotpasswordscreen from "../screens/forgotpasswordscreen";
import Pginputformpage from "../screens/Pginputformpage";
 




const Stack = createStackNavigator();


const Navigator = () => {
    return (
       
            <NavigationContainer >
             <Stack.Navigator screenOptions={{headerShown:false}}>
             <Stack.Screen name="splash" component={SplashScreen}/>
             <Stack.Screen name="welcomscreen" component={Welcomscreen}/>
             <Stack.Screen name="signin" component={Signinscreen}/>
             <Stack.Screen name="signup" component={Signupscreen}/>
             <Stack.Screen name="forgotpassword" component={Forgotpasswordscreen}/>
             <Stack.Screen name="pginputform" component={Pginputformpage}/>

             
             
           
                
               
             </Stack.Navigator>
            </NavigationContainer>
           
       
    );
};

export default Navigator;




