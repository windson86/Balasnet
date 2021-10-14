import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Auth from "../utils/auth";
import {
  fetchAllPostsAction,
  likePostAction,
  unLikePostAction,
} from "../actions/posts-actions";
import PostShow from "./common/PostShow/PostShow";

class Predvorje extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      siteLevel: 3,
      username: "",
    };
  }

  componentDidMount() {
    if (Auth.isUserAuthenticated()) {
      this.setState({
        loggedIn: true,
        username: Auth.getUsername(),
      });
      this.props.fetchAllPosts();
    }
  }

  componentDidUpdate(nextProps) {
    if (nextProps.loginSuccess !== this.props.loginSuccess) {
      this.props.fetchAllPosts();
      this.setState({ loggedIn: true });
    }
  }

  likePost = (id) => {
    if (
      this.props.allPosts
        .find((x) => x._id === id)
        .likes.includes(this.state.username)
    ) {
      this.props.unlikePost(id);
    } else {
      this.props.likePost(id);
    }
  };

  render() {
    const posts = this.props.allPosts;
    return (
      <div className="postovi">
        <br />

        <PostShow like={this.likePost} posts={posts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginSuccess: state.login.success,
    allPosts: state.userPosts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    likePost: (id) => dispatch(likePostAction(id)),
    unlikePost: (id) => dispatch(unLikePostAction(id)),
    fetchAllPosts: () => dispatch(fetchAllPostsAction()),
  };
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Predvorje)
);
