import React from 'react'
import classes from "./BuildControls.module.css"
import BuildControl from "./BuildControl/BuildControl"
const control=[
    {label:"Salad" ,type:"salad"},
    {label:"Bacon" ,type:"bacon"},
    {label:"Cheese", type:"cheese"},
    {label:"Meat" ,type:"meat"}

]
const BuildControls = (props)=>(
   
    <div className={classes.BuildControls}>
         <p> <strong>Current Price: Rs {props.price.toFixed(2)}</strong></p>
        {control.map(crt=>(
            <BuildControl 
            key={crt.label} 
            label={crt.label}
            add={()=>props.ingredientAdd(crt.type)}
            remove={()=>props.ingredientremove(crt.type)}
            disabled={props.disabled[crt.type]}/>
        ))};
        <button className={classes.orderButton}
            onClick={props.order}    
            disabled={!props.Purchasable}>ORDER NOW</button>

    </div>

)
export default BuildControls;