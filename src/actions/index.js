import types from './types';
import React from 'react';

export function updateTime(){
    return{
        type: types.update_time,
        payload: new Date().toLocaleTimeString()
    }
}