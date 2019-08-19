import React,{Component} from 'react'
import CheckoutSummary from '../../Component/Order/CheckoutSummary/CheckoutSummary'
import {Route} from "react-router-dom"
import ContactData from './ContactData/ContactData'

export default class Checkout extends Component {
    state={
        ingredient:null,
        price:0
    }
    componentWillMount(){
        console.log("componentDidMount")
        const query=  new URLSearchParams(this.props.location.search);
        const ingredient={};
        let price=0;
        for(let param of query.entries()){
           
            if(param[0]=== 'price'){
                price=param[1];
            }
            else{
                ingredient[param[0]]= + param[1];
            }
        }
        this.setState({ingredient:ingredient,totalPrice:price})
    }
    checkoutCancledHandler=()=>{
        this.props.history.goBack();
    }
    checkoutContinuedHandler=()=>{
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        return (
            <div>
              <CheckoutSummary 
                canceled={this.checkoutCancledHandler}
                continued={this.checkoutContinuedHandler}
                ingredients={this.state.ingredient}/>  
              <Route 
                path={this.props.match.path + '/contact-data'} 
                render={(props)=>(<ContactData 
                    ingredients={this.state.ingredient} 
                    price={this.state.totalPrice} {...props}/>)}/>
            </div>
        )
    }
}
