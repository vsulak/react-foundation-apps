import React from 'react';
var classnames = require('classnames');

class AccordionItem extends React.Component {
  render() {
    var itemClasses = {
      'accordion-item': true,
      'is-active': this.props.active
    };
    return (
      <div className={classnames(itemClasses)}>
        <div className='accordion-title' onClick={this.props.activate}>
          {this.props.title}
        </div>
        <div className='accordion-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

module.exports = AccordionItem;
