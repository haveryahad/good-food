import UserContext from "../utils/UserContext";
import User from "./User";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    // console.log(`Render Phase: Parent Constructor`);
  }

  componentDidMount() {
    // console.log(`Commit Phase: Parent Component Did Mount`);
  }

  componentDidUpdate() {
    // console.log(`Updating :: Commit Phase: Parent Component Did Update`);
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
    // console.log(`Render Phase: Parent Render`);
    return (
      <div className="w-4/12 m-auto border p-4">
        <div className="font-bold text-center">About Us Page</div>
        {/* <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div> */}
        <User
          {...userData}
          componentType="Functional"
        />
      </div>
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
