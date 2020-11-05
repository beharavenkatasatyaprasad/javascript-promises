callUserApiEndpoint(userId, data => {
  const authorId = data.authorId;

  callPostsEndpoint(authorId, data => {
    const postsByUser = data.posts;
    const topPost = postsByUser[0];

    callCommentsEndpoint(topPost.id, data => {
      const comments = data.comments;
      const topComment = comments[0];

      callResponsesEndpoint(topComment.id, data => {
        const responses = data.responses;
        //...
      });
    });
  });
});
