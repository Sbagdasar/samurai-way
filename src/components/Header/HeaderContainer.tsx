import React from "react";
import {RootTypeReduxState} from "../../redux/redux-store";
import {Header} from "./Header";
type HeaderContainerPropsType={

}
export class HeaderContainer extends React.Component<HeaderContainerPropsType, RootTypeReduxState>{
    constructor(props:HeaderContainerPropsType) {
        super(props);
    }
    render() {
        return <Header/>
    }
}