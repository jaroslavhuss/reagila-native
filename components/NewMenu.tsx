import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Link, usePathname } from 'expo-router'

const NewMenu = () => {
    const path = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState({
        isUcinnostOpened:false,
        isDavkovaniOpened:false,
    })
  return (
    <View style={{flex:3, height:"100%", flexDirection:"column", justifyContent:"space-between"}}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Link style={[styles.menuItem, path === "/schizofrenie" && styles.greenColor]} href="/schizofrenie">SCHIZOFRENIE</Link>
        <Link style={[styles.menuItem, path === "/procreagila" && styles.greenColor] } href="/procreagila">PROČ REAGILA</Link>
        <Link style={[styles.menuItem, 
        
        path.match(/mechanismusucinku/) && styles.greenColor
        ]} href="/mechanismusucinku">MECHANISMUS ÚČINKU</Link >
        <Link href="/ucinnostakutniexacerbace" asChild>
        <Pressable onPress={()=>{
            setSubMenuOpen({
                isDavkovaniOpened:false,
                isUcinnostOpened:true
            })
        }}>
            <Text style={[styles.menuItem, 
            path.match(/ucinnost/) && styles.greenColor
            ]}>ÚČINNOST</Text>
            </Pressable>
            </Link>
        {
            (subMenuOpen.isUcinnostOpened && path.match(/ucinnost/)) && (<>
            <Link href="/ucinnostakutniexacerbace" style={[styles.subItem, 
            path.match(/ucinnostakutniexacerbace/) && styles.greenColor
            ]}>- akutní exacerbace</Link>
            <Link href="/ucinnostnegativnisymptomy" style={[styles.subItem, 
            path.match(/ucinnostnegativnisymptomy/) && styles.greenColor
            ]}>- negativní symptomy</Link>
            <Link href="/ucinnostfunkcnischopnosti" style={[styles.subItem, 
            path.match(/ucinnostfunkcnischopnosti/) && styles.greenColor
            ]}>- funkční schopnosti</Link>
            <Link href="/ucinnostprevencerelapsu" style={[styles.subItem, 
            path.match(/ucinnostprevencerelapsu/) && styles.greenColor
            ]}>- prevence relapsu</Link>
            </>)
        }
            

        <Link style={[styles.menuItem,
        path === "/bezpecnost" && styles.greenColor
        ]} href="/bezpecnost">BEZPEČNOST</Link >

        <Link href="/davkovani" asChild>
        <Pressable onPress={()=>{

            setSubMenuOpen({
                isDavkovaniOpened:true,
                isUcinnostOpened:false
            })
        }}>
            <Text style={[styles.menuItem,
            path.match(/davkovani/) && styles.greenColor
            ]}>DÁVKOVÁNÍ</Text>
        </Pressable>
        </Link>
        {
            (subMenuOpen.isDavkovaniOpened && path.match(/davkovani/)) && (<>
            <Link href="/davkovaniekvipotentnidavky" style={[styles.subItem, 
            path.match(/davkovaniekvipotentnidavky/) && styles.greenColor
            ]}>- ekvipotentní dávky</Link>
            </>)
        }
        <Link style={[styles.menuItem,
        path === "/pacient" && styles.greenColor
        ]} href="/pacient">PACIENT</Link>
        <Link style={[styles.menuItem,
        path === "/dostupnost" && styles.greenColor
        ]} href="/dostupnost">DOSTUPNOST</Link>
        <Link style={[styles.menuItem,
        path === "/srovnaniap" && styles.greenColor
        ]} href="/srovnaniap">SROVÁNÍ AP</Link>
        <Text></Text>
        <Link href="/" asChild>
        <TouchableOpacity style={{padding:10}} onPress={() => {
          }}>
            <Image source={require("../assets/richter_gedeon_official_logo.png")} style={styles.logo}/>
            </TouchableOpacity>
            </Link>
            <Text></Text>
        <Text></Text>
        <Text></Text>

    </View>
  )
}

export default NewMenu

const styles = StyleSheet.create({
    logo:{
        width:undefined,
         resizeMode:"contain",
         padding:10
       },
       menuItem:{
           fontWeight:"normal",
           color:"#3c4146",
           fontSize:20,
           marginLeft:10,
           marginTop:20
       },
       subItem:{
           marginTop:10,
           marginLeft:20,
           fontSize:16,
       },
       subItemColor:{
           marginTop:10,
           marginLeft:20,
           fontSize:16,
           color:"#07a6a9",
           fontWeight:"bold"
       },
       greenColor:{
           color:"#07a6a9",
           fontWeight:"bold",
           fontSize:20,
           marginLeft:10,
           marginTop:20
       }
})