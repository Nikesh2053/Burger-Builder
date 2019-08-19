import React, { Component } from 'react'
import Order from '../../Component/Order/Order'
import axios from '../../axios-order'
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'

 class Orders extends Component {
    state={
        orders:[],
        Loading:true
    }
    componentDidMount(){
        axios.get('/orders.json')
        .then(res=>{
            const fetchOrder=[];
            for(let key in res.data){
                fetchOrder.push({
                    ...res.data[key],
                    id:key
                });
            }
            this.setState({Loading:false , orders:fetchOrder})
        })
        .catch(error=>{
            this.setState({Loading:false })
        })
    }   
    render() {
        return (
            <div>
              {this.state.orders.map(order=>(
                  <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.prices}/>
              ))}

            </div>
        )
    }
}
export default WithErrorHandler(Orders , axios)