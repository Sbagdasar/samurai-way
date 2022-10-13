
let initialState = {
    friends: [
        {id: 1, name: 'Vadim', img: '/img/vadim.jpg'},
        {id: 2, name: 'Eric', img: '/img/eric.jpg'}
    ]
}
export type  InitialStateType = typeof initialState


const sidebarReducer=(state:InitialStateType=initialState, action:any):InitialStateType=>{
    switch (action.type) {

        default:
            return state
    }
}
export default sidebarReducer