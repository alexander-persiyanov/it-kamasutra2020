import React from 'react';
import s from './Spinner.module.css';

let Spinner = () => {
    return <>
        <div className={s.overlay}>
            <div className={s.ldsSpinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    </>
}

export default Spinner;