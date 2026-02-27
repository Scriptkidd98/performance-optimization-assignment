/**
 * This is the second person in the chain of command. He accepts the payload, and action. Action is what he's supposed to do with the payload. The reducer is a pure function that takes the current state and an action as arguments, and returns a new state. The reducer is responsible for updating the state based on the action that is dispatched to the store. The reducer is a pure function, which means that it does not modify the state directly, but instead returns a new state object. The reducer is also a pure function, which means that it does not have any side effects, and it does not depend on any external variables. The reducer is also a pure function, which means that it does not modify the state directly, but instead returns a new state object.
 */

import * as actions from './actionTypes';

const reducer = (state= {}, action) => { //this is the second person in the chain of command. He accepts the payload, and action. Action is what he's supposed to do with the payload. The reducer is a pure function that takes the current state and an action as arguments, and returns a new state. The reducer is responsible for updating the state based on the action that is dispatched to the store. The reducer is a pure function, which means that it does not modify the state directly, but instead returns a new state object. The reducer is also a pure function, which means that it does not have any side effects, and it does not depend on any external variables. The reducer is also a pure function, which means that it does not modify the state directly, but instead returns a new state object.
    switch(action.type) { //what should I do with the data that I receive from the action? The action is what I'm supposed to do with the data that I receive from the action. The action is a string that describes the action that I'm supposed to do with the data that I receive from the action.
        case actions.STORE_USER_DATA: //action says store data in the store, so I will store the data in the store. The data that I receive from the action is the payload property of the action object. The payload property is the data that is being sent to the store. The payload property is the data that is being sent to the store.
            return {
                ...state, //this is what was previously in the store. I recreate a new store, so I have to put the previous data in the new store. The previous data is the state that I receive as an argument in the reducer function. The state is the current state of the store, and it is an object that contains all the data that is currently in the store.
                userData: action.payload //I'm storing the data you passed as payload in the store. The data that I receive from the action is the payload property of the action object. The payload property is the data that is being sent to the store.
            }
        case actions.UPDATE_USER_DATA: //action says update data in the store, so I will update the data in the store. The data that I receive from the action is the payload property of the action object. The payload property is the data that is being sent to the store. The payload property is the data that is being sent to the store.
            return {
                ...state,
                userData: action.payload //I'm updating the data you passed as payload in the store. The data that I receive from the action is the payload property of the action object. The payload property is the data that is being sent to the store.
            }
        default:
            return state; //if the action type is not recognized, I will return the current state of the store. The current state of the store is the state that I receive as an argument in the reducer function. The state is the current state of the store, and it is an object that contains all the data that is currently in the store.
    }
}

export default reducer;


/* {
    name: 'John Doe',
    email: 'john.doe@example.com',
    image: 'https://example.com/john-doe.jpg'
} */