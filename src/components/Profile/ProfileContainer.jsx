import React  from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {getUserProfile,getStatus,updateStatus,savePhoto} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import { compose } from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component{

  refreshProfile(){
   
    let userId = this.props.match.params.userId;
     
    if(!userId ){
      userId = this.props.authorizedUserId;
    
      // userId=1250;
     
      if(!userId){
        this.props.history.push("/login"); 
     
      }
    }
  
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
   
    componentDidMount(){  
      this.refreshProfile();
     
    }

    componentDidUpdate(prevProps,prevState,snapshot){
    
      if(this.props.match.params.userId != prevProps.match.params.userId){
       
        this.refreshProfile();
      }
     
    }

   

    render(){
     

        return <>
            <Profile {...this.props} 
                isOwner = {!this.props.match.params.userId} 
                profile={this.props.profile} 
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
               
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
    connect(mapStateToProps,{getUserProfile,getStatus,updateStatus,savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);