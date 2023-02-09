import csrfFetch from "./csrf";


const receiveUser = (user) => {
  return ({
    type: 'users/RECEIVE_USER',
    user
  })
}

export const createUser = (user) => async(dispatch) => {
  const res = await csrfFetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(user)
  })

  if (res.ok) {
    const user = await res.json();
    dispatch(receiveUser(user))
  }
  return res;
};

export const signInUser = (user) => async(dispatch) => {
  const res = await csrfFetch('api/sessions', {
    method: 'POST',
    body: JSON.stringify(user)
  })

  if (res.ok) {
    const user = await res.json();
    dispatch(receiveUser(user))
  }
}