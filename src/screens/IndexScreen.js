import React, {useContext, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {Context as BlogContext} from "../context/BlogContext";
import {Feather} from "@expo/vector-icons"

const IndexScreen = ({navigation}) => {
    const {state: blogPosts, deleteBlogPost, getBlogPosts} = useContext(BlogContext);

    useEffect(()=> {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', ()=> {
            getBlogPosts();
        });

        return () => {
            listener.remove();
        };
    }, []);

    return (
        <View style={styles.container}>
            <FlatList data={blogPosts} keyExtractor={(blogPost) => blogPost.title} renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather name="trash" size={20}/>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )
            }}/>
        </View>
    )
}

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30}/>
            </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 16,
    }
});

export default IndexScreen;
