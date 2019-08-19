import React, { Component } from 'react'
import Button from '../../../Component/UI/Button/Button'
import classes from './ContactData.module.css';
import axios from '../../../axios-order'
import Spinner from '../../../Component/UI/Spinner/Spinner'
import Input from '../../../Component/UI/Input/Input'
export default class ContactData extends Component {
    state={
        orderForm:{
                Name:{
                    elementType:'input',
                    elementConfig:{
                        type:"test",
                        placeholder:"your Name"
                    },
                    value:"",
                    validation:{
                        required:true
                    },
                    valid:false
                },
                street:{
                    elementType:'input',
                    elementConfig:{
                        type:"test",
                        placeholder:"Street"
                    },
                    value:"",
                    validation:{
                        required:true
                    },
                    valid:false
                },
                zipCod:{
                    elementType:'input',
                    elementConfig:{
                        type:"test",
                        placeholder:"Zip-Code"
                    },
                    value:"",
                    validation:{
                        required:true,
                        maxLength:5,
                        minLength:5
                    },
                    valid:false
                },
                email:{
                    elementType:'input',
                    elementConfig:{
                        type:"email",
                        placeholder:"your E-mail"
                    },
                    value:"",
                    validation:{
                        required:true
                    },
                    valid:false
                },
                Country:{
                    elementType:'input',
                    elementConfig:{
                        type:"test",
                        placeholder:"Country"
                    },
                    value:"",
                    validation:{
                        required:true
                    },
                    valid:false
                },
                deliveryMethod:{
                    elementType:'select',
                    elementConfig:{
                       options:[
                           {value:'fastest', displayValue:'Fastest'},
                           {value:'Chepest', displayValue:'Chepest'}
                       ]
                    },
                    value:'fastest',
                    validation:{},
                    valid:true
                  
                }
        },
        Loading:false

    }
    orderHandler=(event)=>{
        event.preventDefault();
        this.setState({Loading:true})
        const formData={};
        for(let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier]=this.state.orderForm[formElementIdentifier].value;
            

        }
        const orders={
            ingredients:this.props.ingredients,
            prices:this.props.price ,
            ordersData:formData   

        }
        axios.post('/orders.json',orders)
        .then(response =>{
            this.setState({Loading:false});
            this.props.history.push('/')
        })
        .catch(error=>{
            this.setState({Loading:false})
       });

    }
    checkValidity(value,rules){
        let isValid=true;
        if(!rules){
            return true
        }
        if(rules.required){
            isValid=value.trim() !== '' && isValid;
        }
        if(rules.minLength){
            isValid=value.length >= rules.minLength  && isValid;
        }
        if(rules.maxLength){
            isValid=value.length <= rules.maxLength  && isValid;
        }
        return isValid;
    }
    inputChangedHandler=(event , inputIdentifier)=>{
        const upDateOrderForm={
            ...this.state.orderForm
        };
        const upDateFormElement={
            ...upDateOrderForm[inputIdentifier]
        };
        upDateFormElement.value=event.target.value;
        upDateFormElement.valid=this.checkValidity(upDateFormElement.value ,upDateFormElement.validation);
        upDateOrderForm[inputIdentifier]=upDateFormElement;
        console.log(upDateFormElement);
        this.setState({orderForm:upDateOrderForm})
    };
   
    render() {
        const formElementArray=[];
        for(let key in this.state.orderForm){
            formElementArray.push({
                id:key,
                config:this.state.orderForm[key]
            })
        }
        let form =(
            <form  onSubmit={this.orderHandler}>             
               {formElementArray.map(formElement=>(
                   <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        Invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}                        
                        changed={(event)=>this.inputChangedHandler(event,formElement.id)}
                    />
                    
               ))}
                  <Button btnType='Success'>ORDER</Button>
            </form> 
        );
    if(this.state.Loading){
        form=< Spinner/>
    }
        return (
            <div className={classes.ContactData}> 
                <h1>Enter Your Contact Data </h1>
                 {form}
              
            </div>
        )
    }
}
