import React from 'react';

import s from './ProfileStatus.module.css';


class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode:false,
            title:"Change status with double click",
        };
      }

    activateEditMode = ()=>{
        this.setState({editMode:true});
    }

    deactivateEditMode = (e)=>{
        let newTextStatus = e.target.value;
        this.setState({editMode:false,title:newTextStatus});
    }


    render() {

        return (
            <div className={s.profileStatus}>
               
               
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={()=>{ this.activateEditMode() }}>
                           {this.state.title}
                        </span>
                    </div>
                }
                {this.state.editMode && 
                    <div>
                        <input autoFocus={true} onBlur={(e)=>{this.deactivateEditMode(e)}} value={this.props.status} type="text"  placeholder="set status" />
                    </div>
                }

            </div>
        );

    }

}

export default ProfileStatus;