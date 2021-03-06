import React, {createContext, useContext, useReducer} from "react";
import { StateContext } from "./Chat/StateProvider";

export const StateProvider = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value = {useRecuder(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);