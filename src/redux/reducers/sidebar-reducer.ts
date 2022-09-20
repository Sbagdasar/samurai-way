import {ActionsType, SideBarType} from "../store";

let initialState = {
    friends: [
        {id: 1, name: 'Vadim', img: '/img/vadim.jpg'},
        {id: 2, name: 'Eric', img: '/img/eric.jpg'}
    ]
}
const sidebarReducer=(state:SideBarType=initialState, action:ActionsType)=>{
    switch (action.type) {

        default:
            return state
    }
}
export default sidebarReducer