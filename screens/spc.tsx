import React from 'react'
import {StyleSheet, Dimensions} from 'react-native';
const {width,height} = Dimensions.get("window");
import { WebView } from 'react-native-webview';
import Layout from "../components/Layout";
//@ts-ignore
import Pdf from "../assets/spc.pdf";

const SPC = () => {
 
    return (
     <Layout>
 <WebView
        originWhitelist={["file://*", "http://*", "https://*"]}
        source={Pdf}
        allowFileAccess
        allowUniversalAccessFromFileURLs
        allowFileAccessFromFileURLs
      ></WebView>
     </Layout>
    )
}

export default SPC
const styles = StyleSheet.create({
    image:{
        flex: 1,
        width:width,
        height:height,
    resizeMode: 'cover'
    },
    window:{
        flex:1
    }
});