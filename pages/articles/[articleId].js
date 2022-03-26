import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";

import { getArticlePost, articleActions } from "../../store/slice/articleSlice";

const ArticleDetail = () => {
  const dispatch = useDispatch();
  // const { article } = useSelector((state) => state.article);
  const articlePost = useSelector((state) => state.article);
  const { image, title, description, date_created, path } = articlePost;
  const [data, setData] = useState({});
  const [article, setArticle] = useState("");
  const { query } = useRouter();

  const { articleId } = query;

  useEffect(() => {
    if (articleId !== undefined) {
      const pagePath = () => {
        const filteredPath = articleId.replaceAll("-", " ");
        setArticle(filteredPath);
      };
      pagePath();
    }
  }, [articleId]);
  useEffect(() => {
    if (article !== "") {
      dispatch(getArticlePost(article));
    }
  }, [article]);

  useEffect(() => {
    return () => {
      dispatch(articleActions.clearState());
    };
  }, []);

  return (
    <Box className="article-post">
      <Box className="article-post__title">
        <Typography component="h1" variant="h3">
          {title}
        </Typography>
        <Typography className="date-posted">Posted {date_created}</Typography>
        <Typography className="date-posted">{description}</Typography>
      </Box>
      <Box className="article-post__banner">
        <Box component="img" src={image} />
      </Box>
      <Box className="article-post__content">
        <Typography>
          As a user with firsthand experience of sending an SMS, sending a text
          message may seem instant and easy.
        </Typography>
        <Typography>
          However, the reality is that it is an entirely technical and intricate
          process, especially if the message comes from another country.
        </Typography>
        <Typography>
          Another example is a brand from Country A that wants to send a message
          to Country B. Country B has its own set of SMS rules and regulations.
          Sending a message to Country B may require hefty fees. The brand chose
          to go through grey routes, using the channels with lesser restrictions
          in the neighboring countries of country B. In the same way, the
          message was delivered to Country B with little cost.
        </Typography>
      </Box>
    </Box>
  );
};
export default ArticleDetail;
