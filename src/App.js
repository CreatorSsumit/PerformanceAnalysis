import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import LogIn from './components/auth/LogIn';
import Adminregister from './components/auth/admin';
import Register from './components/auth/Register';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import Dashboard from "./components/dashboard/dashboard"

import Admindashboard from './components/dashboard/admindashboard';

library.add(faEdit);

class App extends Component {

    state = {

        isAuthenticated: false,
        user: null
    }




    render() {

        return (

            <div className="App">
                <BrowserRouter >
                    <div>

                        <Switch>
                            <Route exact path="/" render={(props) => this.props.profileinfo ? <Redirect to={{ pathname: '/dashboard', state: { from: this.props.location } }} /> : <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />} />
                            <Route exact path="/register" render={(props) => <Register newuser={this.props.profileinfo ? this.props.profileinfo : ""} />} />
                            <Route exact path="/registeradmin" render={(props) => <Adminregister />} />

                            <Route exact path="/admin" render={(props) => <Admindashboard />} />
                            <Route exact path="/login" render={(props) => (localStorage.getItem('user')) ? <>{this.props.who === 'user' ? <Redirect to={{ pathname: '/dashboard', state: { from: this.props.location } }} /> : <> {this.props.who === 'admin' ? <Redirect to={{ pathname: '/admin', state: { from: this.props.location } }} /> : <LogIn />} </>}
                            </> : <LogIn />} />
                            <Route exact path="/dashboard" render={(props) => this.props.profileinfo && localStorage.getItem('user') ? <Dashboard /> : <Redirect to={{ pathname: '/register', state: { from: this.props.location } }} />} />
                            <Route exact path="/logout" render={() => <Redirect to={{ pathname: '/login' }} />} />

                        </Switch>

                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


function mapStateToProps(state) {

    console.log("data", state.data.profile.data)

    return {
        msg: state.data.msg,
        who: state.data.profile.who,
        profileinfo: state.data.profile.data,
        isAuthenticated: state.data.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(App);
