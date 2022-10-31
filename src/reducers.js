
function reducer(state, action) {

  const type = action.type;
  let newState

  switch (type) {

    case 'ADD_TO_HISTORY':
      newState = {...state, 
        history: [
          ...state.history, 
          action.restOp
        ]
      };
      break;

    default:
      newState = state;
  }

  return newState;
}

export {reducer};