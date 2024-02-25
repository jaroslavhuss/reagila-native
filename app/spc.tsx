import React, {useState, useEffect} from 'react'
import {StyleSheet, Dimensions} from 'react-native';
const {width,height} = Dimensions.get("window");
import { WebView } from 'react-native-webview';
//@ts-ignore
import Pdf from "../assets/spc.pdf";

const SPC = () => {
 const [loading, setLoading] = useState<boolean>(false);

useEffect(() => {
    setLoading(true);
    return () => {
        setLoading(false);
    }
}, [])

    return (
            <>
            {loading && (<WebView
                originWhitelist={["file://*", "http://*", "https://*"]}
                source={Pdf}
                allowFileAccess
                allowUniversalAccessFromFileURLs
                allowFileAccessFromFileURLs
              />)}
            </>
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