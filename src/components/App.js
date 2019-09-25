import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeAuth } from "../actions/index";

import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

const renderButton = ({ auth, changeAuth }) => {
  if (auth) {
    return (
      <button onClick={() => changeAuth(false)}>Sign Out</button>
    );
  }
  return <button onClick={() => changeAuth(true)}>Sign In</button>;
};

const renderHeader = props => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">Post A Comment</Link>
      </li>
      <li>{renderButton(props)}</li>
    </ul>
  );
};

const App = props => {
  return (
    <div>
      {renderHeader(props)}
      <Route path="/post" component={CommentBox} />
      <Route exact path="/" component={CommentList} />
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  { changeAuth }
)(App);
