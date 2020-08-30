import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app_headerImage"
          src="https://instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"/>
      </div>

      <Post/>
      <Post/>
      <Post/>
      <Post/>
        {/* Header */}
        {/* Posts */}
    </div>
  );
}

export default App;
