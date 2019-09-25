import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from "./type";
import axios from "axios";
export const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};

export const fetchComments = () => {
  const res = axios.get(
    "http://jsonplaceholder.typicode.com/comments"
  );

  return {
    type: FETCH_COMMENTS,
    payload: res
  };
};

export const changeAuth = isLoggedIn => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
};
