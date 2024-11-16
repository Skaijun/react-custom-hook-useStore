import { initStore } from "./store.js";
import products from "../products.js";

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (currentState, pid) => {
      const prodIndex = currentState.products.findIndex((p) => p.id === pid);
      const newFavStatus = !currentState.products[prodIndex].isFavorite;
      const updProducts = [...currentState.products];
      updProducts[prodIndex] = {
        ...currentState.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return { products: updProducts };
    },
  };

  initStore(actions, { products });
};

export default configureStore;
