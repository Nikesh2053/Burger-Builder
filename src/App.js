import React, {Component} from 'react'
import Layout from './Component/Layout/Layout';
import BurgurBulder from './Container/BurgerBulder/BurgurBulder'
import Checkout from './Container/Checkout/Checkout'
import Orders from './Container/Orders/Orders'
import {Route , Switch} from 'react-router-dom'

export default class  extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path='/checkout' component={Checkout}/>
                        <Route path="/" exact component={BurgurBulder} />
                        <Route path="/orders"  component={Orders} />

                    </Switch>
                   

                </Layout>
                
            </div>
        )   
           
    }
}
