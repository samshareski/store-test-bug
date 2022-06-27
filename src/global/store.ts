import { createStore } from "@stencil/store";

const { state, onChange, dispose } = createStore({
  clicks: 0
});

export { state, onChange, dispose };