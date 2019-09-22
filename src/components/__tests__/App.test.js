import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it("Shows the Comment box", () => {
  // with out enzyme
  //   const div = document.createElement("div");
  //   ReactDOM.render(<App />, div);
  //   expect(div.innerHTML).toContain("comment box");
  //   ReactDOM.unmountComponentAtNode(div);
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("Shows the Comment List", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
