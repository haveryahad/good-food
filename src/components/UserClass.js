import React from "react";
import UserGrandChild from "./UserGrandChild";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 20,
      userId: 0,
      //title: "",
    };
    console.log(`Render Phase: ${this.props.componentType} Child Constructor`);
  }

  async componentDidMount() {
    console.log(
      `Commit Phase: ${this.props.componentType} Child Component Did Mount`
    );
    const userData = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const userJson = await userData.json();
    console.log(userJson);
    this.setState({
      userId: userJson.userId,
      title: userJson.title,
    });
  }

  componentDidUpdate() {
    console.log(
      `Updating :: Commit Phase: ${this.props.componentType} Child Component Did Update`
    );
  }

  render() {
    const { count, count2, userId, title, id } = this.state;
    const { name, location, componentType } = this.props;

    console.log(`Render Phase: ${this.props.componentType} Child Render`);
    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <h2>Count2: {count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 - 1,
            });
          }}
        >
          Counter Increment/Decrement
        </button>
        <h2>User Id: {userId}</h2>
        <h3>Title: {title}</h3>
        <h>Id: {id}</h>
        <h4>Name: {name}</h4>
        <h4>Location: {location}</h4>
        <h4>Designation: Software Engineer II</h4>
        <h6>This is a {this.props.componentType} component</h6>
        <UserGrandChild
          componentType={`${this.props.componentType} Child's Grand Child`}
        />
      </div>
    );
  }
}

export default UserClass;
