import { postsSelectors, usePostsSelector, usersSelectors, useUsersSelector } from "@ahmic/commons";
import { Paper, Typography } from "@ahmic/components";
import { EntityId } from "@reduxjs/toolkit";
import React, { FC } from "react";

interface PostProps {
  id: EntityId;
}

export const Post: FC<PostProps> = ({ id }) => {
  const title = usePostsSelector((posts) => postsSelectors.selectById(posts, id)?.title);
  const body = usePostsSelector((posts) => postsSelectors.selectById(posts, id)?.body);
  const userId = usePostsSelector((posts) => postsSelectors.selectById(posts, id)?.userId ?? 0);

  const userName = useUsersSelector((users) => usersSelectors.selectById(users, userId)?.name);

  return (
    <Paper elevation={2}>
      <Typography>
        {userName}: {title}
      </Typography>
      <br />
      {body}
    </Paper>
  );
};
