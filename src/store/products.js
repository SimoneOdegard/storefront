// setup of initial state
let initialState = {
  products: [
    {
      category: 'Electronics',
      name: 'TV',
      description: 'You can watch stuff on here',
      price: '$500',
      inventoryCount: '50'
    },
    {
      category: 'Electronics',
      name: 'cell phone',
      description: 'You can call people on here',
      price: '$1000',
      inventoryCount: '100'
    },
    {
      category: 'Electronics',
      name: 'laptop',
      description: 'You can type on here',
      price: '$1500',
      inventoryCount: '33'
    },
    {
      category: 'Electronics',
      name: 'camera',
      description: 'You can take pictures on here',
      price: '$1500',
      inventoryCount: '19'
    },
    {
      category: 'Food',
      name: 'pizza',
      description: 'You can eat these pepperonis',
      price: '$15',
      inventoryCount: '8'
    },
    {
      category: 'Food',
      name: 'BLT',
      description: 'You can eat these bacons',
      price: '$10',
      inventoryCount: '10'
    },
    {
      category: 'Food',
      name: 'pasta',
      description: 'You can eat these noods',
      price: '$18',
      inventoryCount: '17'
    },
    {
      category: 'Food',
      name: 'chips',
      description: 'You can crunch these chips',
      price: '$5',
      inventoryCount: '24'
    },
  ],
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