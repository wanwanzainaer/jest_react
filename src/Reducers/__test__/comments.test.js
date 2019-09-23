import commentsReducer from "../comments";
import { SAVE_COMMENT } from "../../actions/type";

it("handles actions of the type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment"
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual(["New Comment"]);
});

it("hanles actions with unknow type", () => {
  const newState = commentsReducer([], {});
  expect(newState).toEqual([]);
});
