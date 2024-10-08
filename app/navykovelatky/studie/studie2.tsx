import { StyleSheet, ImageBackground, View, Image, Pressable, Animated, Text } from 'react-native'
import React, {useRef, useEffect, useState} from 'react'
import { Link } from 'expo-router'
import { WebView } from 'react-native-webview'
import PDF from "../../../assets/studie_new_2.pdf";

const Schizofrenie = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);


  return (
    <ImageBackground source={require("../../../assets/studie_new_2.png")} style={{width:"100%", height:"100%", position:"relative"}} resizeMode="cover">

<>
        {loading && (
          <WebView
            originWhitelist={["file://*", "http://*", "https://*"]}
            source={PDF}
            allowFileAccess
            allowUniversalAccessFromFileURLs
            allowFileAccessFromFileURLs
          />
        )}
      </>

      <Link href="/navykovelatky/studie" asChild>
       <Pressable style={styles.arrowRight}>
         <Image source={require("../../../assets/arrow-left.png")}  style={styles.spc}/>
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