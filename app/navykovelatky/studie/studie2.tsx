import { StyleSheet, ImageBackground, View, Image, Pressable, Animated, Text } from 'react-native'
import { Row, LeftBulletCell, Cell, Bold, } from '../../../components/Styles'
import React, {useRef, useEffect, useState} from 'react'
import { Link } from 'expo-router'
import Reference from '../../../components/Reference'

const Schizofrenie = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeBullet1 = useRef(new Animated.Value(0)).current;
  const fadeBullet2 = useRef(new Animated.Value(0)).current;
  const fadeBullet3 = useRef(new Animated.Value(0)).current;
  const fadeBullet4 = useRef(new Animated.Value(0)).current;
  const [showImage, setShowImage] = useState<boolean>(false);
  useEffect(() => {
    Animated.sequence([
      Animated.delay(10000),
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

  useEffect(() => {
    Animated.sequence([
      Animated.delay(1000),
      Animated.timing(
        fadeBullet1,
        {
          toValue: 1,
          duration: 1000, // Adjust the duration as needed
          useNativeDriver: true,
        }
      ),
      Animated.delay(1000),
      Animated.timing(
        fadeBullet2,
        {
          toValue: 1,
          duration: 1000, // Adjust the duration as needed
          useNativeDriver: true,
        }
      ),
      Animated.delay(1000),
      Animated.timing(
        fadeBullet3,
        {
          toValue: 1,
          duration: 1000, // Adjust the duration as needed
          useNativeDriver: true,
        }
      ),
      Animated.delay(1000),
      Animated.timing(
        fadeBullet4,
        {
          toValue: 1,
          duration: 1000, // Adjust the duration as needed
          useNativeDriver: true,
        }
      ),
    ]).start();
  }, [fadeBullet1]);
  

  return (
    <ImageBackground source={require("../../../assets/studie_new_2.png")} style={{width:"100%", height:"100%", position:"relative"}} resizeMode="cover">

     
      <Link href="/navykovelatky/studie" asChild>
       <Pressable style={styles.arrowRight}>
         <Image source={require("../../../assets/arrow-left.png")}  style={styles.spc}/>
         </Pressable>
      </Link>




{
  showImage && <Pressable
  onPress={()=>{
    setShowImage(false)
  }}
  style={{
    width:"100%",
    height:"100%",
    position:"absolute",
    top:0,
    left:0,
    backgroundColor:"white",
  }}
  >
    <View style={{
      marginLeft:50,
      marginTop:40
    }}>
    <Reference />
    </View>
    
    
    </Pressable>
}
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