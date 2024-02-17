import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    console.log(`Render Phase: Parent Constructor`);
  }

  componentDidMount() {
    console.log(`Commit Phase: Parent Component Did Mount`);
  }

  componentDidUpdate() {
    console.log(`Updating :: Commit Phase: Parent Component Did Update`);
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
    console.log(`Render Phase: Parent Render`);
    return (
      <>
        <div>About Us Page</div>
        <div>Counter: {counter}</div>
        <button
          onClick={() => {
            this.setState({ counter: counter + 1 });
          }}
        >
          Update Counter
        </button>
        {/* <User
            {...userData}
            componentType="Functional"
          /> */}
        <UserClass
          {...userData}
          componentType="First"
        />
        <UserClass
          {...userData}
          componentType="Second"
        />
        <UserClass
          {...userData}
          componentType="Third"
        />
      </>
    );
  }
}

// const About = () => {
//   const userData = {
//     name: "Ahad Havery",
//     location: "Mumbai",
//   };
//   return (
//     <>
//       <div>About Us Page</div>
//       {/* <User
//         {...userData}
//         componentType="Functional"
//       /> */}
//       <UserClass
//         {...userData}
//         componentType="Class"
//       />
//     </>
//   );
// };

export default About;
