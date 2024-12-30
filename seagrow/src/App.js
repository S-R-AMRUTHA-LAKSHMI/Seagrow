import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WelcomePage } from './WelcomePage';
import Login from './Login';
import Signup from './Signup'; 
import Home from './Home';
import Profile from './Profile';
import ToDo from './ToDo';
import News from './components/News';
import ContentSharingHome from './components/contentSharing/ContentSharingHome';
import MyContents from './components/contentSharing/MyContents';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/tech-news" element={<News />} />
        <Route path="/content-sharing" element={<ContentSharingHome />} />
        <Route path="/my-contents" element={<MyContents />} />
      </Routes>
    </Router>
  );
}

export default App;