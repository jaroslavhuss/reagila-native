import { StyleSheet } from 'react-native'
import React from 'react'
import ImageComponent from '../components/Image'

const Schizofrenie = () => {
  return (
   <ImageComponent src={require("../assets/14.jpg")} next="/bezpecnost2"/>
  )
}

export default Schizofrenie

const styles = StyleSheet.create({})