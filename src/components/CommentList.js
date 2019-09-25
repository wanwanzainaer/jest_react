import React from "react";
import { connect } from "react-redux";
const CommentList = props => {
  const renderComment = () => {
    if (!props.comments) return null;
    return props.comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  };
  return (
    <div>
      <h4>CommentList</h4>
      <ul>{renderComment()}</ul>
    </div>
  );
};
const mapStateToProps = ({ comments }) => {
  return { comments };
};
export default connect(mapStateToProps)(CommentList);
