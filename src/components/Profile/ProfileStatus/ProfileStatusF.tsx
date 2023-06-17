import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusFType = {
  status: string
  updateStatusTC: (status: string) => void
}
export const ProfileStatusF = (props: ProfileStatusFType) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)
  const activateEditMode = () => {
    setIsEditMode(true)
  }
  const disableActiveMode = () => {

    props.updateStatusTC(status)
    setIsEditMode(false)

  }
  const changeStatusValue = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])
  return (
    <div>
      {
        !isEditMode &&
          <div>
              <span onDoubleClick={activateEditMode.bind(this)}>{props.status}</span>
          </div>
      }
      {
        isEditMode &&
          <div>
              <input type="text" autoFocus onChange={changeStatusValue.bind(this)} value={status}
                     onBlur={disableActiveMode}/>
          </div>
      }
    </div>
  );

};

