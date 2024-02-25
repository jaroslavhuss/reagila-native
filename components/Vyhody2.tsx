import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { Bold, Cell, LeftBulletCell, Row } from "./Styles";

const Vyhody2 = () => {
  return (
    <View style={{
        borderWidth: 2,
        borderColor: "#e3906f",
        borderRadius: 12,
        padding: 5,
        width: "100%",
        maxWidth:"95%",
        marginBottom: 20,
    }}>
      <SafeAreaView>

        <ScrollView>
        <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#e3906f",
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
          Preferencní afinita kariprazinu k D3 receptorum doplnuje
úcinnost SDA a haloperidolu, zlepšuje primární negativní
a kognitivní symptomy SCH.[2]
          </Cell>
        </Row>
      </View>
      <View style={{}}>
        <Row>
        <View style={{flex:1}}>
        <LeftBulletCell />
        </View>
          <Cell>
          Vysoká afinita a parciální agonismus kariprazinu na D2 a 5-HT1A
receptorech umožnuje snížit dávku SDA a haloperidolu a tím
snížit jejich NÚ (napr.: EPS, hyperprolaktinemie, sedaci…).
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

        </ScrollView>
      </SafeAreaView>
         
    </View>
  );
};

export default Vyhody2;

const styles = StyleSheet.create({});
