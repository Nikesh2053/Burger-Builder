import React from 'react'
import Logoburger from '../../Assets/image/burger.png'
import classes from './Logo.module.css' 
const Logo = ()=>(
    <div className={classes.Logo}>
        <img src={Logoburger} alt='Myburger'  /> 
    </div>
)
export default Logo;