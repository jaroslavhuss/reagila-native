import { StyleSheet } from 'react-native'
import React from 'react'
import ImageComponent from '../components/Image'

const Schizofrenie = () => {
  return (
   <ImageComponent src={require("../assets/6.jpg")} back="/mechanismusucinku3" next="/mechanismusucinku5"/>
  )
}

export default Schizofrenie

const styles = StyleSheet.create({})