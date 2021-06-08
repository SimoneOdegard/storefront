// setup of initial state
let initialState = {
  products: [
    {
      category: 'Electronics',
      name: 'TV',
      description: 'You can watch stuff on here',
      price: '$500',
      inventoryCount: '50',
      image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80'
    },
    {
      category: 'Electronics',
      name: 'cell phone',
      description: 'You can call people on here',
      price: '$1000',
      inventoryCount: '100',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
      category: 'Electronics',
      name: 'laptop',
      description: 'You can type on here',
      price: '$1500',
      inventoryCount: '33',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
    },
    {
      category: 'Electronics',
      name: 'camera',
      description: 'You can take pictures on here',
      price: '$1500',
      inventoryCount: '19',
      image: 'https://images.unsplash.com/photo-1500634245200-e5245c7574ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
      category: 'Food',
      name: 'pizza',
      description: 'You can eat these pepperonis',
      price: '$15',
      inventoryCount: '8',
      image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
    },
    {
      category: 'Food',
      name: 'BLT',
      description: 'You can eat these bacons',
      price: '$10',
      inventoryCount: '10',
      image: 'https://images.unsplash.com/photo-1591224227048-731eaf217394?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
      category: 'Food',
      name: 'pasta',
      description: 'You can eat these noods',
      price: '$18',
      inventoryCount: '17',
      image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
      category: 'Food',
      name: 'chips',
      description: 'You can crunch these chips',
      price: '$5',
      inventoryCount: '24',
      image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
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