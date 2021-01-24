import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href="">Profile</a>
            </div>
            <div className={s.item}>
                <a href="">Messages</a>
            </div>
            <div className={s.item}>
                <a href="">Profile</a>
            </div>
            <div className={s.item}>
                <a href="">More</a>
               
            </div>
            <div className={s.item}>
               Music
               
            </div>

           
        </nav>
      
    );
   

}

export default Navbar;