import React from "react";

require('../../sass/QuestionAnswer.scss');

export default class QuestionAnswer extends React.Component {

  render() {
    const qa = this.props.qa;
    return (
      <div id="questionAnswer" draggable="true" onDrag={() => {console.log("11");}} onMouseEnter={() => {console.log("11");}}>
        <p>{qa.question}</p>
        <p>{qa.answer}</p>
      </div>
    );
  }
}
