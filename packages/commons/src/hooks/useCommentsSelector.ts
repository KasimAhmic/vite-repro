import { EntityState } from "@reduxjs/toolkit";
import { dummyApiEndpoints, Comment } from "../apis/dummy.api";

const defaultResult: EntityState<Comment> = { ids: [], entities: {} };

export const useCommentsSelector = <T extends SelectFromResult>(
  postId: number,
  selector: T
): ReturnType<T> => {
  const selectFromResult = ({ data }: Result) => selector(data ?? defaultResult);

  return dummyApiEndpoints.getComments.useQueryState(postId, {
    selectFromResult,
  });
};

type SelectFromResult = (posts: EntityState<Comment>) => any;
type Result = { data?: EntityState<Comment> };
