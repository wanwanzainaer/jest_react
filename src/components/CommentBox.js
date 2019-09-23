import React, { useState } from "react";
import { connect } from "react-redux";
import { saveComment, fetchComments } from "../actions/index";
const CommentBox = props => {
  const [state, setState] = useState({ comment: "" });

  const handleChange = e => {
    setState({ comment: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    //call action and save the comment
    props.saveComment(state.comment);
    setState({ comment: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a comment</h4>
        <textarea value={state.comment} onChange={handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button
        className="fetch-comments"
        onClick={props.fetchComments}
      >
        Fetch Comments
      </button>
    </div>
  );
};

export default connect(
  null,
  { saveComment, fetchComments }
)(CommentBox);
