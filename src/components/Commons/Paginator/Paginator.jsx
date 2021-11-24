import React, { useState } from 'react';
import s from './Paginator.module.css';

let Paginator = ({totalCount,pageSize,currentPage,onPageChanged})=>{
    let numberNavPaginator = 6;
    let [portion,setPortion] = useState(1);
    
    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let nextHandler = ()=>{
        setPortion(portion+1);
    }
    let prevHandler = ()=>{
        setPortion(portion-1);
    }

    return (
        <div className={s.paginationWrapper}>
            <div className={s.btnNav} > <button disabled={ portion>1 ?false:true } onClick={prevHandler} >prev</button></div> 
           
            <div className={s.paginationContainer}>
               
            
                {pages.filter((item,index)=> index>=numberNavPaginator*(portion-1) && index<numberNavPaginator*portion ).map((p,index) => {
                    return (
                        <div
                            key={index}
                            className={currentPage === p ? s.active : ''}
                            onClick={() => { onPageChanged(p) }}
                        >{p}</div>
                    );
                })}
              
                


            </div>
           
            <div className={s.btnNav} ><button  disabled={ portion<Math.ceil(pagesCount/numberNavPaginator)?false:true } onClick={nextHandler} >next</button></div> 
        </div>

      
    );
}

export default Paginator;