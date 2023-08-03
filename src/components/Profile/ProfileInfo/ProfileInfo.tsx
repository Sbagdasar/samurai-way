import React, {ChangeEvent} from 'react';
import s from "./Profilenfo.module.css";
import {ProfileItemPropsType} from "../../../redux/reducers/profile-reducer";
import {Preloader} from "../../Common/Preloader/Preloader";
import defaultImage from '../../../assets/images/usersPage/defaultUser.jpeg'
import {ProfileStatusF} from "../ProfileStatus/ProfileStatusF";
import {Contacts} from "components/Profile/ProfileInfo/ProfileContacts/Contacts";

type ProfileInfoPropsType = {
  profile: ProfileItemPropsType | null
  isOwner: boolean
  saveFile:(file:File)=>void
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {

  if (!props.profile) {
    return <Preloader/>
  }

  const onAvatarChange = (e:ChangeEvent<HTMLInputElement>)=>{
      if(e.currentTarget.files?.length){
         props.saveFile(e.currentTarget.files[0])
      }
  }

  return (
    <div className={s.profileInfoContainer}>
      <div className={s.descriptionBlock}>
        <div className={s.imageContainer}>
          <div className={s.imageBlock}>
            <img src={props.profile.photos.small ? props.profile.photos.small : defaultImage}
                 alt={'props.profile.photos.small'} className={s.profilePhoto}/>
            {props.isOwner && <input type={'file'} onChange={onAvatarChange}/>}
          </div>
        </div>
       <Contacts contacts={props.profile.contacts}/>
      </div>
    </div>
  );


};
