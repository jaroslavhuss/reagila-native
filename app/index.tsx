import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Image, Pressable } from 'react-native'
const index = () => {

  return (
    <Link href="/home" asChild>
    <Pressable onPress={()=>{
        console.log("pressed")
    }}>
            <Image source={require("../assets/_1.jpg")} resizeMode='contain' style={{
                width:"100%",
                height:"100%"
            }}

            />
            </Pressable>
            </Link>
  )
}

export default index

const styles = StyleSheet.create({})