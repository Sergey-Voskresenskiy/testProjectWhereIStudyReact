import React from 'react';
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {

  componentDidMount () {
    let userId = this.props.match.params.userId
    if(!userId){
      userId = 2;
    }
    axios
      .get (`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then (response => {
        this.props.setUserProfile (response.data)
      })
  }

  render () {
    return (
      <>
        {this.props.isFetching
          ? <Preloader/>
          : <Profile
            {...this.props}
            profile={this.props.profile}
          />
        }
      </>
    )
  }
}

let mapStateTpProps = (state) => ({
  profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter (ProfileContainer)

export default connect (mapStateTpProps, {setUserProfile}) (WithUrlDataContainerComponent)