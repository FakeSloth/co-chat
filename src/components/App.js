import React, {Component} from 'react';
import {Link} from 'react-router';

export default class App extends Component {
  componentDidMount() {
    socket.on('news', function (data) {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
    });    
  }

  render() {
    return (
      <div>
        <Link to="/about">about</Link>
        <h1>Hello World!</h1>
        {this.props.children}
      </div>
    );
  }
}
