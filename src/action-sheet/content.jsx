import React from 'react';
var classnames = require('classnames');

class ActionSheetContent extends React.Component {
  static defaultProps = {position: 'bottom'};

  render() {
    var classes = {
      'action-sheet': true,
      'is-active': this.props.active
    };
    return (
      <div className={classnames(classes)}>{this.props.children}</div>
    );
  }
}

module.exports = ActionSheetContent;
