import React from "react"
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import Navigationitems from '../Navigationitems/Navigationitems'
import DrawToggle from "../SideDraw/DrawToggle/DrawToggle";

const toolbar=(props)=>(
    <header className={classes.Toolbar}>
        <DrawToggle clicked={props.DrawToggle}/>
        <div className={classes.Logo}>
        <Logo/>
        </div>
      
        <nav className={classes.DesktopOnly}>
        <Navigationitems/>
        </nav>

    </header>

);
export default toolbar;