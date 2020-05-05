import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import custom styles for our application
import './App.css';

import Auth from './services/Auth';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Import pages
import LoginPage from './components/auth/LoginPage';
import HomePage from './components/home/HomePage';
import PostsPage from './components/posts/PostsPage';
import ChatPage from './components/chat/ChatPage';
import CommentsPage from './components/comments/CommentsPage';
import ServicePost from './components/posts/ServicePost';
import ServicePage from './components/service/ServicePage';
import ServiceForm from './components/service/serviceForm';
import Covid19live from './components/covid19live/Covid19Live';

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);

  const loggedInRouter = (
    <Router>
      <Navbar onLogout={() => Auth.logout()} />

      <div className='container mt-5'>
        <Switch>
          <Route path='/posts/:id' component={CommentsPage} />
          <Route path='/posts'>
            <ServicePage />
          </Route>

          <Route path='/chat'>
            <ChatPage />
          </Route>

          <Route path='/service'>
            <ServicePage />
          </Route>

          <Route path='/serviceform'>
            <ServiceForm />
          </Route>

          <Route path='/covid19live'>
            <Covid19live />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );

  return loggedIn ? loggedInRouter : <LoginPage />;
}

export default App;
