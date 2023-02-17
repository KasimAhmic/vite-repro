import React, { FC } from "react";
import { Paper as MuiPaper, PaperProps } from "@mui/material";

export const Paper: FC<PaperProps> = ({ children, ...props }) => (
  <MuiPaper {...props}>{children}</MuiPaper>
);
