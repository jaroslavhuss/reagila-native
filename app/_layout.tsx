import { StyleSheet, View, Dimensions, ImageBackground, Image } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GlobalProvider } from "../context/GlobalContext";
import NewMenu from "../components/NewMenu";
import { usePathname } from "expo-router";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';

const _layout = () => {
  const [height, setHeight] = useState<number>(Dimensions.get("screen").height);
  const [width, setWidth] = useState(Dimensions.get("screen").width);
  const pathName = usePathname();

  useEffect(() => {
    (async()=>{
    try {
      await fetch("https://private.gswps.eu:10443/api/reagila-ipads",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data:{
            screen: pathName,
            event:"undefined",
            content:"undefined"
          }
        }),
      })
    } catch (error) {
      //Nah, nothing!
    }
    })()
  }, [pathName])
  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setHeight(screen.height);
        setWidth(screen.width);
      }
    );
    return () => subscription?.remove();
  },[]);

  useEffect(() => {
    cacheImages([
      require("../assets/1.jpg"),
      require('../assets/10.jpg'),
      require('../assets/11.jpg'),
      require('../assets/12.jpg'),
      require('../assets/13.jpg'),
      require('../assets/14.jpg'),
      require('../assets/15.jpg'),
      require('../assets/16.jpg'),
      require('../assets/17.jpg'),
      require('../assets/18.jpg'),
      require('../assets/19.jpg'),
      require('../assets/2.jpg'),
      require('../assets/20.jpg'),
      require('../assets/21.jpg'),
      require('../assets/22.jpg'),
      require('../assets/23.jpg'),
      require('../assets/24.jpg'),
      require('../assets/25.jpg'),
      require('../assets/26.jpg'),
      require('../assets/27.jpg'),
      require('../assets/3.jpg'),
      require('../assets/4.jpg'),
      require('../assets/4_zaloha.jpg'),
      require('../assets/5.5.jpg'),
      require('../assets/5.jpg'),
      require('../assets/5_zaloha.jpg'),
      require('../assets/5p.jpg'),
      require('../assets/6.jpg'),
      require('../assets/7.jpg'),
      require('../assets/7m.jpg'),
      require('../assets/7m2.jpg'),
      require('../assets/7m2.png'),
      require('../assets/8.jpg'),
      require('../assets/9.jpg'),
      require('../assets/_1.jpg'),
      require('../assets/adaptive-icon.png'),
      require('../assets/agumentace2.png'),
      require('../assets/aripiprazol.png'),
      require('../assets/aripiprazol_n.png'),
      require('../assets/arrow-left.png'),
      require('../assets/arrow-right.png'),
      require('../assets/blank.jpg'),
      require('../assets/brexipiprazol.png'),
      require('../assets/brexipiprazol_n.png'),
      require('../assets/dead.png'),
      require('../assets/doporuceny-postup.png'),
      require('../assets/favicon.png'),
      require('../assets/icon.png'),
      require('../assets/info.png'),
      require('../assets/kariprazin.png'),
      require('../assets/karizprazin_n.png'),
      require('../assets/kombinace1.png'),
      require('../assets/reagila_background.jpg'),
      require('../assets/receptory.pdf'),
      require('../assets/richter_gedeon_official_logo.png'),
      require('../assets/spc.jpg'),
      require('../assets/spc.pdf'),
      require('../assets/spc.png'),
      require('../assets/splash.png'),
      require('../assets/stredni-velikost.png'),
      require('../assets/table.png'),
      require('../assets/table2.png'),
      require('../assets/vyhody-nevyhody.png'),
      require('../assets/vyhody-nevyhody2.png'),
      require('../assets/vysoka-vhodnost.png'),
    ]);
  }, []);

  const [fontsLoaded, err] = useFonts({
    'Montserrat-regular': require("../assets/fonts/Montserrat-Regular.ttf"),
    'Montserrat-bold': require("../assets/fonts/Montserrat-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  
 
  function cacheImages(images:string[]) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }

  //Analytics

  
  return (
    <ImageBackground
      style={{
        height: height,
        width: width,
      }}
      source={require("../assets/reagila_background.jpg")}
    >
      <GlobalProvider>
        <View style={{display:"flex", flexDirection:"row", height}}  onLayout={onLayoutRootView}>
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
