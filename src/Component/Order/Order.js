import React from 'react'
import classes from './Order.module.css'
const Order = (props)=>{
    const ingredient=[];
     for(let ingredientName in props.ingredients){
            ingredient.push({
                name:ingredientName,
                amount:props.ingredients[ingredientName]
            });
     }
     const ingredientOutput=ingredient.map(ig=>{
         return <span 
            style={{
                textTransform:'capitalize',
                display:'inline-block',
                margin:'0 8px',
                padding:'5px',
                border:'1px solid #ccc'
            }}
            key={ig.name} >
            {ig.name} ({ig.amount})

         </span>
     })
    return(
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>NRS {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )

}
   
export default Order;