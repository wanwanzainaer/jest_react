import React, { useState } from "react";

const CommentBox = () => {
  const [state, setState] = useState({ comment: "" });

  const handleChange = e => {
    setState({ comment: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    //call action and save the comment

    setState({ comment: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a comment</h4>
      <textarea value={state.comment} onChange={handleChange} />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  );
};

export default CommentBox;
