import { StyleSheet } from 'react-native'
import React from 'react'
import ImageComponent from '../components/Image'

const Schizofrenie = () => {
  return (
   <ImageComponent src={require("../assets/5.5.jpg")} back="/mechanismusucinku2" next="/mechanismusucinku4"/>
  )
}

export default Schizofrenie

const styles = StyleSheet.create({})