import { StyleSheet, Text, View, Image, ImageProps, ViewStyle, ImageStyle,TextStyle } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    row:{
        display:"flex", flexDirection:"row", alignItems:"flex-start", justifyContent:"center", marginBottom:5, marginTop:5
    }
})

const {row} = styles;

export const Row = ({children}:{children:React.ReactNode}) => {
  return (
    <View style={row}>
      {children}
    </View>
  )
}

export const LeftBulletCell = () => {
    return (
        <View style={{flex:1}}>
        <Text style={{fontWeight:"bold", fontSize:20, color:"#07a6a9"}}>•</Text>
        </View>
    )
    }

export const Cell = ({children}:{children:React.ReactNode}) => {
    return (
        <Text style={{flex:29, fontSize:20,fontFamily:"Montserrat-regular"}}>
        {children}
        </Text>
    )
}

export const P = ({children}:{children:React.ReactNode}) => <Text style={{fontSize:20, marginBottom:10, fontFamily:"Montserrat-regular"}}>{children}</Text>;
export const Bold = ({children}:{children:React.ReactNode}) => <Text style={{fontSize:20, marginBottom:10, fontFamily:"Montserrat-bold"}}>{children}</Text>;
export const H1 = ({ children, style }: { children: React.ReactNode, style?: TextStyle }) => {
  const combinedStyle = StyleSheet.compose(
    {
      fontSize: 30,
      fontWeight: "bold",
      color: "#07a6a9",
      fontFamily: "Montserrat-bold",
    },
    style
  );

  return <Text style={combinedStyle}>{children}</Text>;
};
interface FlexibleImageProps extends ImageProps {
    style?: ViewStyle & ImageStyle; // Merge both ViewStyle and ImageStyle types
  }
  export const FlexibleImage: React.FC<FlexibleImageProps> = ({ source, style }) => {
    const defaultStyle: FlexibleImageProps['style'] = {
      flex: 1,
      resizeMode: 'contain',
    };
    return (
      <View style={{ flex: 1 }}>
        <Image source={source} style={[defaultStyle, style]} />
      </View>
    );
  };
