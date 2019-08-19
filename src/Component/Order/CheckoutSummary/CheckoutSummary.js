import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.module.css'
const checkoutSummary = (props)=>{
     return(
         <div className={classes.CheckOutSummary}>
             <h1>We hope it tastes Will !!</h1>
             <div style={{width:'100%',margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
             </div>

              <Button 
                btnType="Danger"
                changed={props.canceled}
                >CANCLE
              </Button>
              <Button 
                btnType="Success"
                changed={props.continued}
                >CONTINUE
              </Button>  

         </div>
     )
}
export default checkoutSummary;