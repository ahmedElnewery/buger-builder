import React from 'react';
import style from './NavItems.module.css'
import NavItem from './NavItem/NavItem';
const NavItems = () => {
    return ( 
        <ul className={style.NavItems}>
            
            <NavItem to ="/" exact >Burger Builder</NavItem>
            <NavItem to ="/orders">Orders </NavItem>

        </ul>
     );
}
 
export default NavItems;