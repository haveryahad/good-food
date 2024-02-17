import React from "react";

class UserGrandChild extends React.Component {
  constructor(props) {
    super(props);

    console.log(`Render Phase: ${this.props.componentType} Constructor`);
  }

  componentDidMount() {
    console.log(
      `Commit Phase: ${this.props.componentType} Component Did Mount`
    );
  }

  render() {
    console.log(`Render Phase: ${this.props.componentType} Render`);
  }
}

export default UserGrandChild;
