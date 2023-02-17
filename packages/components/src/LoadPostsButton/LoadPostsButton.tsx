import React, { FC } from "react";
import { Button } from "../Button";

export const LoadPostsButton: FC = () => {
  const handleClick = () => {
    console.log("LoadPostsButton clicked");
  };

  return <Button onClick={handleClick}>Dummy Posts Button</Button>;
};
