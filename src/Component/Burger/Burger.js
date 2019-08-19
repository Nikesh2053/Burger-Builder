import React from 'react'
import classes from './Burger.module.css';
import Burgeringredient from './Burgeringredient/Burgeringredient';

const burger =(props)=>{
    let transforIngredient=Object.keys(props.ingredients).map(ikey=>{
            return[...Array(props.ingredients[ikey])].map((_,i)=>{
            return   <Burgeringredient type={ikey} key={ikey + i}/>
            
        }); 
    })
    .reduce((pre,next)=>{
        return pre.concat(next)
    },[])
    if (transforIngredient.length===0){
        transforIngredient=<p>please start adding ingredient!</p>
    }
    return(
        <div className={classes.Burger}>
            
            <Burgeringredient type='bread-Top'/>
            {transforIngredient}
            <Burgeringredient type='bread-bottom'/>


        </div>
    )

}
export default burger;