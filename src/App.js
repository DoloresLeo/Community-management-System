import React,{Component} from "react";
import { BrowserRouter as Router,  } from "react-router-dom";
import RoutesIndex from './route';

class App extends Component{
    render(){
        return(
            <Router>
                <div className='App'>
                    <div className='content'>
                        <RoutesIndex/>
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;