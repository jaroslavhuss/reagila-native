import React, {useContext} from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import IMAGE from "../../components/ImageComponents";
import Layout from "../../components/Layout";
import {GlobalContext} from "../../context/GlobalContext";

const Page = () => {
    //@ts-ignore
    const {zobrazObrazek, nastavObrazek} = useContext(GlobalContext);
    return (
        <Layout>
            <TouchableOpacity onPress={() => {
                 zobrazObrazek(true);
                 nastavObrazek("kariprazin")
            }} style={styles.kariprazin}></TouchableOpacity>
            <TouchableOpacity style={styles.brexpiprazol} onPress={() => {
                 zobrazObrazek(true);
                 nastavObrazek("brexpiprazol")
            }}></TouchableOpacity>
            <TouchableOpacity style={styles.aripiprazol} onPress={() => {
                zobrazObrazek(true);
                nastavObrazek("aripiprazol")
            }}></TouchableOpacity>
            <IMAGE next="Page55HodinyMechanismusUcinku" back="Page4MechanismusUcinku" src={require("../../assets/5.jpg")} />
        </Layout>
    )
}

export default Page
const styles = StyleSheet.create({
    kariprazin:{
        position:"absolute",
        top:0,
        right:0,
        height:200,
        width:400,
        zIndex:12,
        marginTop:140,
        marginRight:200
    },
    brexpiprazol:{
        position:"absolute",
        bottom:0,
        left:0,
        height:200,
        width:230,
        zIndex:12,
        marginBottom:140,
        marginLeft:60
    },
    aripiprazol:{
        position:"absolute",
        bottom:0,
        right:0,
        height:200,
        width:230,
        zIndex:12,
        marginBottom:140,
        marginRight:60
    },
    image:{
        flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover'
    }
});