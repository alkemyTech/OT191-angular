
import { AuthActions, AuthActionTypes } from '../actions/auth.actions';


export interface State {
  logged: boolean;
}

export const initialState: State = {
  logged: false,
};

export function authReducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      return { ...state, logged: action.payload.logged };

    case AuthActionTypes.RegisterSuccess:
      return { ...state, logged: action.payload.logged };
      
    case AuthActionTypes.LogoutConfirmed:
      return initialState;

    case AuthActionTypes.StateLogin:
      return  state ;

    default:
      return state;
  }
}


export const selectLogged = (state: State) => state.logged;
