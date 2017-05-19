import React from 'react';
class Input extends React.Component {
  constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
  }

   handleChange(e) {
      this.props.updateOutput(e.target.value);
   }

  render() {
    const starting_content = this.props.starting_content;
    return (
    <div className="six columns" id="input">
        <textarea type="text" value={this.rawInput} defaultValue={starting_content} onChange={(e) => this.handleChange(e)}></textarea>
    </div>
    )
  }
}
export default Input;
