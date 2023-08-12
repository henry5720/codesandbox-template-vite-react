import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./ReactClass.css";

interface State {
  x: number;
  y: number;
}

class Acomponent extends React.Component<{}, State> {
  state: State = {
    x: 0,
    y: 0,
  };
  handleMouseMove = (event: MouseEvent) => {
    this.setState({
      x: event.pageX,
      y: event.pageY,
    });
  };
  componentDidMount() {
    document.addEventListener("mousemove", this.handleMouseMove);
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handleMouseMove);
  }
  render(): ReactNode {
    return (
      <div>
        Acomponent: {this.state.x}, {this.state.y}
      </div>
    );
  }
}

class Bcomponent extends React.Component<{}, State> {
  state: State = {
    x: 0,
    y: 0,
  };
  handleMouseMove = (event: MouseEvent) => {
    this.setState({
      x: event.pageX,
      y: event.pageY,
    });
  };
  componentDidMount() {
    document.addEventListener("mousemove", this.handleMouseMove);
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handleMouseMove);
  }
  render(): ReactNode {
    return (
      <span
        style={{
          position: "absolute",
          left: this.state.x,
          top: this.state.y,
          padding: "5px 10px",
          border: "2px solid #ccc",
          borderRadius: "10px",
          color: "#ccc",
        }}
      >
        Bcomponent
      </span>
    );
  }
}

function ReactClass() {
  return (
    <>
      <Acomponent />
      <Bcomponent />
      <Link
        to="/"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        Home
      </Link>
    </>
  );
}
export default ReactClass;
