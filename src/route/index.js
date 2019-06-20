import React,{ Component } from "react";
import { Route,Switch,BrowserRouter as Router,withRouter } from "react-router-dom";
import asyncComponent from 'component/asyncComponent.js';
import { connect } from 'react-redux';



const Login=asyncComponent(()=>import('../container/Login'));
const Register=asyncComponent(()=>import('../container/Register'));

@withRouter
class RoutesIndex extends Component{  
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                </Switch>
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