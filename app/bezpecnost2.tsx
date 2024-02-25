import { StyleSheet } from 'react-native'
import React from 'react'
import ImageComponent from '../components/Image'

const Schizofrenie = () => {
  return (
   <ImageComponent src={require("../assets/15.jpg")} next="/bezpecnost3" back="/bezpecnost"/>
  )
}

export default Schizofrenie

const styles = StyleSheet.create({})