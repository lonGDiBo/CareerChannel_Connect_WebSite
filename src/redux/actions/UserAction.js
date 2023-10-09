import { UserServices } from '../../services/user/index';

export const UserActionLogin = (username, password) => {
  return async (dispatch) => {
    try {
      const { response } = await UserServices().login(username, password);
      const {token}= response
      dispatch({ type: 'LOGIN', payload: token });
    } catch (error) {
        console.log(error)
    }
  };
};
export const UserActionGetToken = () => {
  return async (dispatch) => {
    dispatch({type:"GET_TOKEN"});
  };
};
  