import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Row } from "./Styles";

const Reference = () => {
  return (
    <View style={{borderTopWidth:2}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#07a6a9",
          fontFamily: "Montserrat-bold",
          marginBottom: 10,
          marginTop:10
        }}
      >
        Reference
      </Text>
      <View style={{}}>
        <Row>
        <View style={{flex:1}}>
        <Text style={{fontWeight:"bold", fontSize:16, color:"#07a6a9"}}>1.</Text>
        </View>
           <Text style={{flex:29, fontSize:16,fontFamily:"Montserrat-regular"}}>
            Hjorth. The More, the Merrier…? Antipsychotic Polypharmacy Treatment
            Strategies in Schizophrenia From a Pharmacology Perspective. Front
            Psychiatry. 2021 Nov 24; 12:760181.
          </Text>
        </Row>
      </View>
      <View style={{}}>
        <Row>
        <View style={{flex:1}}>
        <Text style={{fontWeight:"bold", fontSize:16, color:"#07a6a9"}}>2.</Text>
        </View>
           <Text style={{flex:29, fontSize:16,fontFamily:"Montserrat-regular"}}>
            Németh. Cariprazine versus risperidone monotherapy for treatment of
            predominant negative symptoms in patients with schizophrenia: a
            randomised, double-blind, controlled trial. Lancet. 2017 Mar
            18;389(10074):1103-1113.
          </Text>
        </Row>
      </View>
      <View style={{}}>
        <Row>
         <View style={{flex:1}}>
        <Text style={{fontWeight:"bold", fontSize:16, color:"#07a6a9"}}>3.</Text>
        </View>
           <Text style={{flex:29, fontSize:16,fontFamily:"Montserrat-regular"}}>Souhrn údaju o prípravku Reagila</Text>
        </Row>
      </View>
      <View style={{}}>
        <Row>
         <View style={{flex:1}}>
        <Text style={{fontWeight:"bold", fontSize:16, color:"#07a6a9"}}>4.</Text>
        </View>
           <Text style={{flex:29, fontSize:16,fontFamily:"Montserrat-regular"}}>
            Upraveno dle: Stahl. Prescriber’s Guide: Stahl’s Essential
            Psychopharmacology. Cambridge University Press.
          </Text>
        </Row>
      </View>
      
    </View>
  );
};

export default Reference;

const styles = StyleSheet.create({});
