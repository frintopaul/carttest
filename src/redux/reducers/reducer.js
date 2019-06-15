import React, { Component } from 'react';


function reducer(state = 0, action) {
  ;
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'showModal':
      return action.val  
    default:
      return state
  }
}


export default reducer;

