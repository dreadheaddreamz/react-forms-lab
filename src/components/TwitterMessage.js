import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handle = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let charN = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handle} value={this.state.message} />
        {charN}
      </div>
    );
  }
}

export default TwitterMessage;
