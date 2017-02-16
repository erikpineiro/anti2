import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import QuestionAnswer from "./QuestionAnswer";
import NextQAButton from "./NextQAButton";

require('../../sass/Layout.scss');


export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome me!",
      idQA: 0,
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  getQuestionAnswer () {
    console.log("gettingQA: " + this.state.idQA);
    const allQAs = [
      {question: "The sea is...", answer: "Blue", isTrue: true},
      {question: "The sea is...", answer: "A ball", isTrue: false},
      {question: "The sea is...", answer: "A turtle", isTrue: false},
      {question: "The sea is...", answer: "Water", isTrue: true},
      {question: "The sea is...", answer: "A fire", isTrue: false},
    ];
      return allQAs[this.state.idQA];
  }

  newQuestionAnswer () {
    const newQAID = this.state.idQA+1;
    this.setState ({idQA: newQAID});
    }


  render() {
    return (
      <div>

        <div id = "leftMain"></div>
        <div id = "midMain">
          <QuestionAnswer qa={this.getQuestionAnswer()} />
          <NextQAButton getNextQA={this.newQuestionAnswer.bind(this)} />
        </div>
        <div id = "rightMain"></div>
        
      </div>
    );
  }
}
