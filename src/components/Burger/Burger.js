import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import style from './Burger.module.css'
const Burger = ({ ingredients }) => {
    const ingredientArray = Object.keys(ingredients).map(ingredient=>{
        return [...Array(ingredients[ingredient]) ].map((_,i)=>{
            return <BurgerIngredient  key={ingredient+i} type={ingredient}  />
        })
    }).reduce((arr,el)=>{
        return arr.concat(el)
    }, [])
 

return (
    <div className={style.burger}>

        <BurgerIngredient type="bread-top" />
        {(ingredientArray.length) ? ingredientArray : <p>Hey ! Start Add Your Favourite Gredients Now</p>}
        <BurgerIngredient type="bread-bottom" />
    </div>
);
    }
export default Burger;