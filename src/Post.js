import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="materialUI"
          src="https://material-ui.com/static/logo_raw.svg"
        />
        <h3 className="post__">Username</h3>
      </div>

      <img
        className="post__image"
        src="https://material-ui.com/static/logo_raw.svg"
      />

      <h4 className="post__text">
        <strong>kevinrangels</strong> i love code
      </h4>
    </div>
  );
}

export default Post;
