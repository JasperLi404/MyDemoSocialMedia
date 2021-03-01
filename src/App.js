import { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import store from './redux/redux-store.js';
import {Provider } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';
import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import LoginPage from './components/Login/Login.jsx';
import Music from './components/Music/Music.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import News from './components/News/News.jsx';
import Settings from './components/Settings/Settings.jsx';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './redux/app-reducer';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import NewsContainer from './components/News/NewsContainer';

// const DialogsContainer = React.lazy(()=> import('./components/Dialogs/DialogsContainer.jsx'))
// const ProfileContainer = React.lazy(()=> import('./components/Profile/ProfileContainer.jsx'))

class App extends Component {
  componentDidMount(){
    
    this.props.initializeApp();
  }

  render(){
      if(!this.props.initialized){
        return <Preloader />
      }

      return (
        <div className="app-wrapper">
          <HeaderContainer/>
          <NavBar />
          <div className='app-wrapper-content'> 
            <Route path='/dialogs' render={ () => <DialogsContainer />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/login' render={() => <LoginPage />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/news' render={() => <NewsContainer /> } />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
          </div>
        </div>
    );
  }
}
 
const mapStateToProps = state => ({
  initialized: state.app.initialized
})

let AppContainer =  connect(mapStateToProps, { initializeApp })(App);
const  SamuraiJsApp = props => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SamuraiJsApp;