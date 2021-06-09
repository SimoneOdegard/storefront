// setup of initial state
let initialState = {
  cartTotal: 0
}

// =========== REDUCER =========== //
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'INCREMENT':
      return payload.disabled ? state : { ...state, cartTotal: state.cartTotal + 1 }

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

// =========== ACTION =========== //
export const increment = (product) => {
  return {
    type: 'INCREMENT',
    payload: product
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}