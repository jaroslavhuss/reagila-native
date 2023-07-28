import React from 'react'
import {StyleSheet} from 'react-native'
import Layout from "../../components/Layout"
import IMAGE from "../../components/ImageComponents";

const Page = () => {
    return (
        <Layout>
          <IMAGE next="Page6MechanismusUcinku"  src={require("../../assets/7m2.jpg")} />
        </Layout>
    )
}

export default Page
const styles = StyleSheet.create({
    image:{
        flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover'
    }
});