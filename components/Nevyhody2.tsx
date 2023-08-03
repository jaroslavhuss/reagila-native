import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Bold, Cell, LeftBulletCell, Row } from "./Styles";

const Nevyhody2 = () => {
  return (
    <View style={{
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 12,
        padding: 5,
        width: "100%",
        maxWidth:"95%",
        marginBottom: 20,
    }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "grey",
          fontFamily: "Montserrat-bold",
          marginBottom: 20,
        }}
      >
        Potenciální rizika
      </Text>
      <View style={{}}>
        <Row>
        <View style={{flex:1}}>
        <LeftBulletCell />
        </View>
          <Cell>
          Vytitrovat optimální dávku obou antipsychotik
muže být nárocnejší – spíše se doporucuje
prevod risperidonu na kariprazin.
          </Cell>
        </Row>
      </View>
      <View style={{}}>
        <Row>
        <View style={{flex:1}}>
        <LeftBulletCell />
        </View>
          <Cell>
          Pri nesprávné titraci muže vzniknout riziko NÚ
(zejména akatízie).[3]
          </Cell>
        </Row>
      </View>
     
     
    </View>
  );
};

export default Nevyhody2;

const styles = StyleSheet.create({});
