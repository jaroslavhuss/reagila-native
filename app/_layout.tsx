import { StyleSheet, View, Dimensions, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GlobalProvider } from "../context/GlobalContext";
import NewMenu from "../components/NewMenu";
import { usePathname } from "expo-router";
import { useFonts } from 'expo-font';
const _layout = () => {
  const [height, setHeight] = useState<number>(Dimensions.get("screen").height);
  const [width, setWidth] = useState(Dimensions.get("screen").width);
  const pathName = usePathname();
  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setHeight(screen.height);
        setWidth(screen.width);
      }
    );
    return () => subscription?.remove();
  });

  const [fontsLoaded, err] = useFonts({
    'Montserrat-regular': require("../assets/fonts/Montserrat-Regular.ttf"),
    'Montserrat-bold': require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded) {
    console.log("Cound not load fonts");
    console.log(err)
    return null;
  }
  return (
    <ImageBackground
      style={{
        height: height,
        width: width,
      }}
      source={require("../assets/reagila_background.jpg")}
    >
      <GlobalProvider>
        <View style={{display:"flex", flexDirection:"row", height}}>
            {pathName === "/" ? null : <NewMenu />}
          <View style={{flex:9}}>
            <Slot />
          </View>
        </View>
        <StatusBar hidden={true} />
      </GlobalProvider>
    </ImageBackground>
  );
};

export default _layout;

const styles = StyleSheet.create({});
