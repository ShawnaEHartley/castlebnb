import { closeModalHandler } from './modal';
import { STATIC_USERS } from './staticData';

const SET_CURRENT_USER    = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';

const setCurrentUser    = user => ({ type: SET_CURRENT_USER, payload: user });
const removeCurrentUser = ()   => ({ type: REMOVE_CURRENT_USER });

const safeUser = ({ password: _, ...u }) => u;

const fakeError = (msg) => {
  const err = { errors: [msg] };
  return { clone: () => ({ json: async () => err }), json: async () => err };
};

export const login = ({ email, password }) => async (dispatch) => {
  const found = STATIC_USERS.find(u => u.email === email && u.password === password);
  if (!found) throw fakeError('Invalid email or password.');
  const user = safeUser(found);
  sessionStorage.setItem('currentUser', JSON.stringify(user));
  dispatch(setCurrentUser(user));
  dispatch(closeModalHandler());
};

export const restoreSession = () => async (dispatch) => {
  const stored = sessionStorage.getItem('currentUser');
  const user = stored ? JSON.parse(stored) : null;
  dispatch(setCurrentUser(user));
};

let _nextUserId = STATIC_USERS.length + 1;

export const signup = ({ full_name, email, password }) => async (dispatch) => {
  if (STATIC_USERS.find(u => u.email === email)) throw fakeError('Email already taken.');
  const user = { id: _nextUserId++, full_name, email };
  STATIC_USERS.push({ ...user, password });
  sessionStorage.setItem('currentUser', JSON.stringify(user));
  dispatch(setCurrentUser(user));
  dispatch(closeModalHandler());
};

export const logout = () => async (dispatch) => {
  sessionStorage.removeItem('currentUser');
  dispatch(removeCurrentUser());
};

const initialState = {
  user: JSON.parse(sessionStorage.getItem('currentUser')),
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:    return { ...state, user: action.payload };
    case REMOVE_CURRENT_USER: return { ...state, user: null };
    default: return state;
  }
};

export default sessionReducer;
