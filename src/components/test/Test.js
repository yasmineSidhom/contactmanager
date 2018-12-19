import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    completed: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          completed: data.completed
        })
      );
  }

  //   componentWillMount() {
  //     console.log("component will mount...");
  //   }

  //   componentDidUpdate() {
  //     console.log("component did update...");
  //   }

  //   componentWillUpdate() {
  //     console.log("component will update...");
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log("component will recieve props...");
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return {
  //       test: "something" //you can't set state
  //     };
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log("getSnapshotBeforeUpdate...");
  //   }

  render() {
    const { title, completed } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{completed.toString()}</p>
      </div>
    );
  }
}
export default Test;
