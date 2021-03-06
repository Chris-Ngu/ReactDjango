import { GET_LEADS } from '../actions/types.js';

const initalState = {
    leads: []
};

export default function(state = initalState, action) {
    switch(action.type){
        case GET_LEADS:
            return {
                ...state,
                leads: action.payload
            }
        default:
            return state;
    }
}