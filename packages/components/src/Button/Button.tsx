import React, { FC } from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <MuiButton {...props}>{children}</MuiButton>
);
