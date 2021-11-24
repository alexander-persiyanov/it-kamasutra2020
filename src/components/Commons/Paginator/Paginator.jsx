import React, { useState } from 'react';
import s from './Paginator.module.css';

let Paginator = ({totalItemsCount,pageSize,currentPage,onPageChanged,portionSize=10})=>{
  
    let [portion,setPortion] = useState(1);
    
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    let portionLeft = portionSize*(portion-1);
    let portionRight = portionSize*portion;
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
        <div>
            <div><p> Page <span style={{color:"red"}}><b>{currentPage}</b></span> of <i>{pagesCount}</i></p></div> 
            <div className={s.paginationWrapper}>
                <div className={s.btnNav} > <button disabled={ portion>1 ?false:true } onClick={prevHandler} > {`\<`} </button></div> 
            
                <div className={s.paginationContainer}>
                
                {/* {portionLeft} */}
                    {pages.filter((item,index)=> index>=portionLeft && index< portionRight ).map((p,index) => {
                        return (
                            <div
                                key={index}
                                className={ `${s.item} ${currentPage === p ? s.active : ''}`  }
                                onClick={() => { onPageChanged(p) }}
                            >{p}</div>
                        );
                    })}
                
                    


                </div>
                    {/* {portionRight} */}
                <div className={s.btnNav} ><button  disabled={ portion<Math.ceil(pagesCount/portionSize)?false:true } onClick={nextHandler}  >   {`\>`} </button></div> 
            </div>
        </div>

      
    );
}

export default Paginator;