var React = require('react');


class Tabs extends React.Component {
  state = {
    selectedTab: 0
  };

  selectTab = (options) => {
    this.setState(options);
  };

  render() {
    var content = null;
    var children = React.Children.map(this.props.children, function (child, index) {
      if(index === this.state.selectedTab) content = child.props.children;
      return React.cloneElement(child, {
        active: (index === this.state.selectedTab),
        index: index,
        selectTab: this.selectTab
      });
    }.bind(this));
    return (
      <div>
        <div className='tabs'>{children}</div>
        <div className='content'>{content}</div>
      </div>
    );
  }
}

module.exports = Tabs;
Tabs.Tab = require('./tab');
