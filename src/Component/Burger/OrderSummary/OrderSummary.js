import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'
const OrdrerSummary=(props)=>{
    const ingredientSummary=Object.keys(props.ingredients).map(ikey=>{
        return (
        <li key={ikey}>
            
            <span style={{textTransform:"capitalize"}}> 
            {ikey}</span>:{props.ingredients[ikey]}
        </li>
        )
    });
    return(
        <Aux>
            <h1> Your Order!!</h1>
            <p> A Delicious Burger With Following Ingredients :</p>
            <u>
                {ingredientSummary}
            </u>
            <p><strong> Total Price : Rs {props.price.toFixed(2)}</strong></p>
            <p>Continue to CheckOut??</p>
            <Button changed={props.remove} btnType="Danger">ORDERCANCLE</Button>
            <Button changed={props.continued} btnType="Success">CONTINUE</Button>

       </Aux>

    )
    


}

export default OrdrerSummary;
