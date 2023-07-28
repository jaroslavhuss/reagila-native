import { StyleSheet } from 'react-native'
import React from 'react'
import ImageComponent from '../components/Image'

const Schizofrenie = () => {
  return (
   <ImageComponent src={require("../assets/17.jpg")} next="/davkovani2"/>
  )
}

export default Schizofrenie

const styles = StyleSheet.create({})