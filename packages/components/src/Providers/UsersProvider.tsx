import { useGetUsersQuery } from "@ahmic/commons";
import { FC } from "react";

export const UsersProvider: FC = () => {
  useGetUsersQuery();

  return null;
};
