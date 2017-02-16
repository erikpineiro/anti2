import React from "react";


export default class NextQAButton extends React.Component {

	dragStart (e) {
		console.log("drag");
		console.log (e);
	}

	render() {
    	return (
			<button draggable="true" onClick={this.props.getNextQA} onMouseEnter={this.dragStart.bind(this)} onDrag={this.dragStart.bind(this)}>NEXT</button>
		);
	}
}
