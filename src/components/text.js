import React, { Component } from 'react';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  handleInputChange = (event) => {
    const content = event.target.value;

 
    const charCount = content.length;

    const trimmedContent = content.trim();


    const words = trimmedContent.split(/\s/);
    const wordCount = words.filter((element) => element !== '').length;

    this.setState({
      content,
      charCount,
      wordCount,
    });
  };

  render() {
    return (
      <div className=" text-center bg-warning col-md-4 col-lg-5 m-4 p-3 rounded">
        <center>
        <textarea style={{ height: "200px", width: "400px" }} className=" mt-4 text-center rounded" placeholder="enter text" id="area" onChange={this.handleInputChange} value={this.state.content} />
        <p>Character count: {this.state.charCount}</p>
        <p>Word count: {this.state.wordCount}</p>
        </center>
      </div>
    );
  }
}

export default Text;