import React from 'react';
import s from './Header.module.css';

import logo from '../../logo.svg';

const Header = () => {
    return (
        // <header className={s.header}>
        //     <img src="https://images.app.goo.gl/7nGtsdH7UeovEDe4A" alt=""/>
        // </header>

        <header className={s.AppHeader}>
            <img src={logo} className={s.AppLogo} alt="logo" />

        </header>
    );


}

export default Header;