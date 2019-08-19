import React from 'react'
import classes from './Navigationitems.module.css'
import Navigationitem from './Navigationitem/Navigationitem'
const Navigationitems = ()=>(
    <ul className={classes.Navigationitems}>
        <Navigationitem link='/' exact>BURGER BULDER</Navigationitem>
        <Navigationitem link='/orders'>ORDERS</Navigationitem>

        
    </ul>
)
export default Navigationitems;
