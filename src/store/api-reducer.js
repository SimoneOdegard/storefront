import superagent from 'superagent';

let initialState = {
  apiProducts: [],
}

// =========== REDUCER =========== //
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GET':
      return payload;

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
