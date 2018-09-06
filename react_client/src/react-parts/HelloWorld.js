import React from "react";

export class HelloWorld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hello: []
    };

    this.handleAPI = this.handleAPI.bind(this);
  }

  handleAPI() {
    this.callAPI().then(res => {
      this.setState({
        hello: res.message
      });
    });
  }

  callAPI = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    return body;
  };

  render() {
    return (
      <div>
        <h3>{this.state.hello}</h3>
        <button onClick={this.handleAPI}>Call API</button>
      </div>
    );
  }
}
