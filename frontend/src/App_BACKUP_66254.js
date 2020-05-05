import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import custom styles for our application
import "./App.css";

import Auth from "./services/Auth";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Import pages
import LoginPage from "./components/auth/LoginPage";
import HomePage from "./components/home/HomePage";
import PostsPage from "./components/posts/PostsPage";
<<<<<<< HEAD
import ChatPage from "./components/chat/ChatPage";
import CommentsPage from "./components/comments/CommentsPage";
import Covid19Live from "./components/covid19live/Covid19Live";
import About from "./components/about/About";
import Profile from "./components/profile/Profile";
import Notifications from "./components/notifications/Notifications";
import ServicesPage from "./components/services/Services";
import NotFoundPage from "./components/notfoundpage/NotFoundPage";
=======
import ChatPage from './components/chat/ChatPage';
import CommentsPage from './components/comments/CommentsPage'
import ServicePost from "./components/posts/ServicePost"

>>>>>>> post a service front end code

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);

  const loggedInRouter = (
<<<<<<< HEAD
    <div>
      <Navbar onLogout={() => Auth.logout()} />

      <div className="container mt-5">
        <Switch>
          <Route path="/posts/:id" component={CommentsPage} />
          <Route path="/posts">
            <PostsPage />
          </Route>

          <Route path="/chat">
            <ChatPage />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/covid19live" component={Covid19Live} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/notifications" component={Notifications} />
          <Route component={NotFoundPage} />
        </Switch>
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        cumque illum magni. Reiciendis quas vero autem totam esse explicabo modi
        perferendis temporibus atque fuga quidem harum, corporis inventore
        adipisci exercitationem nam sunt ex quasi tempore ut assumenda? Esse
        beatae, non possimus, iusto dolorum odio voluptas sapiente assumenda
        suscipit deleniti dignissimos ea ex nisi similique. Fugit dicta
        consectetur ducimus neque asperiores reprehenderit ut quas mollitia,
        tenetur, vel doloribus, obcaecati ea magnam. Rerum, fuga. Nulla neque
        officiis explicabo? Aliquam at praesentium, eius deserunt autem ducimus
        adipisci nobis accusantium vel odit necessitatibus eligendi ipsa
        assumenda nemo repellendus laboriosam vitae numquam rerum sed, corrupti
        libero delectus placeat ratione laudantium? Ab fugiat odio cum sapiente
        dolorem molestias numquam hic fuga, saepe sunt ipsa modi impedit? Totam
        eos ad possimus repudiandae harum nisi aliquam iure dolorum quidem enim?
        Voluptatum adipisci ipsa sapiente delectus similique quidem tempora,
        quod suscipit id consectetur at reiciendis labore minima ratione harum.
        <br />
        <Footer />
      </div>
    </div>
=======
            <Router>
                <Navbar onLogout={() => Auth.logout()} />

                <div className="container mt-5">
                    <Switch> 
                        <Route path='/posts/:id' component={CommentsPage} />
                        <Route path="/posts">
                            <PostsPage/>
                        </Route>

                        <Route path="/chat">
                            <ChatPage/>
                        </Route>

                        <Route path="/servicepost">
                            <ServicePost/>
                        </Route>
                        
                        <Route path="/">
                          <HomePage/>
                        </Route>


                        
                    </Switch>
                </div>
            </Router>
>>>>>>> post a service front end code
  );

  return loggedIn ? loggedInRouter : <LoginPage />;
}

export default App;
