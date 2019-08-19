import React,{Component} from "react";
import Aux from '../../hoc/Aux'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import  SideDraw from '../Navigation/SideDraw/SideDraw'
class Layout extends Component{
    state={
        showSideDraw:false
    }
    showSideDrawHandler=()=>{
        this.setState({showSideDraw:false})
    }
    drawtoggleHandler =()=>{
        this.setState((prevState)=>{
            return{
                showSideDraw:!prevState.showSideDraw
            }
        })
    }
    
    render(){
        return(  
        <Aux>
            <Toolbar DrawToggle={this.drawtoggleHandler} 
            />
            <SideDraw 
                closed={this.showSideDrawHandler}
                open={this.state.showSideDraw}
            />
            <main className={classes.Contain}>
                {this.props.children}
            </main>
        </Aux>
        )
    }
}
export default Layout;