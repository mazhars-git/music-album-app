import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Image, TextInput} from 'react-native'
import Albums from '../Albums/Albums'

const Home = () => {
    return (
        <View style={styles.container}>
        <Text>Hello! Welcome to My Native App...</Text>
        <StatusBar style="auto" />

        <Albums />
      </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191970',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30
      },
})

