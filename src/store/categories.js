// setup of initial state
let initialState = {
  categories: [
    {
      name: 'Electronics',
      displayName: 'Electronics',
      description: 'Electric electronics for you'
    },
    {
      name: 'Food',
      displayName: 'Food',
      description: 'Foody foods for you'
    },
  ],
  activeCategory: ''
}

// =========== REDUCER =========== //
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'ACTIVE CATEGORY':
      let activeCategory = payload;
      return { ...state, activeCategory };

    case 'RESET':
      return initialState;

    // this always lives at the bottom of your reducer.
    default:
      return state;
  }
}


// =========== ACTION =========== //
export const activeCat = (name) => {
  return {
    type: 'ACTIVE CATEGORY',
    payload: name
  }
}

// doesn't need a payload
export const reset = () => {
  return {
    type: 'RESET'
  }
}