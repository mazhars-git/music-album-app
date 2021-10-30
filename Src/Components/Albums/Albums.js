import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AlbumData from './AlbumData';

const Albums = () => {
    const [infos, setInfos] = useState([]);

    useEffect(() => {
        fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
        .then(res => res.json())
        .then(data => setInfos(data.feed.entry))

    }, [])

    console.log(infos)
    return (
        <View>
            {
                infos.map(album => <AlbumData data={album}></AlbumData>)
            }
        </View>
    )
}

export default Albums;

const styles = StyleSheet.create({})

