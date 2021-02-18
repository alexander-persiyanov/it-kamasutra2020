import React from 'react';

import s from './ProfileStatus.module.css';


class ProfileStatus extends React.Component {
    
    state = {
        editMode:false,
        status:this.props.status
        
    }
    // componentDidMount(){
    //     this.setState({status:this.props.status});
    // }
      
    activateEditMode = ()=>{
        this.setState({editMode:true});
    }

    deactivateEditMode = ()=>{
        this.setState({editMode:false});
        this.props.updateStatus(this.state.status);
      
    }

    onStatusChange = (e)=>{
       
        this.setState({status:e.currentTarget.value});


    }

   
    render() {

        return (
            <div className={s.profileStatus}>
               
               <div>status:{this.state.status}</div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={()=>{ this.activateEditMode() }}>
                           {this.props.status}
                        </span>
                    </div>
                }
                {this.state.editMode && 
                    <div>
                        <input onChange={(e)=>{this.onStatusChange(e)}} autoFocus={true}  onBlur={()=>{this.deactivateEditMode()}} value={this.state.status} type="text"  placeholder="set status" />
                    </div>
                }

            </div>
        );

    }

}

export default ProfileStatus;