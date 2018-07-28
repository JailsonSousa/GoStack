import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'

const Post = ({title, author, description}) => (

  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <View style={styles.separator}/>
    <Text style={styles.description}>{description}</Text>
  </View>

);

Post.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string
}

const styles = StyleSheet.create({
  container : {
    margin: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333333',
  },
  author: {
    fontSize: 12,
    color: '#999999',
  },
  separator:{
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  description:{
    color: '#666666',
  }
})

export default Post;
