import React from 'react'
import ReactDOM from "react-dom";
import {SamuraiJSApp} from "./App";

it('renders without errors', ()=>{
  const div = document.createElement('div');

  ReactDOM.render(React.createElement(SamuraiJSApp), div);
  ReactDOM.unmountComponentAtNode(div)

})