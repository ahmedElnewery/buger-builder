import React from 'react';
import Burger from '../../Burger/Burger';
import style from './CheckoutSummary.module.css'
import Button from './../../UI/Button/Button';
const CheckoutSummary = (props) => {
    return ( 
        <div className={style.CheckoutSummary}>
            <h1>We hope it tastes well !</h1>
            <div>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" clicked={props.onCheckoutCancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.onCheckoutContinue}>Continue</Button>

        </div>
     );
}
 
export default CheckoutSummary;