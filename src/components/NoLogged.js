import { View, Text,Button,StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

export default function NoLogged() {
    const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <Text style={styles.text}>Paraver esta pantalla tienes q iniciar sesion</Text>
      <Button title="Ir al Login" onPress={() => navigation.navigate("Account")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    content:{
        marginVertical:50,
        paddingHorizontal:50,

    },
    text:{
        textAlign:"center",
        marginBottom:20,
    }
})