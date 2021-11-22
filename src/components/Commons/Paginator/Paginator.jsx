import React from 'react';
import s from './Paginator.module.css';

let Paginator = ({totalCount,pageSize,currentPage,onPageChanged})=>{

    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
       
        <div className={s.paginationContainer}>
            {pages.map((p,index) => {
                return (
                    <div
                        key={index}
                        className={currentPage === p ? s.active : ''}
                        onClick={() => { onPageChanged(p) }}
                    >{p}</div>
                );
            })}


        </div>

      
    );
}

export default Paginator;