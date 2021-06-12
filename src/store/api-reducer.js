let initialState = {
  results: [],
}

// =========== REDUCER =========== //
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GET':
      // spread state. set payload to key of products that we're bringing in products: payload
      return {...state, results: payload};

    case 'PUT':
      return payload;

    case 'POST':
      return payload;

    case 'DELETE':
      return payload;

    // this always lives at the bottom of your reducer.
    default:
      return state;
  }
}
