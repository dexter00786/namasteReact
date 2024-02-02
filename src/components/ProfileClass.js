import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        name: "Dummy Name",
        location: "Dummy location",
      },
    };
    console.log("constructor!!!" + this.props.child);
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("React OP!!!");
    }, 1000);
    console.log("componentDidMount" + this.props.child);
  }

  componentDidUpdate() {
    console.log("child - componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }
  render() {
    console.log("render" + this.props.child);
    return (
      <div>
        <h1>This is my profile class component</h1>
        <img src={this.state.userinfo.avatar_url} />
        <h1>Name : {this.state.userinfo.name}</h1>
        <h2>location : {this.state.userinfo.location}</h2>
      </div>
    );
  }
}

export default Profile;
