import React from 'react';
import style from  './Toolbar.module.css'
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => {
    return ( 
        <div className={style.Toolbar}>
            <DrawerToggle toggle={props.toggleSideDrawer}/>
            <Logo/>
            <nav>
                <NavItems/>
            </nav>
        </div>
     );
}

export default Toolbar;