import React, {ChangeEvent} from 'react';
import s from "./Profilenfo.module.css";
import {ProfileItemPropsType} from "../../../redux/reducers/profile-reducer";
import {Preloader} from "../../Common/Preloader/Preloader";
import defaultImage from '../../../assets/images/usersPage/defaultUser.jpeg'
import {ProfileStatusF} from "../ProfileStatus/ProfileStatusF";

type ProfileInfoPropsType = {
  profile: ProfileItemPropsType | null
  status: string
  updateStatusTC: (status: string) => void
  isOwner: boolean
  saveFile:(file:File)=>void
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {

  if (!props.profile) {
    return <Preloader/>
  }

  const omAvatarChange = (e:ChangeEvent<HTMLInputElement>)=>{
      if(e.currentTarget.files?.length){
         props.saveFile(e.currentTarget.files[0])
      }
  }

  return (
    <div>
      {/*<div>
                    <img className={s.content_img}
                         src="https://socialprint.com/wp-content/uploads/banner.policies.1920x500.png" alt=""/>
                </div>*/}
      <div className={s.descriptionBlock}>
        <div>
          <div>
            <img src={props.profile.photos.small ? props.profile.photos.small : defaultImage}
                 alt={'props.profile.photos.small'} className={s.profilePhoto}/>
          </div>
          {props.isOwner && <input type={'file'} onChange={omAvatarChange}/>}

        </div>
        <ProfileStatusF status={props.status} updateStatusTC={props.updateStatusTC}/>
        <div>
          <p>{props.profile.aboutMe}</p>
          <p>{props.profile.fullName}</p>
          <p>{props.profile.lookingForAJobDescription}</p>
        </div>

      </div>
    </div>
  );


};
