import { Link } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent - constructor");
  }
  componentDidMount() {
    console.log("parent - componentDidMount");
  }
  render() {
    console.log("parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p> This is about us page !!!!!</p>
        <Profile child={"first child"} />
      </div>
    );
  }
}
export default About;
