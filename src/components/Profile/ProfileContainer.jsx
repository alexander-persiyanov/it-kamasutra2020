import React  from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {getUserProfile,getStatus,updateStatus} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import { compose } from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component{
   
    componentDidMount(){  
       
      let userId = this.props.match.params.userId;
      if(!userId){
        userId=1250;
      }
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
       
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
    };
}

// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps,{getUserProfile})(withUrlDataContainerComponent);

export default compose(
    connect(mapStateToProps,{getUserProfile,getStatus,updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);