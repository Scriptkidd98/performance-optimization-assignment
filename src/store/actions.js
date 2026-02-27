/**
 * Thus file contains all the actions that can be dispatched to the store. Actions are plain JavaScript objects that have a type property and may have a payload property. The type property is a string that describes the action, and the payload property is the data that is being sent to the store. Actions are dispatched to the store using the dispatch function, which is provided by the useDispatch hook from react-redux.
*/

import * as action from './actionTypes';

export const storeUserData = (userData) => {
    return {
        type: action.STORE_USER_DATA, //storeUserData is the type of action that we want to dispatch to the store. It is a string that describes the action.
        payload: userData
    }
}

export const updateUserData = (userData) => {
    return {
        type: action.UPDATE_USER_DATA, //updateUserData is the type of action that we want to dispatch to the store. It is a string that describes the action.
        payload: userData
    }
}