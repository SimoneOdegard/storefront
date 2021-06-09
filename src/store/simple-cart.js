// setup of initial state
let initialState = {
  cartItems: [],
  cartTotal: 0
}

// =========== REDUCER =========== //
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'INCREMENT':
      return payload.disabled ? state : { ...state, cartTotal: state.cartTotal + 1 };

    case 'ADD':
      let newState = {
        cartItems: [...state.cartItems, payload],
        cartTotal: state.cartTotal + 1
      }
      return newState;

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

export const add = (product) => {
  return {
    type: 'ADD',
    payload: product
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}