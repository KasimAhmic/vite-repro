import { EntityState } from "@reduxjs/toolkit";
import { dummyApiEndpoints, Post } from "../apis/dummy.api";

const defaultResult: EntityState<Post> = { ids: [], entities: {} };

export const usePostsSelector = <T extends SelectFromResult>(selector: T): ReturnType<T> => {
  const selectFromResult = ({ data }: Result) => selector(data ?? defaultResult);

  return dummyApiEndpoints.getPosts.useQueryState(undefined, {
    selectFromResult,
  });
};

type SelectFromResult = (posts: EntityState<Post>) => any;
type Result = { data?: EntityState<Post> };
