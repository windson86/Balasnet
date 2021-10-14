import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Auth from "../utils/auth";
import {
  submitPostAction,
  fetchUserPostsAction,
} from "../actions/posts-actions";
import PostShow from "./common/PostShow/PostShow";
import Input from "./common/Input";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      postText: "",
      username: "",
    };
    this.onChange = this.onChange.bind(this);
    this.submitStih = this.submitStih.bind(this);
  }

  componentDidMount() {
    if (Auth.isUserAuthenticated()) {
      this.setState({
        loggedIn: true,
        username: Auth.getUsername(),
      });
      this.props.fetchUserPosts();
    }
  }

  componentDidUpdate(nextProps) {
    if (nextProps.loginSuccess !== this.props.loginSuccess) {
      this.props.fetchUserPosts();
      this.setState({ loggedIn: true });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitStih() {
    this.props.submitPost(this.state.postText);
    this.setState({ postText: "" });
  }
  deletePost(id) {
    console.log(id);
    // this.props.deletePost(id);
  }

  render() {
    const { username, loggedIn } = this.state;

    const posts = this.props.userPosts.filter((x) => x.username === username);
    return (
      <div>
        {loggedIn && (
          <div>
            <br />
            <Input
              type="text"
              name="postText"
              label="Post"
              placeholder="enter post"
              value={this.state.postText}
              onChange={this.onChange}
              valid={true}
            />
            <button onClick={this.submitStih}>Pošalji stih/ove</button>
            <br />
            moji zadnji stihovi:
            <PostShow
              disableButton={true}
              posts={posts}
              home={true}
              deletePost={this.deletePost}
            />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginSuccess: state.login.success,
    userPosts: state.userPosts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitPost: (data) => dispatch(submitPostAction(data)),
    fetchUserPosts: () => dispatch(fetchUserPostsAction()),
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
