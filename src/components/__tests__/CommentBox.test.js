import React from "react";
// Full DOM
import { mount } from "enzyme";

import CommentBox from "../CommentBox";
import { wrap } from "module";
let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("When text area have something input", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });
    wrapped.update();
  });

  it("has a text area that users can type in", () => {
    // event trigger

    // update for component make sure the component update
    //check  the elem  prpos
    expect(wrapped.find("textarea").prop("value")).toEqual(
      "new comment"
    );
  });

  it("when form is submited, then  text area will be empty", () => {
    wrapped.find("form").simulate("submit", {});

    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});

//   it("has a text area that users can type in", () => {
//     // event trigger
//     wrapped.find("textarea").simulate("change", {
//       target: { value: "new comment" }
//     });
//     // update for component make sure the component update
//     wrapped.update();
//     //check  the elem  prpos
//     expect(wrapped.find("textarea").prop("value")).toEqual(
//       "new comment"
//     );
//   });

// it("when form is submited, then  text area will be empty", () => {
//   wrapped.find("textarea").simulate("change", {
//     target: { value: "new comment" }
//   });
//   wrapped.update();

//   wrapped.find("form").simulate("submit", {});

//   wrapped.update();

//   expect(wrapped.find("textarea").prop("value")).toEqual("");
// });
