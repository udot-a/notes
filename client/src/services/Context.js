import {createContext} from "react";

function noop() {}

export const Context = createContext({
  dispatch: noop,
  state: null
})
