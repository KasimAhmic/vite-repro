import { useState } from "react";

export const useAnotherDummyHook = () => {
  const [state, setState] = useState(0);

  // Changes here will trigger a hot reload successfully
  console.log("test");

  return state;
};
