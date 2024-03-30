import UserContext from "../utils/UserContext";
import User from "./User";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    // Render Phase: Parent Constructor
  }

  componentDidMount() {
    // Commit Phase: Parent Component Did Mount
  }

  componentDidUpdate() {
    // Updating :: Commit Phase: Parent Component Did Update
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const userData = {
      name: "Ahad Havery",
      location: "Mumbai",
    };

    const { counter } = this.state;
    // Render Phase: Parent Render
    return (
      <div className="w-4/12 m-auto border p-4">
        <div className="font-bold text-center">About Us Page</div>
        <User
          {...userData}
          componentType="Functional"
        />
      </div>
    );
  }
}

export default About;
