import React, {ChangeEvent} from 'react';

type MapStateToPropsType ={
  status: string
}
export class ProfileStatus extends React.Component<MapStateToPropsType> {
  state = {
    isEditMode:false,
    value: this.props.status
  }
  activateEditMode(){
    this.setState({
      isEditMode:true
    })
  }
  disableActiveMode(){
    this.setState({
      isEditMode:false
    })
  }
  changeStatusValue(e: ChangeEvent<HTMLInputElement>){
    this.setState({
      value: e.currentTarget.value
    })
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
                <input type="text" autoFocus onChange={this.changeStatusValue.bind(this)} value={this.props.status} onBlur={this.disableActiveMode.bind(this)}/>
            </div>
        }

      </div>
    );
  }
}

