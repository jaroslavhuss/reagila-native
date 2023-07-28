import React from 'react'
import {StyleSheet} from 'react-native'
import IMAGE from "../../components/ImageComponents";
import Layout from "../../components/Layout"
const Page = () => {
    return (
        <Layout>
            <IMAGE next="Page22Pacient" src={require("../../assets/21.jpg")} />
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