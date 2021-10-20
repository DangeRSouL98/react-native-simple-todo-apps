import React, { useEffect, useState } from "react";
import { SafeAreaView, View,Text,StyleSheet,TextInput,TouchableOpacity,FlatList,Image } from "react-native";
import axios from "axios";
import success from '../assets/success.png'
import failed from '../assets/failed.png'

const DetailTask = ({route}) => {
    const [ title, setTitle ] = useState('')
    const [ status, setStatus ] = useState(false)

    useEffect(() => {
        id = route.params.id
        try {
            axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
                (result) => {
                    setTitle(result.data.title)
                    setStatus(result.data.completed)
                }
            )
        }
        catch(e) {
            console.log(e)
        }
    }, [])

    const { defaultStyling, titleText, descriptionView, descriptionTitle, statusStyle, descriptionAndStatusSection } = style
    return (
        <SafeAreaView style={[defaultStyling]}>
            <View>
                <Text style={[titleText]}>{title}</Text>
            </View>
            <View style={[descriptionView]}>
                <View style={[descriptionAndStatusSection]}>
                    <Text style={descriptionTitle}>Description</Text>
                    <Image source={status == true ? success : failed} style={statusStyle}/>
                </View>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    defaultStyling: {
        backgroundColor: "#F0E5CF",
        flex: 1,
        alignItems: "center"
    },
    titleText: {
        color: "#727272",
        fontSize: 48,
        padding: 10,
        textAlign: "center",
    },
    descriptionView: {
        backgroundColor: "#4B6587",
        flex: 1,
        width: "100%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 10,
        padding: 20
    },
    descriptionTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    statusStyle: {
        width:40,
        height:40,
    },
    descriptionAndStatusSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignItems: "center",
        marginBottom: 10,
    }

})

export default DetailTask