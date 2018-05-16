import types from '../actions/types';
import React from 'react';

const DEFAULT_STATE = {
    time: new Date().toLocaleTimeString()
};

export default (state= DEFAULT_STATE, action)=>{
    switch(action.type){
        case types.update_time:
            return{
                time: new Date().toLocaleTimeString()
            }
        default:
            return state;
    }
}