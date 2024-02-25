import { StyleSheet, ImageBackground, View, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Link } from 'expo-router'
const ImageComponent = ({src, next, back, porovnani}:any) => {
const [first, setFirst] = useState(false)
 const [show, setShow] = useState({
        aripiprazol:false,
        brexipiprazol:false,
 })
  return (
    <>
    {
        first && <>
        <View style={{backgroundColor:"white", opacity:0.9, width:"100%", height:"100%"}}>
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"flex-start", borderBottomWidth:1}}>
            <TouchableOpacity onPress={()=>{
                setShow({
                    aripiprazol:true,
                    brexipiprazol:false
                })
            }}>
             <Image source={require("../assets/aripiprazol.png")} style={styles.smallImage}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                setShow({
                    aripiprazol:false,
                    brexipiprazol:true
                })
            }}>
            <Image source={require("../assets/brexipiprazol.png")} style={styles.smallImage}/>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
            <Image source={require("../assets/kariprazin.png")} style={{width:500, height:500, resizeMode:"contain"}}/>
            {
                show.aripiprazol && <Image source={require("../assets/aripiprazol.png")} style={styles.bigImage}/>
            }
            {
                show.brexipiprazol && <Image source={require("../assets/brexipiprazol.png")} style={styles.bigImage}/>
            }
        </View>
    </View>
        </>
    }
    
    <ImageBackground style={styles.img} source={src}>

    </ImageBackground>
    {
        next && <Link href={next} asChild>
        <Pressable style={styles.next}></Pressable>
        </Link>
    }
    {
        back && <Link href={back} asChild>
        <Pressable style={styles.back}></Pressable>
        </Link>
    }
    <Link href="/spc" asChild>
    <Pressable style={styles.spc} >
    </Pressable>
    </Link>
    </>
    
  )
}

export default ImageComponent

const styles = StyleSheet.create({
    smallImage :{
        width:100,
        height:100,
        resizeMode:"contain",
    },
    bigImage:{
        width:400,
        height:400,
        resizeMode:"contain",
    },
        spc:{
            width:100,
            height:60,
            position:"absolute",
            bottom:0,
            left:0,
            marginLeft:20,
            zIndex:100,
        },
        img:{
        width: "100%",
        height: "100%",
        zIndex:-1,
        psition:"relative",
        },
        next:{
            width:100,
            height:60,
            position:"absolute",
            bottom:0,
            right:0,
            marginRight:20,
            zIndex:100,
        },
        back:{
            width:100,
            height:60,
            position:"absolute",
            bottom:0,
            right:0,
            marginRight:120
        }
    });