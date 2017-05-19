import React from 'react';


class Output extends React.Component {
  render() {
    const marked = require('marked');
    var content = marked(this.props.content, {sanitize: true});

    function setMarkup() {
      return {__html: content};
    }

    return (
      <div className="six columns" id="output" dangerouslySetInnerHTML={setMarkup()}></div>
    )
  }
}
export default Output;
