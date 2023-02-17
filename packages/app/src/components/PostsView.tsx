import { postsSelectors, usePostsSelector } from "@ahmic/commons";
import { makeStyles } from "@ahmic/components";
import { FC } from "react";
import { Post } from "./Post";

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    gap: theme.spacing(1),
    flexDirection: "column",
    padding: theme.spacing(1),
  },
}));

export const PostsView: FC = () => {
  const { classes } = useStyles();
  const ids = usePostsSelector((posts) => postsSelectors.selectIds(posts));

  return (
    <div className={classes.root}>
      {ids.map((id) => (
        <Post id={id} key={id} />
      ))}
    </div>
  );
};
