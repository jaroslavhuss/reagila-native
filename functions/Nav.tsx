import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
type args = {
    children:any,
    path: string
}
const Nav = ({children,path}:any) => {
    const {navigate} = useNavigation();
    return (
        <Text onPress={() => {
            navigate(path)
        }
        }>
            {children}
        </Text>
    )
}

export default Nav
