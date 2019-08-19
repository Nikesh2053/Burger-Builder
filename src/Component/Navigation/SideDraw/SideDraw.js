import React from 'react'
import Logo from '../../Logo/Logo'
import Navigationitems from '../Navigationitems/Navigationitems';
import classes from './SideDraw.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from  '../../../hoc/Aux'
const sideDraw =(props)=>{
    let attachedClass=[classes.SideDraw , classes.Close];
    if(props.open){
        attachedClass=[classes.SideDraw , classes.Open];
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClass.join(' ')}>
                <div className={classes.Logo}>
                <Logo/>
                </div>
            
                <nav>
                    <Navigationitems/>
                </nav>
            </div>
        </Aux>

    )
}
export default sideDraw;