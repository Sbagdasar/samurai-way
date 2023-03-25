import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType ={
  status: string
  updateStatusTC:(status:string)=>void

}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state = {
    isEditMode:false,
    status: this.props.status
  }
  activateEditMode(){
    this.setState({
      isEditMode:true
    })
  }
  disableActiveMode=()=>{

    this.props.updateStatusTC(this.state.status)
    this.setState({
      isEditMode:false
    })
  }
  changeStatusValue(e: ChangeEvent<HTMLInputElement>){
    this.setState({
      status: e.currentTarget.value
    })
  }
  componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
    if(prevProps.status !== this.props.status){
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div>
        {
          !this.state.isEditMode &&
            <div>
                <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
            </div>
        }
        {
          this.state.isEditMode &&
            <div>
                <input type="text" autoFocus onChange={this.changeStatusValue.bind(this)} value={this.state.status} onBlur={this.disableActiveMode}/>
            </div>
        }

      </div>
    );
  }
}

