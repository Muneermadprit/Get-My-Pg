import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import colors from '../constan/colors';
import fonts from '../constan/fonts';
import general from '../constan/general';
import Welcomcard from '../components/welcomcard';
import display from '../../utils/display';

const Welcomscreen = ({navigation}) => {
    const [welcomeListIndex, setWelcomeListIndex] = useState(0);
    const welcomeList = useRef();

    const onViewRef = useRef(({ viewableItems }) => {
        setWelcomeListIndex(viewableItems[0].index);
    });

    const Pagescroll = () => {
        const nextIndex = Math.min(welcomeListIndex + 1, general.WELCOME_CONTENTS.length - 1);
        setWelcomeListIndex(nextIndex);
        welcomeList.current.scrollToIndex({ index: nextIndex });
    };
    

    const Pagination = () => {
        const pages = Array.from({ length: general.WELCOME_CONTENTS.length }, (_, index) => index);
        return (
            <View style={styles.paginationContainer}>
                {pages.map((pageNumber) => (
                    <View key={pageNumber} style={[styles.page, welcomeListIndex === pageNumber && styles.activePage]} />
                ))}
            </View>
        );
    };
    const skipToLastPage = () => {
        const lastIndex = general.WELCOME_CONTENTS.length - 1;
        setWelcomeListIndex(lastIndex);
        welcomeList.current.scrollToIndex({ index: lastIndex });
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.MAIN_WHITE} translucent />
            <View style={styles.welcomeListContainer}>
                <FlatList
                    ref={welcomeList}
                    data={general.WELCOME_CONTENTS}
                    keyExtractor={(item) => item.title}
                    horizontal
                    pagingEnabled
                    overScrollMode="never"
                    onViewableItemsChanged={onViewRef.current}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <Welcomcard {...item} />}
                />
            </View>
            <Pagination />
           {welcomeListIndex ===2 ?(
            <TouchableOpacity style={styles.gettingStartedButton} onPress={()=>navigation.navigate('signin')}>
                <Text style={styles.gettingStartedButtonText}>Get Started</Text>
            </TouchableOpacity>
           ):(
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={skipToLastPage}>
                    <Text style={styles.buttonText}>SKIP</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Pagescroll}>
                    <Text style={styles.buttonTextMain}>NEXT</Text>
                </TouchableOpacity>
            </View>
)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.MAIN_WHITE,
    },
    welcomeListContainer: {
        height: display.setheight(60),
        marginBottom: 100,
    },
    paginationContainer: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    page: {
        height: 8,
        width: 15,
        backgroundColor: colors.MAIN_GREY,
        borderRadius: 32,
        marginHorizontal: 5,
    },
    activePage: {
        backgroundColor: colors.SECOND_YELLOW,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: display.setwidth(90),
        marginTop: 40,
    },
    buttonText: {
        color: colors.MAIN_GREY,
        fontFamily: fonts.POPPINS_BOLD,
        fontSize: 16,
        marginTop: 23,
    },
    buttonTextMain: {
        color: colors.MAIN_BLACK,
        fontFamily: fonts.POPPINS_BOLD,
        backgroundColor: colors.SECOND_YELLOW,
        paddingVertical: 20,
        paddingHorizontal: 11,
        borderRadius: 32,
        fontSize: 14,
    },
    gettingStartedButton:{

        backgroundColor:colors.MAIN_YELLOW,
        paddingVertical:5,
        paddingHorizontal:40,
        borderRadius:8,
        justifyContent:'center',
        alignContent:'center',
        elevation:2,



        
    },
    gettingStartedButtonText:{
        fontSize:15,
        color:colors.MAIN_WHAIT,


    }
});

export default Welcomscreen;
