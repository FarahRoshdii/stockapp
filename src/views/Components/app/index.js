import { createActionsHook, createStateHook } from "overmind-react";
import { state } from "./state";
import * as actions from "./actions";
import * as effects from "./effects";

export const useAppState = createStateHook();
export const useActions = createActionsHook();

export const config = {
  state,
  actions,
  effects,
};
