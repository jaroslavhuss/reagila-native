import { StyleSheet } from 'react-native'
import React from 'react'
import ImageComponent from '../components/Image'

const Schizofrenie = () => {
  return (
   <ImageComponent src={require("../assets/24.jpg")} next="/srovnaniap2"/>
  )
}

export default Schizofrenie

const styles = StyleSheet.create({})