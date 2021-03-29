const initialState = {
  products: [],
  address: [],
  discount: 0,
  delivery: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  let products = [...state.products];

  switch (action.type) {
    case 'ADD_PRODUCT':
      let id = action.payload.data.id;
      let index = products.findIndex((item) => item.id === id);

      if (index > -1) {
        products[index].count += action.payload.count;
      } else {
        products.push({
          ...action.payload.data,
          count: action.payload.count,
        });
      }

      return { ...state, products };

    default:
      return state;

      // eslint-disable-next-line no-unreachable
      break;

    case 'CHANGE_PRODUCT':
      if (products[action.payload.key]) {
        // eslint-disable-next-line default-case
        switch (action.payload.type) {
          case '-':
            products[action.payload.key].count--;

            if (products[action.payload.key].count <= 0) {
              products = products.filter((_intem, index) => index !== action.payload.key);
            }
            break;

          case '+':
            products[action.payload.key].count++;
        }
      }

      return { ...state, products };
  }
};
