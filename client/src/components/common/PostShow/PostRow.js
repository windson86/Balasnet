import React from "react";
import { findDayDifference } from "../../../utils/OrderAndCalculations";

const PostRow = (props) => {
  const { PostText, date, username, likes, _id } = props.post;
  const { like, disableButton, deletePost } = props;

  return (
    <tr>
      <th>#{props.index + 1}</th>
      <td>{PostText}</td>

      <td>prije {findDayDifference(Date.parse(date), Date.now())}</td>
      <td>{username}</td>
      <td>{likes.length}</td>
      {disableButton && (
        <td>
          {" "}
          <button onClick={() => deletePost(_id)}>x</button>
        </td>
      )}
      {!disableButton && (
        <td>
          {" "}
          <button onClick={() => like(_id)}>+</button>
        </td>
      )}
    </tr>
  );
};

export default PostRow;
