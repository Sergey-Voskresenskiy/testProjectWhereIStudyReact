/* eslint-disable */
import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div className={s.wrapper}>
      <div className={s.bigImg}>
        { props.profile.photos.large
          ? <img src={props.profile.photos.large} alt={props.profile.fullName}/>
          : <div className={s.photoError}>no photo</div>
        }
      </div>
      <div className={s.descriptionBlock}>
        <div>
          <div className={s.bigAva}>
            { props.profile.photos.large
              ? <img src={props.profile.photos.large} alt={props.profile.fullName}/>
              : <div className={s.photoError}>no photo</div>
            }
          </div>
          <h4 className={s.name}>
            {props.profile.fullName}
          </h4>
          <div className={s.aboutMe}>
            {props.profile.aboutMe}
          </div>
        </div>
        <div className={s.work}>
          {props.profile.lookingForAJob ? <p>im looking for a job</p>: <p>I'm not looking for work</p>}
          <small>{props.profile.lookingForAJobDescription}</small>
        </div>
        <div className={s.description}>
          <div className={s.contacts}>
            <h3>contacts</h3>
            <div className={s.item}>
              <a href={`${props.profile.contacts.facebook}`}>facebook</a>
            </div>
            <div className={s.item}>
              <a href={`${props.profile.contacts.vk}`}>vk</a>
            </div>
            <div className={s.item}>
              <a href={`${props.profile.contacts.twitter}`}>twitter</a>
            </div>
            <div className={s.item}>
              <a href={`${props.profile.contacts.instagram}`}>instagram</a>
            </div>
            <div className={s.item}>
              <a href={`${props.profile.contacts.youtube}`}>youtube</a>
            </div>
            <div className={s.item}>
              <a href={`${props.profile.contacts.github}`}>github</a>
            </div>
            <div className={s.item}>
              <a href={`${props.profile.contacts.mainLink}`}>mainLink</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;