import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  handleClick() {
    this.setState({ value: this.state.value + 1 });
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
