export type  InitialStateType = {
    id:number|null
    email:string|null
    login:string|null
}
let initialState:InitialStateType={
    id:null,
    email:null,
    login:null
}
type SetUserDataACType = {
    type:"SET-USER-DATA",
    data: {
        id:number,
        email:string
        login:string
    }
}
type ActionsType = SetUserDataACType

export const authReducer = (state:InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":{
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state
    }
}
export const setUserData=(id:number, login:string, email:string)=>({
    type:"SET-USER-DATA",
    data:{id,email,login}
})