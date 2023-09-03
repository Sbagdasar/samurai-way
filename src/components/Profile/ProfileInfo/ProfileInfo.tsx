import React, {ChangeEvent, useState} from 'react';
import s from "./Profilenfo.module.css";
import {ProfileItemPropsType} from "redux/reducers/profile-reducer";
import {Preloader} from "components/Common/Preloader/Preloader";
import defaultImage from 'assets/images/usersPage/defaultUser.jpeg'
import {Contacts} from "components/Profile/ProfileInfo/ProfileContacts/Contacts";
import {EditContacts} from "components/Profile/ProfileInfo/ProfileContacts/EditContacts";

type ProfileInfoPropsType = {
  profile: ProfileItemPropsType | null
  isOwner: boolean
  saveFile: (file: File) => void
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
  const [editMode, setEditMode] = useState(false)

  if (!props.profile) {
    return <Preloader/>
  }
  const onAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length) {
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
        {editMode ? <EditContacts setEditMode={setEditMode} contacts={props.profile.contacts}/> : <Contacts contacts={props.profile.contacts} isOwner={props.isOwner} setEditMode={setEditMode}/>}
      </div>
    </div>
  );
};

