import { EntityState } from "@reduxjs/toolkit";
import { dummyApiEndpoints, User } from "../apis/dummy.api";

const defaultResult: EntityState<User> = { ids: [], entities: {} };

export const useUsersSelector = <T extends SelectFromResult>(selector: T): ReturnType<T> => {
  const selectFromResult = ({ data }: Result) => selector(data ?? defaultResult);

  return dummyApiEndpoints.getUsers.useQueryState(undefined, {
    selectFromResult,
  });
};

type SelectFromResult = (Users: EntityState<User>) => any;
type Result = { data?: EntityState<User> };
