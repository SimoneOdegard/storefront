// setup of initial state
let initialState = {
  cartItems: [],
  cartTotal: 0
}

// =========== REDUCER =========== //
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      return payload.disabled ? state : { ...state, cartTotal: state.cartTotal + 1 };

    case 'ADD':
      let newState = {
        cartItems: [...state.cartItems, payload],
        cartTotal: state.cartTotal + 1
      }
      return newState;

    case 'REMOVE':
      const cartItems = [...state.cartItems]
      let deleteItem = true;
      const updatedCart = cartItems.filter((item) => {
        if (item === payload && deleteItem) {
          deleteItem = false;
          return false;
        } else {
          return true;
        }
      })
      return {...state, cartItems: [...updatedCart]};

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

export const remove = (product) => {
  return {
    type: 'REMOVE',
    payload: product
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}