import React from "react";
import PostRow from "./PostRow";
import { sortByLikes } from "../../../utils/OrderAndCalculations";

const PostShow = (props) => {
  const { posts, like, disableButton, home, deletePost } = props;
  let data = sortByLikes(posts).map((p, i) => (
    <PostRow
      key={i}
      post={p}
      index={i}
      disableButton={disableButton}
      like={like}
      home={home}
      deletePost={deletePost}
    />
  ));

  return (
    <div className="scroll">
      <div className="box">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th></th>
                <th>stih</th>
                <th>vrijeme</th>
                <th>user</th>
                <th>glasova</th>
                {home && <th>obriši</th>}
                {!home && <th>glasaj</th>}
              </tr>
            </thead>
            <tbody>{data}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PostShow;
