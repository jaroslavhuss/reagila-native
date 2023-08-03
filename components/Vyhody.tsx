import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Bold, Cell, LeftBulletCell, Row } from "./Styles";

const Vyhody = () => {
  return (
    <View style={{
        borderWidth: 2,
        borderColor: "#8db759",
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
          color: "#8db759",
          fontFamily: "Montserrat-bold",
          marginBottom: 20,
        }}
      >
        Výhody
      </Text>
      <View style={{}}>
        <Row>
        <View style={{flex:1}}>
        <LeftBulletCell />
        </View>
          <Cell>
          Receptorový profi l kariprazinu a AP typu MARTA se doplnuje a muže
zlepšit celkovou úcinnost lécby.
          </Cell>
        </Row>
      </View>
      <View style={{}}>
        <Row>
        <View style={{flex:1}}>
        <LeftBulletCell />
        </View>
          <Cell>
          Umožnuje snížení dávky AP typu MARTA a tím redukuje výskyt NÚ
(napr.: obezita, sedace, kardiometabolické NÚ…).
          </Cell>
        </Row>
      </View>
      <View style={{}}>
        <Row>
         <View style={{flex:1}}>
         <LeftBulletCell />
        </View>
          <Cell>
          Preferencní afi nita kariprazinu k D3 receptorum doplnuje úcinnost
AP typu MARTA, zlepšuje primární negativní a kognitivní symptomy
SCH.[2]
          </Cell>
        </Row>
      </View>      
    </View>
  );
};

export default Vyhody;

const styles = StyleSheet.create({});
