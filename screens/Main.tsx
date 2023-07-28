import React from 'react'
import {StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
const {width,height} = Dimensions.get("screen");
import { useNavigation } from '@react-navigation/native';
const Main = () => {
    const {navigate}:{navigate:Function} = useNavigation();
    return (
        <TouchableOpacity style={{width:width, height:height}} onPress={() => {
            navigate("Page2Schizofrenie");
        }}>
             <Image style={styles.image} source={require("../assets/1.jpg")}/>
       </TouchableOpacity>
    )
}

export default Main
const styles = StyleSheet.create({
    image:{
        width:width,
        height:height,
    resizeMode: 'cover'
    },
    window:{
       width:width,
       height:height
    }
});