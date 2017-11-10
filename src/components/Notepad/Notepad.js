import React, { Component } from 'react'
import Remarkable from 'remarkable'
import './Notepad.css'
import { addTodo } from '../../actions/notes'

// Consider using Prism?

class Notepad extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Type some *markdown* here!' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    return (
      <div className="notepad">
        <div className="notepad__textarea">
          <h3>Input</h3>
          <textarea
            onChange={this.handleChange}
            defaultValue={this.state.value}
          />
        </div>
        <div className="notepad__output">
          <h3>Output</h3>
          <div
            className="notepad__content"
            dangerouslySetInnerHTML={this.getRawMarkup()}
          />
        </div>
      </div>
    );
  }
}
export default Notepad
