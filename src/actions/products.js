export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_BASKET = "RECEIVE_BASKET";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export function receiveProducts(products) {
  return {
    type: RECEIVE_PRODUCTS,
    products
  };
}

export function addToBasket(product) {
  return {
    type: ADD_PRODUCT,
    product
  };
}

export function removeFromBasket(id) {
  return {
    type: REMOVE_PRODUCT,
    id
  };
}
