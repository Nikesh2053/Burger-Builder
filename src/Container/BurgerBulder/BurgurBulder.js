import React, { Component} from "react"
import Aux from '../../hoc/Aux'
import Burger from '../../Component/Burger/Burger'
import BuildControls from "../../Component/Burger/BuildControls/BuildControls"
import Modal from '../../Component/UI/Modal/Modal'
import OrderSummary from '../../Component/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-order'
import Spinner from '../../Component/UI/Spinner/Spinner'
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler"
const INGREDIENTS_PRICE={
    salad:30,
    bacon:50,
    meat:60,
    cheese:20
}

 class BurgurBulder extends Component {
    state={
        ingredient :null,
        totalPrice : 15,
        purchasable:false,
        purchasing:false,
        Loading:false,
        Error:false
    };
    updatePurchasable(ingredient){
        const sum=Object.keys(ingredient).map(ikey=>{
            return ingredient[ikey]
   
        })
        .reduce((sum,next)=>{
           return sum + next;  
        },0);
        this.setState({purchasable:sum >0})
    }
    addIngridietsHandler= (type)=>{
        const oldCount=this.state.ingredient[type];
        const updateCount=oldCount + 1;
        const updateIngredients={
            ...this.state.ingredient
        };
        updateIngredients[type]=updateCount;
        const priceAddtions=INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice ;
        const newPrice =  oldPrice + priceAddtions;
        this.setState({totalPrice:newPrice , ingredient:updateIngredients})
        this.updatePurchasable(updateIngredients);

    }
    removeIngredientsHandler=(type)=>{
        const oldCount=this.state.ingredient[type];
        if (oldCount <=0){
            return null;
        }
        const updateCount=oldCount - 1; 
        const updateIngredients={
            ...this.state.ingredient
        };
        updateIngredients[type]=updateCount;
        const priceRemove=INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice ;
        const newPrice =  oldPrice - priceRemove;
        this.setState({totalPrice:newPrice , ingredient:updateIngredients})
        this.updatePurchasable( updateIngredients);



    }
    purchaseHandler=()=>{
        this.setState({purchasing:true})
    }
    removeHandler=()=>{
        this.setState({purchasing:false});
    }
    ContinueHandler=()=>{
        //alert("You Continue!!")
    
    const queryparms=[];
    for(let i in this.state.ingredient){
        queryparms.push(encodeURIComponent(i) + '='+ encodeURIComponent(this.state.ingredient[i]));

    }
    queryparms.push('price=' +this.state.totalPrice);
    const queryString=queryparms.join('&');
    this.props.history.push({
        pathname:'/checkout',
        search:'?' + queryString

    })
    }
    componentDidMount(){
        axios.get('https://react-burger-66810.firebaseio.com/ingredients.json')
        .then(response=>{
            this.setState({ingredient:response.data});
        })
        .catch(Error=>{
            this.setState({Error:true});
        })  
    }
    render() {
        const disableinfo={
          ...this.state.ingredient
        };
        for(let key in disableinfo){
            disableinfo[key]=(disableinfo[key] <=0) 
        };
        let orderSummary=null;
        let burger=this.state.Error ?<p>Ingredient can't be loaded...</p>:<Spinner/>;
        if(this.state.ingredient){
            burger=(
                <Aux>
                    <Burger ingredients={this.state.ingredient}/>
                    <BuildControls 
                        ingredientAdd={this.addIngridietsHandler}
                        ingredientremove={this.removeIngredientsHandler}
                        disabled={disableinfo}
                        price={this.state.totalPrice}
                        order={this.purchaseHandler}
                        Purchasable={this.state.purchasable}
                        />
                </Aux>
            ); 
            orderSummary=<OrderSummary 
                ingredients={this.state.ingredient} 
                remove={this.removeHandler}
                continued={this.ContinueHandler}
                price={this.state.totalPrice}/>

        };
          
        if(this.state.Loading){
            orderSummary=<Spinner/>
        }
         
        return( 
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.removeHandler}>
                {orderSummary}
                </Modal > 
                {burger}  
             
            </Aux>
           
        )    
    }
}
export default WithErrorHandler(BurgurBulder,axios);
