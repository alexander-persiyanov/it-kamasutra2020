import React,{ useState } from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props)=>{

    const [editMode,setEditMode] = useState(false);
    const [status,setStatus] = useState(props.status);


    // state = {
    //     editMode:false,
    //     status:props.status
        
    // }
   
    const componentDidUpdate=(prevProps,prevStatus)=>{

        if(prevProps.status !== props.status){
            setStatus(props.status)
        }


    }
      
   const  activateEditMode = ()=>{
    setEditMode(true);
    }

    const deactivateEditMode = ()=>{
        setEditMode(false);
        props.updateStatus(status);
      
    }

    const onStatusChange = (e)=>{
        setStatus(e.currentTarget.value);
       


    }

   
    return (
       
        <div className={s.profileStatus}>
            
            <div>status:{status}</div>
            {!editMode &&
                <div>
                    <span onDoubleClick={()=>{ activateEditMode() }}>
                        {props.status}
                    </span>
                </div>
            }
            {editMode && 
                <div>
                    <input onChange={(e)=>{onStatusChange(e)}} autoFocus={true}  onBlur={()=>{deactivateEditMode()}} value={status} type="text"  placeholder="set status" />
                </div>
            }

        </div>
          
    
       
    ); 



}

export default ProfileStatusWithHooks;