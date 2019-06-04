import { RECEIVE_PRODUCTS } from "../actions/products";
import { ADD_PRODUCT } from "../actions/products";
import { REMOVE_PRODUCT } from "../actions/products";

const initState = {
  products: [
    {
      id: 1,
      name: "Smart Hub",
      price: 49.99,
      image: require("../images/smart-hub.png"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 2,
      name: "Motion Sensor",
      price: 24.99,
      image: require("../images/motion-sensor.png"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 3,
      name: "Wireless Camera",
      price: 99.99,
      image: require("../images/wireless-camera.png"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 4,
      name: "Smoke Sensor",
      price: 19.99,
      image: require("../images/smoke-sensor.png"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 5,
      name: "Water Leak Sensor",
      price: 14.99,
      image: require("../images/water-leak-sensor.png"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ],
  basket: [],
  total: 0
};

function calcTotal(basket) {
  return parseFloat(
    basket
      .reduce((acc, next) => {
        if (next.name === "Motion Sensor" && next.quantity >= 3) {
          return (
            acc +
            Math.floor(next.quantity / 3) * 65 +
            (next.quantity % 3) * next.price
          );
        } else if (next.name === "Smoke Sensor" && next.quantity >= 2) {
          return (
            acc +
            Math.floor(next.quantity / 2) * 35 +
            (next.quantity % 2) * next.price
          );
        } else {
          return acc + next.price * next.quantity;
        }
      }, 0)
      .toFixed(2)
  );
}

export default function products(state = initState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      var { product, quantity } = action.product;
      var newBasket = state.basket
        .filter(val => val.id !== product.id)
        .concat({ ...product, quantity });
      var total = calcTotal(newBasket);
      return {
        ...state,
        basket: newBasket,
        total
      };
    case REMOVE_PRODUCT:
      var { id } = action;
      var newBasket = state.basket.filter(val => val.id !== id);
      var total = calcTotal(newBasket);
      return {
        ...state,
        basket: newBasket,
        total
      };
    default:
      return state;
  }
}
