import { StyleSheet } from 'react-native'
import React from 'react'
import ImageComponent from '../components/Image'

const Schizofrenie = () => {
  return (
   <ImageComponent src={require("../assets/25.jpg")} back="/srovnaniap" next="/srovnaniap3"/>
  )
}

export default Schizofrenie

const styles = StyleSheet.create({})