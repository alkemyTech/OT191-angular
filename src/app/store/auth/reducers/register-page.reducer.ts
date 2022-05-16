import { Action } from '@ngrx/store';

import { AuthActions, AuthActionTypes } from '../actions/auth.actions';


export interface State {
  pending: boolean;
  error: string | null;
}

export const initialState: State = {
  pending: false,
  error: null
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.Register: {
      return { ...state, pending: true };
    }

    case AuthActionTypes.RegisterSuccess: {
      return initialState;
    }

    case AuthActionTypes.RegisterFailure: {
      return { ...state, error: action.payload, pending: false };
    }

    default: {
      return state;
    }
  }
}

export const selectPending = (state: State) => state.pending;
export const selectError = (state: State) => state.error;