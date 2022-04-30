
import { AuthActions, AuthActionTypes } from '../actions/auth.actions';


export interface AuthState {
  logged: boolean;
}

export const initialState: AuthState = {
  logged: false,
};

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      return { ...state, logged: action.payload.logged };

    case AuthActionTypes.RegisterSuccess:
      return { ...state, logged: action.payload.logged };
      
    case AuthActionTypes.LogoutConfirmed:
      return initialState;

    default:
      return state;
  }
}


export const selectLogged = (state: AuthState) => state.logged;
