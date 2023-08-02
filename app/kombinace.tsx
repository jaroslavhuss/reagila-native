import { StyleSheet, ImageBackground, View, Image, Pressable, Animated } from 'react-native'
import { Row, LeftBulletCell, Cell, H1, Bold, } from '../components/Styles'
import React, {useRef, useEffect} from 'react'
import { Link } from 'expo-router'

const Schizofrenie = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeBullet1 = useRef(new Animated.Value(0)).current;
  const fadeBullet2 = useRef(new Animated.Value(0)).current;
  const fadeBullet3 = useRef(new Animated.Value(0)).current;
  const fadeBullet4 = useRef(new Animated.Value(0)).current;
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
    <ImageBackground source={require("../assets/blank.jpg")} style={{width:"100%", height:"100%", position:"relative"}}>
      <View style={{marginLeft:40}}>
      <H1 style={{
        marginTop:80,
        marginBottom:20
      }}>Důvody pro kombinace antipsychotik{"\n"}v léčbě schizofrenie</H1>
      <Animated.View style={{opacity:fadeBullet1}}>
      <Row>
          <LeftBulletCell/>
          <Cell>
            <Bold>Potenciace účinku</Bold> díky rozdílným receptorovým profilům
          </Cell>
       </Row>
      </Animated.View>
      <Animated.View style={{opacity:fadeBullet2}}><Row>
          <LeftBulletCell/>
          <Cell>
            <Bold>Zvýšení efektu léčby pozitivních, negativních a kognitivních</Bold>{"\n"}symptomů schizofrenie současně
          </Cell>
       </Row></Animated.View>
      <Animated.View style={{opacity:fadeBullet3}}><Row>
          <LeftBulletCell/>
          <Cell>
            <Bold>Zlepšení psychosociálního fungování</Bold> pacientů se schizofrenií
          </Cell>
       </Row></Animated.View>
      <Animated.View style={{opacity:fadeBullet4}}><Row>
          <LeftBulletCell/>
          <Cell>
            <Bold>Snížení rizika nežádoucích účinků</Bold>
          </Cell>
       </Row></Animated.View>
        
        
        
       <Animated.View style={{opacity: fadeAnim}}>
       <H1 style={{
        marginTop:60,
        marginBottom:20
       }}>Vhodnost kombinací kariprazinu{"\n"}s dalšími antipsychotiky</H1>
       <Image source={require("../assets/kombinace1.png")} style={{
          width:"100%",
          height:300,
          resizeMode:"contain"
       }}/>
       </Animated.View>
      </View>
      <Link href="/spc" asChild>
       <Pressable style={styles.spc}>
         <Image source={require("../assets/spc.png")}  style={styles.spc}/>
         </Pressable>
      </Link>
      <Link href="/kombinace2" asChild>
       <Pressable style={styles.arrowRight}>
         <Image source={require("../assets/arrow-right.png")}  style={styles.spc}/>
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
  }

})