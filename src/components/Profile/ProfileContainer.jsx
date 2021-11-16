import React  from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {getUserProfile,getStatus,updateStatus} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import { compose } from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component{
   
    componentDidMount(){  
       console.log("****");
      let userId = this.props.match.params.userId;
      if(!userId  && ! this.props.authorizedUserId){
         this.props.history.push("/login"); 
      }
      if(!userId ){
        userId = this.props.authorizedUserId;
        // this.props.history.push("/login"); 
        // userId=1250;
       
        // if(this.props.authorizedUserId){
        //     userId=this.props.authorizedUserId;
        // }else{
            
        //     
        // }
      }
      if( this.props.authorizedUserId){
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
      }
     
      
       
    }

    render(){
        

        return <>
            <Profile {...this.props} 
                profile={this.props.profile} 
                status={this.props.status}
                updateStatus={this.props.updateStatus}
               
            ></Profile>
        
        </>;
    }

}

// let AuthRedirectComponent =  withAuthRedirect(ProfileContainer);

let mapStateToProps = (state)=>{
    return{
       profile:state.profilePage.profile,
       status:state.profilePage.status,
       authorizedUserId:state.auth.userId,
    };
}

// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps,{getUserProfile})(withUrlDataContainerComponent);

export default compose(
    connect(mapStateToProps,{getUserProfile,getStatus,updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);