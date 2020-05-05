import React from 'react';

import './App.css';
import {Route, BrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/Dialogs-container";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = (props) => {

    return (

        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>


                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' component ={Login}/>

                    <Route path='/users'
                        render ={()=>  <UsersContainer/>} />



                </div>

            </div>
        </BrowserRouter>
    );

}


export default App;
