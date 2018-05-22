var React = require('react');
var classnames = require('classnames');

class Tab extends React.Component {
  select = () => {
    var options = {
      selectedTab: this.props.index
    };
    this.props.selectTab(options);
  };

  render() {
    var classes = {
      'tab-item': true,
      'is-active': this.props.active
    };
    return (
      <div className={classnames(classes)} onClick={this.select}>
        {this.props.title}
      </div>
    );
  }
}

export default Tab;
