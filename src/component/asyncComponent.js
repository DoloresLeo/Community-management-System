import React,{Component}from'react';

const asyncComponent=(importComponent)=>{
    return class extends Component{
        constructor(){
            super();
            this.state={
                component:null
            }
        }

        async componentDidMount(){
            const {default:component}=await importComponent();
            this.setState({
                component:component
            })
        }

        render(){
            const C=this.state.component;
            return C?<C{...this.props}/>:null;
        }
        
    }
}
export default asyncComponent;