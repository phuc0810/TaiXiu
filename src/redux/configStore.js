import { gameXucXacReducer } from "./gameXucXacReducer";
import { gioHangReducer } from "./GioHangReducer";

const { combineReducers, createStore } = require("redux");

const rootReducer = combineReducers({
  // noi chua tat ca cac state
  gioHangReducer: gioHangReducer,
  gameXucXacReducer: gameXucXacReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
