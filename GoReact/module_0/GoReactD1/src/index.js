import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import './styles/style.css';
import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        avatar:
          'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-business-man-399587fe24739d5a-512x512.png',
        name: 'Jailson Sousa',
        time: 'há 1 minutos',
        msg:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan porta nisi, sit amet convallis diam.',
      },

      {
        id: 1,
        avatar: 'https://cdn3.iconfinder.com/data/icons/women-avatars/314/23-01-512.png',
        name: 'Naiane Moura',
        time: 'há 5 minutos',
        msg:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lorem lacus, commodo non vulputate non, volutpat vitae risus.'
          + 'Sed bibendum est enim. Morbi consequat porttitor ullamcorper. Aliquam erat volutpat. Suspendisse potenti. Nunc vitae magna sed nunc vehicula sodales. Sed ut pretium augue.'
          + 'Vestibulum sodales elit sit amet neque blandit aliquet. Nullam quam libero, cursus id semper ut, viverra quis mauris.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <div className="timeline">
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </Fragment>
    );
  }
}
render(<App />, document.getElementById('app'));
