import React from 'react';
import Input from './Input';
import Output from './Output';

class App extends React.Component {
   constructor() {
        super();
        this.state = {
          value : "Heading\n=======\n\nSub-heading\n-----------\n \n### One more heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * cat food\n  * cat toy\n  * cat\n\nNumbered list:\n\n  1. one cat\n  2. two cats\n  3. red cat\n\nJazz cat got your  \nblues?\n\n[Marked](https://github.com/chjj/marked)\n[Kelsey Hutchison](https://www.freecodecamp.com/hutchisonk)"
          };
          this.updateOutput = this.updateOutput.bind(this);
    }

    updateOutput(newoutput) {
      this.setState({ value:newoutput });
    }
    render() {
      return <div>
          <Input starting_content={this.state.value}
                 updateOutput={this.updateOutput}/>

          <Output content={this.state.value}/>
            </div>;
    }
}

export default App;
