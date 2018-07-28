import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

import "config/ReactotronConfig";
import "config/DevToolsConfig";

import Header from 'components/Header';
import Post from 'components/Post';

export default class App extends Component {

  state = {
    posts: [],
  }

  async componentDidMount (){
    await this.generatePost();
  }

  generatePost = () => {
    const post = {
       title: 'Aprendendo React Native',
       author: 'Jailson de Sousa Bastos',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet diam vitae lectus rutrum'+
       'laoreet vel non velit. Integer placerat lectus in justo imperdiet interdum. In non fermentum nisi.'
      }
    let posts = [];
    for(let i = 0; i < Math.floor(Math.random() * 10 + 1); i++) posts.push(post);
    this.setState({posts})
  }
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <ScrollView>
        {
          this.state.posts.map( (post, id ) => <Post key={id} title={post.title} author={post.author} description={post.description} /> )
        }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  },
});
