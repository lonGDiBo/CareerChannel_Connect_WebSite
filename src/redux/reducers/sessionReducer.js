import { storage } from "../../services/storage";

const initState = {
  token: null,
};
export const sessionReducer = (state = initState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case 'LOGIN':
        console.log("payload",payload);
        return{
            ...state,
            token:storage.setCache('token',payload)
        }
    case 'LOGOUT':
        return{
            ...state,
            token:storage.removeCache('token')
        }
        
    case 'GET_TOKEN':
      return {
        ...state,
        token:storage.getCache('token')
      }
        
    default: 
         return state
        
  }
};
