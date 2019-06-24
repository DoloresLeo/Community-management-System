import React,{ Component } from "react";
import { Route,Switch,BrowserRouter as Router,withRouter } from "react-router-dom";
import asyncComponent from 'component/asyncComponent.js';
import { connect } from 'react-redux';
import {Header,Footer} from 'component';



const Login=asyncComponent(()=>import('container/Login'));
const Register=asyncComponent(()=>import('container/Register'));
const Home=asyncComponent(()=>import('container/Home'));

@withRouter
class RoutesIndex extends Component{  
    render(){
        return(
            <div class='cd-box'>
                <Route component={Header}/>
                <div class='cd-content-box'>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                    </Switch>
                </div>
                <Route component={Footer}/>
            </div>
        );
    }
}

class Routes extends Component{
    render(){
        return(
            <Router>
                <RoutesIndex {...this.props}/>
            </Router>
        );
    }
}
export default connect(state=>state)(Routes);