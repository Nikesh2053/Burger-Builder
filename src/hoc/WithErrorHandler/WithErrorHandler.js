import React,{Component} from 'react'
import Aux from '../Aux'
import Modal from '../../Component/UI/Modal/Modal'
const WithErrorHandler =(WithErrorHandler,axios)=>{
    return class extends Component{
        state={
            Error:null
        }
        componentWillMount(){
            axios.interceptors.request.use(req=>{
                this.setState({Error:null})
                return req;
            });
            axios.interceptors.response.use(res=>res,Error=>{
                this.setState({Error:Error})

            });
        }
        errorConformHandler =()=>{
            this.setState({Error:null})
        }
        render(){
            return(
                <Aux>
                    <Modal 
                       modalClosed={this.errorConformHandler}
                       show={this.state.Error}>
                       {this.state.Error ?this.state.Error.message:null}
                    </Modal>
                    <WithErrorHandler {...this.props}/>
                </Aux>
    
            )
        }


    }
    

} 
export default WithErrorHandler;