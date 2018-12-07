import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  renderTags() {
    const sometags = this.state.tags.map(x => <li key={x}>{x}</li>);
    return this.state.tags.length === 0 ? "Zero tags" : sometags;
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()} style={this.styles}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleClick()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          <li>
            {this.state.tags.length === 3 && <p>we have 3 tags :D</p>}
            {this.renderTags()}
          </li>
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    const x = "Zero";
    return count === 0 ? x : count;
  }
}

export default Counter;
