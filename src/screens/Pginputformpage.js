import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, TextInput ,ScrollView,PermissionsAndroid,Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Dropdown from '../components/Dropdown';
import fonts from '../constan/fonts';
import display from '../../utils/display';
import colors from '../constan/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Floorcontainer from '../components/Floorcontainer';
import CurrentLocation from '../components/Getcurrentlocation'
import ButtonAnimation from '../components/changinganimation';














function Pginputformpage({ navigation }) {
   


    const [selectedFloor, setSelectedFloor] = useState('Floor 0');
    const [selectedRoom, setSelectedRoom] = useState('Room 0');
    const [selectedNumber, setSelectedNumber] = useState('Room 0');
    const floors = ['Floor 1', 'Floor 2', 'Floor 3', 'Floor 4', 'Floor 5', 'Floor 6', 'Floor 7', 'Floor 8', 'Floor 9'];
    const Rooms = ['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Room 5', 'Room 6', 'Room 7', 'Room 8', 'Room 9'];
    const Numbers = [' 1', ' 2', ' 3', ' 4', ' 5', ' 6', ' 7', ' 8', ' 9'];
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedClickedRoom, setSelectedClickedRoom] = useState(null);
    const [selectedSixshare, setSelectedSixshare] = useState(null);
    const [selectedFiveshare, setSelectedFiveshare] = useState(null);
    const [selectedFourshare, setSelectedFourshare] = useState(null);
    const [selectedThreeshare, setSelectedThreeshare] = useState(null);
    const [selectedTwoshare, setSelectedTwoshare] = useState(null);
    const [selectedOneshare, setSelectedOneshare] = useState(null);










    const handleSelect = (floors) => {
        setSelectedFloor(floors);
        // Print the selected floor
        console.log("Selected floor:", floors); 
    };


    const handleSelectRoom= (Rooms) => {
        setSelectedRoom(Rooms);
        // Print the selected floor
        
    };

    const handleSelectNumber= (Numbers) => {
        setSelectedNumber(Numbers);
        // Print the selected floor
        
    };

    const handleSelectFiveshare= (Numbers) => {
        setSelectedFiveshare(Numbers);
        // Print the selected floor
        
    };

    const handleSelectFourshare= (Numbers) => {
        setSelectedFourshare(Numbers);
        // Print the selected floor
        
    };

    const handleSelectThreeshare= (Numbers) => {
        setSelectedThreeshare(Numbers);
        // Print the selected floor
        
    };

    const handleSelectTwoshare= (Numbers) => {
        setSelectedTwoshare(Numbers);
        // Print the selected floor
        
    };

    const handleSelectOneshare= (Numbers) => {
        setSelectedOneshare(Numbers);
        // Print the selected floor
        
    };

    const handleSelectSixshare= (Numbers) => {
        setSelectedSixshare(Numbers);
        // Print the selected floor
        
    };


    
    

    const handleContainerPress = (value) => {
        setSelectedValue(value); // Update the selected value in the parent component
      };

      
    const handleContainerPressRoom = (value) => {
        setSelectedClickedRoom(value); // Update the selected value in the parent component
      };
     
      

    

    const generateContainers = () => {
        const containers = [];
        const floorNumber = parseInt(selectedFloor.split(' ')[1], 10);
        for(let i = 1; i <= floorNumber; i++) {
            containers.push(
                
                      <Floorcontainer value = {i} check={'Floor'} onPress={handleContainerPress} />
              
              
            );
        }
        return containers;
    };

    const generateContainersRoom = () => {
        const containerses = [];
        const RoomNumber = parseInt(selectedRoom.split(' ')[1], 10);
        for(let i = 1; i <= RoomNumber; i++) {
            containerses.push(
                
                      <Floorcontainer value = {i} check={'Room'} onPress={handleContainerPressRoom} />
              
              
            );
        }
        return containerses;
    };


    //items selected to pst arrange

    let floor = selectedValue;
    let Room = "Room"+selectedClickedRoom;
    


    

    return (
        <ScrollView>
        <View style={styles.container}>
           
            <StatusBar barStyle='dark-content' backgroundColor={colors.MAIN_WHAIT} translucent />
            <View style={styles.headercontainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='chevron-back-outline' size={30} style={styles.backicon} />
                </TouchableOpacity>
                <Text style={styles.headertittle}>PG Registration Form</Text>
            </View>
            <View style={styles.inputtittle}>
                <Text style={styles.inputtittletext}>Enter PG Name</Text>
            </View>
            <View style={styles.inputcontainer}>
                <View style={styles.inputsubcontainer}>
                    <Feather name='user'/>
                    <TextInput placeholder='Username' placeholderTextColor={colors.MAIN_GREY} selectionColor={colors.MAIN_GREY} style={styles.inputtext} />
                </View>
            </View>
            <View style={{height:80,width:display.setwidth(100)}}>
                <CurrentLocation/>
            </View>
            <View style={styles.floorbox}>
                <Text style={styles.floortext}>Number of Floors</Text>
                <Dropdown options={floors} style={{ marginTop: 30 }} onSelect={handleSelect} />
            </View>
           <View style={{height:60}}>

           <ScrollView  horizontal={true}contentContainerStyle={styles.containerscroll}    showsHorizontalScrollIndicator={false} >
      <View style={styles.itemscroll}>
      <View style={styles.floorcontainer}>
            {generateContainers()}
            </View>
           
      </View>
     
      
      {/* Add more items as needed */}
    </ScrollView>
           </View>
           <View>
        
           
           </View>
   
           {selectedValue !== null && (
        <React.Fragment>
            <View  style={{height:display.setheight(20),width:display.setwidth(100),justifyContent:'center',alignItems:'center'}}>
            <Text style={styles.selectedFloor}>Floor {selectedValue}</Text>
            </View>
            
            <View style={styles.floorbox}>
                <Text style={styles.floortext}>Number of Rooms</Text>
                <Dropdown options={Rooms} style={{ marginTop: 30 }} onSelect={handleSelectRoom} />
            </View>
            <View style={{height:60}}>
            <ScrollView horizontal={true} contentContainerStyle={styles.containerscroll} showsHorizontalScrollIndicator={false}>
              
            <View style={styles.itemscroll}>
      <View style={styles.floorcontainer}>
            {generateContainersRoom()}
            </View>
           
      </View>

            </ScrollView>
            </View>
            <View style={{height:display.setheight(20),width:display.setwidth(100),justifyContent:'center',alignItems:'center'}}>
            <Text> Room {selectedClickedRoom}</Text>
            </View>
           
            <View style={styles.floorbox}>
                <Text style={styles.floortext}>  Number   of  Six  share</Text>
                <Dropdown options={Numbers} style={{ marginTop: 30 }} onSelect={handleSelectSixshare} />
                <Text>{selectedSixshare}</Text>
                
                
            </View>
            <View style={styles.floorbox}>
                <Text style={styles.floortext}>  Number  of  five  share</Text>
                <Dropdown options={Numbers} style={{ marginTop: 30 }} onSelect={handleSelectFiveshare} />
                <Text>{selectedFiveshare}</Text>
                
                
            </View>
            <View style={styles.floorbox}>
                <Text style={styles.floortext}>  Number of Four  share</Text>
                <Dropdown options={Numbers} style={{ marginTop: 30 }} onSelect={handleSelectFourshare} />
                <Text>{selectedFourshare}</Text>
                
                
            </View>
            <View style={styles.floorbox}>
                <Text style={styles.floortext}>  Number of Three share</Text>
            <Dropdown options={Numbers} style={{ marginTop: 30 }} onSelect={handleSelectThreeshare} />
                <Text>{selectedThreeshare}</Text>
                
                
            </View>
            <View style={styles.floorbox}>
                <Text style={styles.floortext}>  Number  of  Two share</Text>
                <Dropdown options={Numbers} style={{ marginTop: 30 }} onSelect={handleSelectTwoshare} />
                <Text>{selectedTwoshare}</Text>
                
                
            </View>
            <View style={styles.floorbox}>
                <Text style={styles.floortext}>  Number    one      share</Text>
                <Dropdown options={Numbers} style={{ marginTop: 30 }} onSelect={handleSelectOneshare} />
                <Text>{selectedOneshare}</Text>
                
                <ButtonAnimation/>
            </View>
        </React.Fragment>

    )}
    
 
        <View>
<Text> </Text>
  
        </View>
            
        </View>
    
        </ScrollView>
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    },
    headercontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    headertittle: {
        fontSize: 20,
        fontFamily: fonts.POPPINS_MEDIUM,
        lineHeight: 20 * 1.4,
        width: display.setwidth(80),
        textAlign: 'center',
        color: colors.MAIN_RED
    },
    inputcontainer: {
        backgroundColor: colors.SECOND_YELLOW,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        borderRadius: 8,
        borderWidth: 0.5,
        color: colors.SECOND_GREY,
        justifyContent: 'center',
        marginVertical: 15
    },
    inputsubcontainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputtext: {
        fontSize: 18,
        textAlignVertical: 'center',
        padding: 0,
        height: display.setheight(6),
        color: colors.MAIN_BLACK,
        flex: 1
    },
    inputtittle: {
        paddingLeft: 30,
        fontSize: 15
    },
    inputtittletext: {
        fontSize: 15,
        color: colors.MAIN_GREY
    },
    floorbox: {
        flexDirection: 'row',
        paddingLeft: 30,
        justifyContent: 'space-between',
        width: display.setwidth(80)
    },
    floortext: {
        marginTop: 10
    },
    floorcontainer:{
        flexDirection:'row',
       
        flexWrap:'wrap',
        justifyContent: 'space-between', 
        

    },
    containerscroll: {
        flexGrow: 89,
        height:50,
       
      
      },
      itemscroll: {
        backgroundColor: '#f0f0f0',
       
        borderRadius: 10,
      },
});

export default Pginputformpage;
