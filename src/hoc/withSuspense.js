import React, { Suspense } from 'react';
import Preloader from '../components/Commons/Spinner/Spinner';

export const withSuspense = (Component) => {
  
    return (props)=>{
        return <React.Suspense fallback={<div>Loading..</div>}>
                <Component {...props} />
            </React.Suspense>
        
    
    };
};
