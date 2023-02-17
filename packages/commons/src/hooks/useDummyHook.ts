import { useState } from "react";

export const useDummyHook = () => {
  const [state, setState] = useState(0);

  // Changes here will result in a full page reload

  return state;
};
