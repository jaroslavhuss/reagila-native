import React, {useContext, useState, useEffect} from 'react'
import { StyleSheet, View, ImageBackground, Dimensions, Image, TouchableOpacity, Text} from 'react-native';
import Menu from "./Menu"
const {width,height} = Dimensions.get("screen");
import {GlobalContext} from "../context/GlobalContext";
import { AntDesign } from '@expo/vector-icons'; 

const Layout = ({children}:any) => {
    
    const Kariprazin = require("../assets/karizprazin_n.png");
    const Brexipiprazol = require("../assets/brexipiprazol_n.png");
    const Aripiprazol = require("../assets/aripiprazol_n.png");
    const Dead = require("../assets/dead.png")
    //@ts-ignore 
    const { zobraz, zobrazObrazek} = useContext(GlobalContext);
   const [arrayOfImages, setArrayOfImages]:any = useState([]);
   const [stringArray, setStringArray] = useState("");
   useEffect(() => {
       // setArrayOfImages([obrazek])
}, [])

const addImages = (image:string) => {
        const includes = arrayOfImages.includes(image);
        const array = [...arrayOfImages];

        if(includes){
          const newArray = array.filter((item) => {
                return item !== image
            })
            if(newArray.length <2){
                setArrayOfImages(newArray.sort());
                setStringArray(newArray.toString());
            }
            
        }else{
            if(array.length<2){
            array.push(image)
            setArrayOfImages(array.sort())
            setStringArray(array.toString())
        }
        }
        
}

    return (
        <ImageBackground style={styles.bg} source={require("../assets/reagila_background.jpg")}>
            <View style={styles.menu}><Menu/></View>
            <View style={styles.children}>{children}</View>
           {zobraz?<TouchableOpacity style={styles.imageView} >
               <>
               <View style={styles.menuClicker}>
                   <TouchableOpacity onPress={() => {
                       addImages("kariprazin")
                   }} style={[styles.menuClickerTouch,stringArray.match("kariprazin")?styles.highlight:{}]}><Text style={[styles.menuClickerText]}>Kariprazin</Text></TouchableOpacity>
                   <TouchableOpacity onPress={() => {
                       addImages("brexpiprazol")
                   }} style={[styles.menuClickerTouch,stringArray.match("brexpi")?styles.highlight:{}]}><Text style={[styles.menuClickerText]}>Brexipiprazol</Text></TouchableOpacity>
                   <TouchableOpacity onPress={() => {
                       addImages("aripiprazol")
                   }} style={[styles.menuClickerTouch,stringArray.match("aripi")?styles.highlight:{}]}><Text style={[styles.menuClickerText]}>Aripiprazol</Text></TouchableOpacity>
                   <TouchableOpacity onPress={() => {
                      zobrazObrazek(false)
                   }} style={[styles.menuClickerTouch,{backgroundColor:"#fe1080"}]}><Text style={styles.menuClickerText}><AntDesign style={{textAlign:"center"}} name="poweroff" size={15} color="white" /> </Text></TouchableOpacity>
               </View>
               {arrayOfImages.length === 0?<><Text style={{color:"#00727b",fontWeight:"bold", fontSize:25, textAlign:"center"}}>Vyberte parciální agonisty z menu vpravo nahoře{"\n"}(Maximálně lze 2)</Text></>:<></>}
               {arrayOfImages.length === 1 ?<Image source={arrayOfImages[0]==="kariprazin"?Kariprazin:arrayOfImages[0]==="brexpiprazol"?Brexipiprazol:arrayOfImages[0]==="aripiprazol"?Aripiprazol:Dead} style={styles.image} />:<></>}
              <View style={{
                  position:"relative",
                  flexDirection:"row"
              }}>
              {arrayOfImages.length>1?arrayOfImages.map((image:string, index:number) => 
                  (
                  <Image style={[styles.image,{resizeMode:"contain", flex:1}]} key={index} source={image==="kariprazin"?Kariprazin:image==="brexpiprazol"?Brexipiprazol:arrayOfImages[0]==="aripiprazol"?Aripiprazol:Dead} />
                  )
              ):<></>}    
              
              </View>
                </>
           </TouchableOpacity>:<></>}
            
        </ImageBackground>
    )
}

export default Layout

const styles = StyleSheet.create({
    highlight:{
        backgroundColor:"#00727b",
    },
    menuClicker:{
        position:"absolute",
        padding:10,
        backgroundColor:"rgba(112,112,112,0.2)",
        top:0,
        right:0,
        zIndex:200,
      
    },
    menuClickerTouch:{
        padding:10,
        backgroundColor:"rgba(243,243,243,1)",
        margin:4,
        borderRadius:4
    },
    menuClickerText:{
        fontWeight:"bold",
        
    },
imageView:{
position:"absolute",
borderWidth:2,
justifyContent:"center",
alignItems:"center",
width:width,
height:height,
backgroundColor:"rgba(255,255,255,0.9)"
},
    image:{
width:width-300,
resizeMode:"contain",
    },
    bg:{
        flex:1,
        resizeMode:"cover",
        flexDirection:"row"
    },
    menu:{
      
        height:height,
        width:width/4
    },
    children:{
   
        flex:1
    }
   
})

