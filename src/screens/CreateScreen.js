import React, {useContext} from "react";
import {View, StyleSheet} from "react-native";
import {Context as BlogContext} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({navigation}) => {
    const {addBlogPost} = useContext(BlogContext)

    return (
        <View style={styles.container}>
            <BlogPostForm onSubmit={(title, content)=> {
                addBlogPost(title, content, () => {
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

export default CreateScreen;
