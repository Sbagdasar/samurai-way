import React from 'react';
import './index.css';
import {renderEntireTree} from "./render";
import state, {RootStateType} from "./redux/state";



renderEntireTree(state)