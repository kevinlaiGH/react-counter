import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  //   This does not take into account the asychronous nature that setState can use and might cause errors with out of sync state data.
  //     handleClick() {
  //       this.setState({ value: this.state.value + 1 });
  //     }

  //   handleClick calls setState with a call back to increase the value from the previous state’s counter value
  handleClick() {
    this.setState((prevState, props) => {
      return { value: prevState.value + 1 };
    });
  }

  render() {
    return (
      <React.Fragment>
        <h4>{this.props.id}</h4>

        <span className={this.getBadgeClasses()} style={this.styles}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleClick()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    const x = "Zero";
    return value === 0 ? x : value;
  }
}

export default Counter;
