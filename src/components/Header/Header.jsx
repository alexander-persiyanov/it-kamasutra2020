import React from 'react';
import s from './Header.module.css';

import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';

const Header = (props) => {


    let com = ()=>{
        if(!props.auth.isAuth){
            return  <NavLink to={'/login'}>Login</NavLink>;
        }

        return <>
            <div>
                <div>{props.auth.userId}</div>
                <div>{props.auth.login}</div>
            </div>
            
        </>;

    }

    return (
      

        <header className={s.AppHeader}>
            <div className={s.logoContainer}>
                <img src={logo} className={s.AppLogo} alt="logo" />
            </div>
            <div className={s.loginBlock}>
            {com()}
               

            </div>

        </header>
    );


}

export default Header;