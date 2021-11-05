import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const AlbumData = (props) => {
    const {title} = props.data;
    return (
        <View style={styles.container}>
            <Text>{title.label}</Text>
            <Button
                title="Learn More"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Jane' })
                }
            />
        </View>
    )
}

export default AlbumData;

const styles = StyleSheet.create({
    container :{
        marginBottom: 10,
        padding: 20,
        border: '1px solid black',
        borderRadius: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#228b22'
    }
    
})
