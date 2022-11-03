import { ADD_USER, RESTART_USER } from "../actions/user.actions";
import { IUser, IUserAction } from "../types";

const user = {
  name: '',
  email:'',
  placa: ''
}
const dataLocal = window.localStorage.getItem('user')
const initialState: IUser = dataLocal ? JSON.parse(dataLocal) : user

const User = (state=initialState, action:IUserAction) => {
  const {type, payload} = action
  
  switch (type) {
    case ADD_USER:
      return { ...state, ...payload }
    
    case RESTART_USER:
      return user

    default:
      return state
  }
}

export default User