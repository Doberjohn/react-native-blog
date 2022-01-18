import React, {useContext} from 'react';
import {View, StyleSheet} from "react-native";
import {Context as BlogContext} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const { state, editBlogPost } = useContext(BlogContext);
    const blogPost = state.find(blogPost=>blogPost.id === id);

    return (
        <View style={styles.container}>
            <BlogPostForm
                initialValues={{title: blogPost.title, content: blogPost.content}}
                onSubmit={(title, content) => {
                    editBlogPost( id, title, content, ()=> {
                        navigation.navigate('Index');
                    });
                }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});

export default EditScreen
