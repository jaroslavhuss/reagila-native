import { StyleSheet, ImageBackground, View, Image, Pressable, Text, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react';
import { Link } from 'expo-router'
const Schizofrenie = () => {
  const marginLeftAnim = useRef(new Animated.Value(200)).current; // Start position
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
      Animated.timing(
        marginLeftAnim,
        {
          toValue: 100, // End position
          duration: 1000, // Adjust the duration as needed
          useNativeDriver: false,
        }
      ).start();
  }, [marginLeftAnim]);

  useEffect(() => {
    Animated.sequence([
      Animated.delay(400),
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 1000, // Adjust the duration as needed
          useNativeDriver: true,
        }
      )
    ]).start();
  }, [fadeAnim]);
  return (
    <ImageBackground source={require("../assets/blank.jpg")} style={{width:"100%", height:"100%", position:"relative"}}>
      <View style={[{marginLeft:40, marginTop:50}]}>
      <Animated.Text style={{
        marginTop:100,
        marginBottom:40,
        fontSize: 30,
        fontWeight: "bold",
        color: "#07a6a9",
        fontFamily: "Montserrat-bold",
      //  opacity: fadeAnim
      }}>Jednoduché užívání prípravku
      REAGILA{"\n"}<Text style={{color:"#f2357f"}}>1 x denně</Text> nezávisle na:</Animated.Text>
               
       <Animated.Image source={require("../assets/table2.png")} style={{
          width:"100%",
          height:400,
          resizeMode:"contain",
          maxWidth:"95%",
          borderRadius:12,
          borderWidth:2,
          backgroundColor:"white",
          borderColor:"#8db759",
         
          // marginLeft: marginLeftAnim.interpolate({
          //   inputRange: [-50, 100], // Adjust the range for desired movement
          //   outputRange: ['-50%', '0%'],
          // }),
          
       }}/>
      </View>
     
      <Link href="/spc" asChild>
       <Pressable style={styles.spc}>
         <Image source={require("../assets/spc.png")}  style={styles.spc}/>
         </Pressable>
      </Link>
      <Link href="/kombinace4" asChild>
       <Pressable style={styles.arrowRight}>
         <Image source={require("../assets/arrow-left.png")}  style={styles.spc}/>
         </Pressable>
      </Link>

      </ImageBackground>
  )
}

export default Schizofrenie

const styles = StyleSheet.create({
  headline:{
    fontSize:34,
    fontWeight:"bold",
    color:"#07a6a9",
    marginTop:70,
    marginBottom:40
  },
  spc:{
    position:"absolute",
    bottom:0,
    left:0,
    width:100,
    height:60,
    marginLeft:20
  },
  arrowRight:{
    position:"absolute",
    bottom:0,
    right:0,
    width:100,
    height:60,
    marginRight:50
  },
  arrowLeft:{
    position:"absolute",
    bottom:0,
    right:0,
    width:100,
    height:60,
    marginRight:150
  },
 info:{
    position:"absolute",
    bottom:0,
    right:0,
    width:100,
    height:60,
    marginRight:"30%"
  },
popUPImage:{
  width:"100%",
  height:200,
  position:"absolute",
  top:"30%",
  left:0,
  padding:4,
  borderRadius:12,
  borderWidth:2,
  borderColor:"#e3906f",
  maxWidth:"90%",
  resizeMode:"contain",
  marginLeft:27
}
})